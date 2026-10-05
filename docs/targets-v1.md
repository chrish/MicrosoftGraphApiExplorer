# Microsoft Graph v1.0 Annotation Targets

Generated from https://graph.microsoft.com/v1.0/$metadata

Generated at: 2026-10-05T11:19:11.945Z
Total annotation targets: 277

## Namespace Target Tree

- Microsoft
  - Graph
    - AgentIdentity
      - agentIdentityBlueprintId
      - managerApplications
    - AgentIdentityBlueprintPrincipal
      - managerApplications
    - Alert
    - AlertDetection
    - AlertFeedback
    - AlertHistoryState
    - AlertSeverity
    - AlertStatus
    - AlertTrigger
    - AndroidStoreApp
      - packageId
    - ApplePushNotificationCertificate
      - certificateSerialNumber
    - Application
      - createdByAppId
    - AvailableProviderTypes(Collection(microsoft
      - Graph
        - IdentityProvider))
    - B2xIdentityUserFlow
      - identityProviders
    - BackupRestoreRoot
      - protectionUnits
    - BookingAppointment
      - customerNotes
      - duration
      - filledAttendeesCount
      - serviceId
    - BookingBusiness
      - isPublished
      - publicUrl
    - BookingCurrency
      - symbol
    - BookingService
      - webUrl
    - CallRecords
      - CallRecord
        - organizer
        - participants
      - ParticipantEndpoint
        - identity
    - Certification
      - certificationDetailsUrl
      - isCertifiedByMicrosoft
    - ChangeTrackedEntity
      - createdDateTime
      - lastModifiedBy
      - lastModifiedDateTime
    - CloudAppSecurityState
    - ConfigurationDrift
      - baselineResourceDisplayName
      - driftedProperties
      - firstReportedDateTime
      - monitorId
      - resourceInstanceIdentifier
      - resourceType
      - status
      - tenantId
    - ConfigurationMonitor
      - createdBy
      - createdDateTime
      - inactivationReason
      - lastModifiedBy
      - lastModifiedDateTime
      - monitorRunFrequencyInHours
      - status
      - tenantId
    - ConfigurationMonitoringResult
      - driftsCount
      - errorDetails
      - monitorId
      - runCompletionDateTime
      - runInitiationDateTime
      - runStatus
      - tenantId
    - ConfigurationSnapshotJob
      - completedDateTime
      - createdBy
      - createdDateTime
      - errorDetails
      - resourceLocation
      - status
      - tenantId
    - ConnectionDirection
    - ConnectionStatus
    - CreateSnapshot(Collection(microsoft
      - Graph
        - ConfigurationBaseline), Edm
          - String, Edm
            - String, Collection(Edm
              - String))
    - Directory
      - remoteTenantGroups
    - DriftedProperty
      - currentValue
      - desiredValue
      - propertyName
    - DriveProtectionUnit
      - displayName
      - email
    - DriveRestoreArtifact
      - restoredSiteName
      - restoredSiteWebUrl
    - EducationAssignment
      - assignDateTime
      - assignedDateTime
      - createdBy
      - createdDateTime
      - feedbackResourcesFolderUrl
      - lastModifiedBy
      - lastModifiedDateTime
      - resourcesFolderUrl
      - status
      - webUrl
    - EducationModule
      - createdBy
      - createdDateTime
      - lastModifiedBy
      - lastModifiedDateTime
      - resourcesFolderUrl
      - status
    - EducationResource
      - createdBy
      - createdDateTime
      - lastModifiedBy
      - lastModifiedDateTime
    - EducationRubric
      - createdBy
      - createdDateTime
      - lastModifiedBy
      - lastModifiedDateTime
    - EducationSubmission
      - assignmentId
      - excusedBy
      - excusedDateTime
      - lastModifiedBy
      - lastModifiedDateTime
      - reassignedBy
      - reassignedDateTime
      - resourcesFolderUrl
      - returnedBy
      - returnedDateTime
      - status
      - submittedBy
      - submittedDateTime
      - unsubmittedBy
      - unsubmittedDateTime
      - webUrl
    - EmailRole
    - EngagementConversationMessage
      - createdDateTime
      - lastModifiedDateTime
    - EngagementConversationMessageReaction
      - createdDateTime
      - reactionBy
      - reactionType
    - EngagementRoleMember
      - createdDateTime
      - userId
    - ErrorDetail
      - errorMessage
      - resourceInstanceName
      - resourceType
    - ExternalConnectors
      - ExternalConnection
        - state
    - Fido2AuthenticationMethodConfiguration
      - isAttestationEnforced
      - keyRestrictions
    - FileHash
    - FileHashType
    - FileSecurityState
    - GetAllOnlineMeetingMessages(microsoft
      - Graph
        - CloudCommunications)
    - GraphService
      - admin
      - identityProviders
    - HostSecurityState
    - IdentifierUriRestriction
      - isStateSetByMicrosoft
    - IdentityProvider
    - InvestigationSecurityState
    - LogonType
    - MailboxProtectionUnit
      - displayName
      - email
    - MailboxRestoreArtifact
      - restoredFolderName
    - MalwareState
    - ManagedApp
      - appAvailability
    - ManagedDevice
      - activationLockBypassCode
      - androidSecurityPatchLevel
      - azureADDeviceId
      - azureADRegistered
      - complianceGracePeriodExpirationDateTime
      - complianceState
      - configurationManagerClientEnabledFeatures
      - deviceActionResults
      - deviceCategoryDisplayName
      - deviceEnrollmentType
      - deviceHealthAttestationState
      - deviceName
      - deviceRegistrationState
      - easActivated
      - easActivationDateTime
      - easDeviceId
      - emailAddress
      - enrolledDateTime
      - enrollmentProfileName
      - ethernetMacAddress
      - exchangeAccessState
      - exchangeAccessStateReason
      - exchangeLastSuccessfulSyncDateTime
      - freeStorageSpaceInBytes
      - iccid
      - imei
      - isEncrypted
      - isSupervised
      - jailBroken
      - lastSyncDateTime
      - managementAgent
      - managementCertificateExpirationDate
      - managementState
      - manufacturer
      - meid
      - model
      - operatingSystem
      - osVersion
      - partnerReportedThreatState
      - phoneNumber
      - physicalMemoryInBytes
      - remoteAssistanceSessionErrorDetails
      - remoteAssistanceSessionUrl
      - requireUserEnrollmentApproval
      - serialNumber
      - subscriberCarrier
      - totalStorageSpaceInBytes
      - udid
      - userDisplayName
      - userId
      - userPrincipalName
      - wiFiMacAddress
    - ManagedMobileLobApp
      - size
    - MessageSecurityState
    - MobileApp
      - createdDateTime
      - lastModifiedDateTime
      - publishingState
    - MobileAppCategory
      - lastModifiedDateTime
    - MobileAppContentFile
      - azureStorageUri
      - azureStorageUriExpirationDateTime
      - createdDateTime
      - isCommitted
      - uploadState
    - MobileAppRelationship
      - sourceDisplayName
      - sourceDisplayVersion
      - sourceId
      - sourcePublisherDisplayName
      - targetDisplayName
      - targetDisplayVersion
      - targetPublisherDisplayName
    - MobileLobApp
      - size
    - NetworkConnection
    - Note
      - bodyPreview
      - hasAttachments
      - isDeleted
    - OfferShiftRequest
      - recipientActionDateTime
    - OnlineMeetingEngagementConversation
      - organizer
      - upvoteCount
    - Permission
      - grantedTo
      - grantedToIdentities
    - PlannerPlan
      - owner
    - Presence
      - sequenceNumber
    - Privacy
      - subjectRightsRequests
    - Process
    - ProcessConversationMetadata
      - accessedResources
    - ProcessIntegrityLevel
    - Recent(microsoft
      - Graph
        - Drive)
    - RegistryHive
    - RegistryKeyState
    - RegistryOperation
    - RegistryValueType
    - RelatedTenant
      - isMicrosoftInfrastructure
    - RelationshipPolicy
      - version
    - RemoteTenantGroup
    - Retrieval(microsoft
      - Graph
        - CopilotRoot, Edm
          - String, microsoft
            - Graph
              - RetrievalDataSource, Edm
                - String, Collection(Edm
                  - String), Edm
                    - Int32, microsoft
                      - Graph
                        - DataSourceConfiguration)
    - Schedule
      - provisionStatus
      - provisionStatusCode
    - ScheduleChangeRequest
      - managerActionDateTime
      - managerUserId
      - senderDateTime
      - senderUserId
    - SchedulingGroup
      - isActive
    - Security
      - Alert
        - category
      - AuditLogQuery
        - approximateReturnedRecordCount
        - isRecordCountLimitExceeded
        - recordCountLimit
      - DetonationBehaviourDetails
    - SecurityNetworkProtocol
    - SecurityResource
    - SecurityResourceType
    - ServicePrincipal
      - createdByAppId
    - SharedInsight
      - resourceReference
      - resourceVisualization
    - SharedWithMe(microsoft
      - Graph
        - Drive)
    - SharingDetail
      - sharingReference
    - SiteProtectionUnit
      - siteName
      - siteWebUrl
    - SiteRestoreArtifact
      - restoredSiteName
      - restoredSiteWebUrl
    - Trending
      - resourceReference
      - resourceVisualization
    - UriClickSecurityState
    - UsedInsight
      - resourceReference
      - resourceVisualization
    - UserAccountSecurityType
    - UserSecurityState
    - VulnerabilityState
    - Windows81GeneralConfiguration
      - applyOnlyToWindows81
    - WindowsPhone81GeneralConfiguration
      - applyOnlyToWindowsPhone81
    - WindowsUpdateForBusinessConfiguration
      - featureUpdatesPauseStartDate
      - qualityUpdatesPauseStartDate

