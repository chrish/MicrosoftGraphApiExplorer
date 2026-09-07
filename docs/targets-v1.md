# Microsoft Graph v1.0 Annotation Targets

Generated from https://graph.microsoft.com/v1.0/$metadata

Generated at: 2026-09-07T04:21:47.534Z
Total annotation targets: 305

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
    - AndroidManagedAppRegistration
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
      - anonymousJoinWebUrl
      - customerNotes
      - duration
      - filledAttendeesCount
      - joinWebUrl
      - reminders
      - serviceId
      - serviceName
      - serviceNotes
    - BookingBusiness
      - displayName
      - isPublished
      - publicUrl
      - webSiteUrl
    - BookingCurrency
      - symbol
    - BookingCustomer
      - displayName
    - BookingCustomQuestion
      - displayName
    - BookingPageSettings
      - privacyPolicyWebUrl
      - termsAndConditionsWebUrl
    - BookingService
      - defaultReminders
      - displayName
      - webUrl
    - BookingStaffMember
      - displayName
    - CallRecords
      - CallRecord
        - organizer
        - organizer_v2
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
    - Community
      - groupId
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
    - EngagementAsyncOperation
      - operationType
      - resourceId
    - EngagementConversation
      - creationMode
      - starterId
    - EngagementConversationMessage
      - createdDateTime
      - creationMode
      - lastModifiedDateTime
      - replyToId
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
    - HostSecurityState
    - IdentifierUriRestriction
      - isStateSetByMicrosoft
    - IdentityProvider
    - InvestigationSecurityState
    - IosManagedAppRegistration
    - LogonType
    - MailboxProtectionUnit
      - displayName
      - email
    - MailboxRestoreArtifact
      - restoredFolderName
    - MalwareState
    - ManagedApp
      - appAvailability
    - ManagedAppRegistration
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
      - windowsProtectionState
    - ManagedMobileLobApp
      - contentVersions
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
      - contentVersions
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
    - RestorePointSearchResult
      - restorePoint
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
      - DetonationBehaviourDetails
      - SensorSettings
        - networkAdapters
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
    - WindowsSetting
      - instances
    - WindowsUniversalAppX
      - committedContainedApps
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
| microsoft.graph.androidManagedAppRegistration |  | The ManagedAppRegistration resource represents the details of an app, with management capability, used by a member of the organization. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.androidStoreApp/packageId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.applePushNotificationCertificate/certificateSerialNumber |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.application/createdByAppId |  |  | Org.OData.Core.V1.Immutable |
| microsoft.graph.availableProviderTypes(Collection(microsoft.graph.identityProvider)) |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.b2xIdentityUserFlow/identityProviders |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.backupRestoreRoot/protectionUnits |  |  | Org.OData.Core.V1.ExplicitOperationBindings |
| microsoft.graph.bookingAppointment/anonymousJoinWebUrl |  |  | Org.OData.Core.V1.IsURL |
| microsoft.graph.bookingAppointment/customerNotes |  | The value of this property is only available when reading an individual booking appointment by id. Its value can only be set when creating a new appointment with a new customer, ie, without specifying a CustomerId. After that, the property is computed from the customer represented by CustomerId. | Org.OData.Core.V1.Immutable, Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingAppointment/duration |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.bookingAppointment/filledAttendeesCount |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.bookingAppointment/joinWebUrl |  |  | Org.OData.Core.V1.IsURL |
| microsoft.graph.bookingAppointment/reminders |  | The value of this property is only available when reading an individual booking appointment by id. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingAppointment/serviceId |  |  | Org.OData.Core.V1.Immutable |
| microsoft.graph.bookingAppointment/serviceName |  | This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the service id. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingAppointment/serviceNotes |  | The value of this property is only available when reading an individual booking appointment by id. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingBusiness |  | The bookingBusiness is the top level object which contains business information and related business objects such as appointments, customers, services and staff members. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingBusiness/displayName |  | The display name is suitable for human-readable interfaces. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingBusiness/isPublished |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.bookingBusiness/publicUrl |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.IsURL |
| microsoft.graph.bookingBusiness/webSiteUrl |  | Example: https://www.contoso.com | Org.OData.Core.V1.IsURL, Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingCurrency/symbol |  |  | Org.OData.Core.V1.IsLanguageDependent |
| microsoft.graph.bookingCustomer/displayName |  | The display name is suitable for human-readable interfaces. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingCustomQuestion/displayName |  | The display name is suitable for human-readable interfaces. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingPageSettings/privacyPolicyWebUrl |  | Example: https://www.contoso.com | Org.OData.Core.V1.IsURL, Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingPageSettings/termsAndConditionsWebUrl |  | Example: https://www.contoso.com | Org.OData.Core.V1.IsURL, Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingService/defaultReminders |  | The value of this property is only available when reading an individual booking service by id. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingService/displayName |  | The display name is suitable for human-readable interfaces. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.bookingService/webUrl |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.IsURL |
| microsoft.graph.bookingStaffMember/displayName |  | The display name is suitable for human-readable interfaces. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.callRecords.callRecord/organizer |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.callRecords.callRecord/organizer_v2 |  |  | Org.OData.Core.V1.AutoExpand |
| microsoft.graph.callRecords.callRecord/participants |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.callRecords.participantEndpoint/identity |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.certification/certificationDetailsUrl |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.certification/isCertifiedByMicrosoft |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.changeTrackedEntity/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.changeTrackedEntity/lastModifiedBy |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.changeTrackedEntity/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.cloudAppSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.community/groupId |  |  | Org.OData.Core.V1.Permissions |
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
| microsoft.graph.engagementAsyncOperation/operationType |  |  | Org.OData.Core.V1.Permissions |
| microsoft.graph.engagementAsyncOperation/resourceId |  |  | Org.OData.Core.V1.Permissions |
| microsoft.graph.engagementConversation/creationMode |  |  | Org.OData.Core.V1.Permissions |
| microsoft.graph.engagementConversation/starterId |  |  | Org.OData.Core.V1.Permissions |
| microsoft.graph.engagementConversationMessage/createdDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementConversationMessage/creationMode |  |  | Org.OData.Core.V1.Permissions |
| microsoft.graph.engagementConversationMessage/lastModifiedDateTime |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.engagementConversationMessage/replyToId |  |  | Org.OData.Core.V1.Permissions |
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
| microsoft.graph.hostSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.identifierUriRestriction/isStateSetByMicrosoft |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.identityProvider |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.investigationSecurityState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.iosManagedAppRegistration |  | The ManagedAppRegistration resource represents the details of an app, with management capability, used by a member of the organization. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.logonType |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.mailboxProtectionUnit/displayName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.mailboxProtectionUnit/email |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.mailboxRestoreArtifact/restoredFolderName |  |  | Org.OData.Core.V1.Computed |
| microsoft.graph.malwareState |  |  | Org.OData.Core.V1.Revisions |
| microsoft.graph.managedApp/appAvailability |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedAppRegistration |  | The ManagedAppRegistration resource represents the details of an app, with management capability, used by a member of the organization. | Org.OData.Core.V1.LongDescription |
| microsoft.graph.managedDevice/activationLockBypassCode |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/androidSecurityPatchLevel |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/azureADDeviceId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/azureADRegistered |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/complianceGracePeriodExpirationDateTime |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/complianceState |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/configurationManagerClientEnabledFeatures |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/deviceActionResults |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/deviceCategoryDisplayName |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/deviceEnrollmentType |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/deviceHealthAttestationState |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/deviceName |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/deviceRegistrationState |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/easActivated |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/easActivationDateTime |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/easDeviceId |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/emailAddress |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/enrolledDateTime |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/enrollmentProfileName |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/ethernetMacAddress |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/exchangeAccessState |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/exchangeAccessStateReason |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/exchangeLastSuccessfulSyncDateTime |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/freeStorageSpaceInBytes |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/iccid |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/imei |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/isEncrypted |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/isSupervised |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/jailBroken |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/lastSyncDateTime |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/managementAgent |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
| microsoft.graph.managedDevice/managementCertificateExpirationDate |  |  | Org.OData.Core.V1.Computed, Org.OData.Core.V1.Permissions |
