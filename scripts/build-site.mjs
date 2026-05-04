import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { XMLParser } from "fast-xml-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const VERSIONS = [
  {
    id: "beta",
    label: "Microsoft Graph beta",
    url: "https://graph.microsoft.com/beta/$metadata",
    metadataFile: "metadata-beta.xml",
    targetsFile: "targets-beta.json",
    summaryFile: "summary-beta.json",
    markdownFile: "targets-beta.md"
  },
  {
    id: "v1.0",
    label: "Microsoft Graph v1.0",
    url: "https://graph.microsoft.com/v1.0/$metadata",
    metadataFile: "metadata-v1.xml",
    targetsFile: "targets-v1.json",
    summaryFile: "summary-v1.json",
    markdownFile: "targets-v1.md"
  }
];

// Legacy single-path constants kept for backwards compat reference only
const metadataPath = path.join(projectRoot, "metadata.xml");

const docsDir = path.join(projectRoot, "docs");
const dataDir = path.join(docsDir, "data");

const args = new Set(process.argv.slice(2));
const shouldFetch = args.has("--fetch") || args.has("--fetch-only");
const fetchOnly = args.has("--fetch-only");

function asArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function formatSegment(segment) {
  if (!segment) {
    return segment;
  }

  const lower = segment.toLowerCase();
  if (lower === "microsoft") {
    return "Microsoft";
  }
  if (lower === "graph") {
    return "Graph";
  }

  return segment[0].toUpperCase() + segment.slice(1);
}

function extractAnnotationText(annotation) {
  if (!annotation || typeof annotation !== "object") {
    return "";
  }

  if (typeof annotation["@_String"] === "string") {
    return annotation["@_String"].trim();
  }

  if (typeof annotation.String === "string") {
    return annotation.String.trim();
  }

  if (typeof annotation["#text"] === "string") {
    return annotation["#text"].trim();
  }

  return "";
}

function parseMetadata(xml) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    parseTagValue: false,
    trimValues: false
  });

  const parsed = parser.parse(xml);
  const schemas = asArray(parsed?.["edmx:Edmx"]?.["edmx:DataServices"]?.Schema);

  const rows = [];

  for (const schema of schemas) {
    const namespace = schema?.["@_Namespace"] ?? "";
    const annotationsBlocks = asArray(schema?.Annotations);

    for (const block of annotationsBlocks) {
      const target = block?.["@_Target"];
      if (!target) {
        continue;
      }

      const [typePathRaw, memberRaw] = target.split("/");
      const typePath = typePathRaw ?? "";
      const member = memberRaw ?? "";

      const rawSegments = typePath.split(".").filter(Boolean);
      const displaySegments = rawSegments.map(formatSegment);

      const annotations = asArray(block?.Annotation);
      const terms = [];
      let description = "";
      let longDescription = "";

      for (const annotation of annotations) {
        const term = annotation?.["@_Term"] ?? "";
        if (term) {
          terms.push(term);
        }

        const value = extractAnnotationText(annotation);
        if (!value) {
          continue;
        }

        if (!description && term === "Org.OData.Core.V1.Description") {
          description = value;
        }

        if (!longDescription && term === "Org.OData.Core.V1.LongDescription") {
          longDescription = value;
        }
      }

      rows.push({
        namespace,
        target,
        typePath,
        member,
        segments: displaySegments,
        terms,
        description,
        longDescription
      });
    }
  }

  rows.sort((a, b) => a.target.localeCompare(b.target));
  return rows;
}

function buildTree(rows) {
  const root = new Map();

  for (const row of rows) {
    const pathSegments = [...row.segments];
    if (row.member) {
      pathSegments.push(row.member);
    }

    if (pathSegments.length === 0) {
      continue;
    }

    let cursor = root;
    for (const segment of pathSegments) {
      if (!cursor.has(segment)) {
        cursor.set(segment, new Map());
      }
      cursor = cursor.get(segment);
    }
  }

  return root;
}

