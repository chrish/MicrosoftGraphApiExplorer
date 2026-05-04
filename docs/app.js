async function loadJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.status}`);
  }
  return response.json();
}

function buildTree(rows) {
  const root = {};

  for (const row of rows) {
    const path = [...(row.segments || [])];
    if (row.member) {
      path.push(row.member);
    }

    if (path.length === 0) {
      continue;
    }

    let cursor = root;
    for (let i = 0; i < path.length; i++) {
      const segment = path[i];
      if (!cursor[segment]) {
        cursor[segment] = { _meta: null };
      }
      // Attach metadata only at the leaf of this row's path
      if (i === path.length - 1) {
        cursor[segment]._meta = {
          target: row.target || "",
          description: row.description || "",
          longDescription: row.longDescription || ""
        };
      }
      cursor = cursor[segment];
    }
  }

  return root;
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function getSearchText(row) {
  return normalize(
    [
      row.target,
      (row.segments || []).join(" "),
      row.member,
      row.description,
      row.longDescription,
      (row.terms || []).join(" ")
    ].join(" ")
  );
}

function filterRows(rows, query) {
  const q = normalize(query).trim();
  if (!q) {
    return rows;
  }
  return rows.filter((row) => getSearchText(row).includes(q));
}

function highlightText(text, query) {
  const frag = document.createDocumentFragment();
  if (!query) {
    frag.appendChild(document.createTextNode(text));
    return frag;
  }
  const lower = text.toLowerCase();
  const lowerQ = query.toLowerCase();
  let pos = 0;
  let idx;
  while ((idx = lower.indexOf(lowerQ, pos)) !== -1) {
    if (idx > pos) {
      frag.appendChild(document.createTextNode(text.slice(pos, idx)));
    }
    const mark = document.createElement("mark");
    mark.textContent = text.slice(idx, idx + query.length);
    frag.appendChild(mark);
    pos = idx + query.length;
  }
  if (pos < text.length) {
    frag.appendChild(document.createTextNode(text.slice(pos)));
  }
  return frag;
}

function renderTreeNode(name, node, expandAll, query) {
  const meta = node._meta;
  const childEntries = Object.entries(node)
    .filter(([k]) => k !== "_meta")
    .sort((a, b) => a[0].localeCompare(b[0]));

  const hasChildren = childEntries.length > 0;
  const hasDescription = meta && meta.description;
  const hasTarget = meta && meta.target;

  // Plain segment with no metadata and no children (rare but safe)
  if (!hasChildren && !hasDescription && !hasTarget) {
    const span = document.createElement("span");
    span.className = "tree-leaf-plain";
    span.appendChild(highlightText(name, query));
    return span;
  }

  const details = document.createElement("details");
  details.className = "tree-node";
  details.open = expandAll;

  const summary = document.createElement("summary");
  summary.className = "tree-name";
  summary.appendChild(highlightText(name, query));
  details.appendChild(summary);

  if (hasDescription) {
    const desc = document.createElement("em");
    desc.className = "tree-desc";
    desc.appendChild(highlightText(meta.description, query));
    details.appendChild(desc);
  }

  if (hasTarget) {
    const targetEl = document.createElement("code");
    targetEl.className = "tree-target";
    targetEl.appendChild(highlightText(`Target: ${meta.target}`, query));
    details.appendChild(targetEl);
  }

  for (const [childName, childNode] of childEntries) {
    details.appendChild(renderTreeNode(childName, childNode, expandAll, query));
  }

  return details;
}

function renderTree(rootNode, tree, expandAll, query) {
  rootNode.innerHTML = "";

  const entries = Object.entries(tree)
    .filter(([k]) => k !== "_meta")
    .sort((a, b) => a[0].localeCompare(b[0]));
  for (const [name, child] of entries) {
    rootNode.appendChild(renderTreeNode(name, child, expandAll, query));
  }
}

function renderSummary(summary) {
  const summaryEl = document.getElementById("summary");
  const date = new Date(summary.generatedAt).toLocaleString();
  summaryEl.textContent = `${summary.count} annotation targets | Generated ${date}`;
}

function renderSearchStatus(matchCount, totalCount, query) {
  const status = document.getElementById("searchStatus");
  if (!query.trim()) {
    status.textContent = "Showing all targets.";
    return;
  }

  status.textContent = `Showing ${matchCount} of ${totalCount} targets for "${query}".`;
}

function debounce(fn, waitMs) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), waitMs);
  };
}

(async function bootstrap() {
  const treeRoot = document.getElementById("tree");
  const searchInput = document.getElementById("globalSearch");
  const versionSelect = document.getElementById("versionSelect");
  const summaryEl = document.getElementById("summary");

  let currentRows = [];

  const updateSearch = debounce((query) => {
    const q = query.trim();
    const matches = filterRows(currentRows, query);
    const filteredTree = buildTree(matches);
    renderTree(treeRoot, filteredTree, Boolean(q), q);
    renderSearchStatus(matches.length, currentRows.length, query);
  }, 120);

  searchInput.addEventListener("input", (event) => {
    updateSearch(event.target.value || "");
  });

  async function loadVersion(version) {
    summaryEl.textContent = "Loading…";
    treeRoot.innerHTML = "";
    searchInput.value = "";

    const [rows, summary] = await Promise.all([
      loadJson(`data/${version.targetsFile}`),
      loadJson(`data/${version.summaryFile}`)
    ]);

    currentRows = rows;
    renderSummary(summary);
    renderTree(treeRoot, buildTree(rows), false, "");
    renderSearchStatus(rows.length, rows.length, "");
  }

  try {
    const versions = await loadJson("data/versions.json");

    versions.forEach((v) => {
      const option = document.createElement("option");
      option.value = v.id;
      option.textContent = v.label;
      versionSelect.appendChild(option);
    });

    versionSelect.addEventListener("change", () => {
      const selected = versions.find((v) => v.id === versionSelect.value);
      if (selected) {
        loadVersion(selected);
      }
    });

    await loadVersion(versions[0]);
  } catch (error) {
    console.error(error);
    summaryEl.textContent = "Failed to load metadata.";
  }
})();