## Target Catalog Preview (first 200 rows)

The complete searchable catalog is available in the website table and JSON dataset.

| Target | Description | Long Description | Annotation Terms |
| --- | --- | --- | --- |
| microsoft.graph.agentIdentity/agentIdentityBlueprintId |  |  | Org.OData.Core.V1.Immutable |
| microsoft.graph.agentIdentity/managerApplications |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.agentIdentityBlueprintPrincipal/managerApplications |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.alert |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.alertDetection |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.alertFeedback |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.alertHistoryState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.alertSeverity |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.alertStatus |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.alertTrigger |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.androidStoreApp/packageId |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.applePushNotificationCertificate/certificateSerialNumber |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.application/createdByAppId |  |  | Org.OData.Core.V1.Immutable |
| microsoft.graph.availableProviderTypes(Collection(microsoft.graph.identityProvider)) |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.b2xIdentityUserFlow/identityProviders |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.backupRestoreRoot/protectionUnits |  |  | Org.OData.Core.V1.ExplicitOperationBindings |
| microsoft.graph.bookingAppointment/customerNotes |  |  | Org.OData.Core.V1.Immutable |
| microsoft.graph.bookingAppointment/duration |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.bookingAppointment/filledAttendeesCount |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.bookingAppointment/serviceId |  |  | Org.OData.Core.V1.Immutable |
| microsoft.graph.bookingBusiness/isPublished |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.bookingBusiness/publicUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.bookingCurrency/symbol |  |  | Org.OData.Core.V1.IsLanguageDependent |
| microsoft.graph.bookingService/webUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.callRecords.callRecord/organizer |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.callRecords.callRecord/participants |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.callRecords.participantEndpoint/identity |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.certification/certificationDetailsUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.certification/isCertifiedByMicrosoft |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.changeTrackedEntity/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.changeTrackedEntity/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.changeTrackedEntity/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.cloudAppSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.configurationDrift/baselineResourceDisplayName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationDrift/driftedProperties |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationDrift/firstReportedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationDrift/monitorId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Immutable |
| microsoft.graph.configurationDrift/resourceInstanceIdentifier |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationDrift/resourceType |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationDrift/status |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationDrift/tenantId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Immutable |
| microsoft.graph.configurationMonitor/createdBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitor/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitor/inactivationReason |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitor/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitor/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitor/monitorRunFrequencyInHours |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitor/status |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitor/tenantId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Immutable |
| microsoft.graph.configurationMonitoringResult/driftsCount |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitoringResult/errorDetails |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitoringResult/monitorId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Immutable |
| microsoft.graph.configurationMonitoringResult/runCompletionDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitoringResult/runInitiationDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitoringResult/runStatus |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationMonitoringResult/tenantId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Immutable |
| microsoft.graph.configurationSnapshotJob/completedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationSnapshotJob/createdBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationSnapshotJob/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationSnapshotJob/errorDetails |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationSnapshotJob/resourceLocation |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationSnapshotJob/status |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.configurationSnapshotJob/tenantId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Immutable |
| microsoft.graph.connectionDirection |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.connectionStatus |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.createSnapshot(Collection(microsoft.graph.configurationBaseline), Edm.String, Edm.String, Collection(Edm.String)) |  |  | Org.OData.Core.V1.RequiresExplicitBinding |
| microsoft.graph.directory/remoteTenantGroups |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.driftedProperty/currentValue |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.driftedProperty/desiredValue |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.driftedProperty/propertyName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.driveProtectionUnit/displayName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.driveProtectionUnit/email |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.driveRestoreArtifact/restoredSiteName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.driveRestoreArtifact/restoredSiteWebUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/assignDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/assignedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/createdBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/feedbackResourcesFolderUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/resourcesFolderUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/status |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationAssignment/webUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationModule/createdBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationModule/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationModule/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationModule/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationModule/resourcesFolderUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationModule/status |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationResource/createdBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationResource/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationResource/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationResource/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationRubric/createdBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationRubric/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationRubric/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationRubric/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/assignmentId |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/excusedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/excusedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/reassignedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/reassignedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/resourcesFolderUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/returnedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/returnedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/status |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/submittedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/submittedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/unsubmittedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/unsubmittedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.educationSubmission/webUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.emailRole |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.engagementConversationMessage/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementConversationMessage/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementConversationMessageReaction/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementConversationMessageReaction/reactionBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementConversationMessageReaction/reactionType |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementRoleMember/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementRoleMember/userId |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.errorDetail/errorMessage |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.errorDetail/resourceInstanceName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.errorDetail/resourceType |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.externalConnectors.externalConnection/state |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.fido2AuthenticationMethodConfiguration/isAttestationEnforced |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.fido2AuthenticationMethodConfiguration/keyRestrictions |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.fileHash |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.fileHashType |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.fileSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.getAllOnlineMeetingMessages(microsoft.graph.cloudCommunications) |  |  | Org.OData.Core.V1.RequiresExplicitBinding |
| microsoft.graph.GraphService/admin/configurationManagement/configurationSnapshots |  |  | Org.OData.Core.V1.ExplicitOperationBindings |
| microsoft.graph.GraphService/identityProviders |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.hostSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.identifierUriRestriction/isStateSetByMicrosoft |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.identityProvider |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.investigationSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.logonType |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.mailboxProtectionUnit/displayName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.mailboxProtectionUnit/email |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.mailboxRestoreArtifact/restoredFolderName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.malwareState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.managedApp/appAvailability |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/activationLockBypassCode |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/androidSecurityPatchLevel |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/azureADDeviceId |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/azureADRegistered |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/complianceGracePeriodExpirationDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/complianceState |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/configurationManagerClientEnabledFeatures |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/deviceActionResults |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/deviceCategoryDisplayName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/deviceEnrollmentType |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/deviceHealthAttestationState |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/deviceName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/deviceRegistrationState |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/easActivated |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/easActivationDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/easDeviceId |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/emailAddress |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/enrolledDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/enrollmentProfileName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/ethernetMacAddress |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/exchangeAccessState |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/exchangeAccessStateReason |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/exchangeLastSuccessfulSyncDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/freeStorageSpaceInBytes |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/iccid |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/imei |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/isEncrypted |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/isSupervised |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/jailBroken |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/lastSyncDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/managementAgent |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/managementCertificateExpirationDate |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/managementState |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/manufacturer |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/meid |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/model |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/operatingSystem |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/osVersion |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/partnerReportedThreatState |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/phoneNumber |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/physicalMemoryInBytes |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/remoteAssistanceSessionErrorDetails |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/remoteAssistanceSessionUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/requireUserEnrollmentApproval |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/serialNumber |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/subscriberCarrier |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/totalStorageSpaceInBytes |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/udid |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/userDisplayName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/userId |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/userPrincipalName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedDevice/wiFiMacAddress |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.managedMobileLobApp/size |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.messageSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.mobileApp/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.mobileApp/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