function renderTreeMarkdown(tree, depth = 0) {
  const lines = [];
  const entries = [...tree.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, child] of entries) {
    const indent = "  ".repeat(depth);
    lines.push(`${indent}- ${name}`);
    lines.push(...renderTreeMarkdown(child, depth + 1));
  }

  return lines;
}

function csvQuote(value) {
  const text = String(value ?? "");
  return text.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function buildMarkdown(rows, version) {
  const generatedAt = new Date().toISOString();
  const tree = buildTree(rows);
  const treeLines = renderTreeMarkdown(tree);

  const previewRows = rows.slice(0, 200);
  const tableHeader = [
    "| Target | Description | Long Description | Annotation Terms |",
    "| --- | --- | --- | --- |"
  ];
  const tableLines = previewRows.map((row) => {
    const terms = row.terms.join(", ");
    return `| ${csvQuote(row.target)} | ${csvQuote(row.description)} | ${csvQuote(row.longDescription)} | ${csvQuote(terms)} |`;
  });

  return [
    `# ${version.label} Annotation Targets`,
    "",
    `Generated from ${version.url}`,
    "",
    `Generated at: ${generatedAt}`,
    `Total annotation targets: ${rows.length}`,
    "",
    "## Namespace Target Tree",
    "",
    ...treeLines,
    "",
    "## Target Catalog Preview (first 200 rows)",
    "",
    "The complete searchable catalog is available in the website table and JSON dataset.",
    "",
    ...tableHeader,
    ...tableLines,
    ""
  ].join("\n");
}

async function fetchMetadataForVersion(version) {
  const destPath = path.join(projectRoot, version.metadataFile);
  const response = await fetch(version.url, { headers: { Accept: "application/xml" } });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${version.url}: HTTP ${response.status}`);
  }
  const xml = await response.text();
  await fs.writeFile(destPath, xml, "utf8");
  return destPath;
}

async function processVersion(version) {
  const srcPath = path.join(projectRoot, version.metadataFile);
  const targetsPath = path.join(dataDir, version.targetsFile);
  const summaryPath = path.join(dataDir, version.summaryFile);
  const markdownPath = path.join(docsDir, version.markdownFile);

  if (shouldFetch || !(await fileExists(srcPath))) {
    console.log(`Fetching ${version.label} metadata...`);
    await fetchMetadataForVersion(version);
    console.log(`  Saved: ${srcPath}`);
  }

  if (fetchOnly) {
    return;
  }

  const xml = await fs.readFile(srcPath, "utf8");
  const rows = parseMetadata(xml);
  const markdown = buildMarkdown(rows, version);

  await fs.writeFile(markdownPath, markdown, "utf8");
  await fs.writeFile(targetsPath, JSON.stringify(rows, null, 2), "utf8");
  await fs.writeFile(
    summaryPath,
    JSON.stringify(
      {
        id: version.id,
        label: version.label,
        source: version.url,
        generatedAt: new Date().toISOString(),
        count: rows.length
      },
      null,
      2
    ),
    "utf8"
  );

  console.log(`  Wrote: ${markdownPath}`);
  console.log(`  Wrote: ${targetsPath}`);
  console.log(`  Wrote: ${summaryPath}`);
}

async function main() {
  await fs.mkdir(dataDir, { recursive: true });

  for (const version of VERSIONS) {
    await processVersion(version);
  }

  if (!fetchOnly) {
    // Write a versions manifest the site can read to populate the dropdown
    const manifest = VERSIONS.map((v) => ({
      id: v.id,
      label: v.label,
      targetsFile: v.targetsFile,
      summaryFile: v.summaryFile
    }));
    await fs.writeFile(
      path.join(dataDir, "versions.json"),
      JSON.stringify(manifest, null, 2),
      "utf8"
    );
    console.log(`  Wrote: versions.json`);
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
