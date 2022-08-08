import {
  AddCTAdminResp,
  AddDeviceResp,
  AddDriverResp,
  AddGeoFenceResp,
  AddPartResp,
  AddProjectResp,
  AddRenameResp,
  AddSupportTicketResp,
  CTAdminResp,
  EditRoleResonseType,
  GeoFencingResp,
  GetCompletedResp,
  GetDeviceReportResp,
  GetDriverStatisticsResp,
  GetEngineerServiceCallsResp,
  GetEventReportResp,
  GetFirstConnectResp,
  GetGeoFenceEventsResp,
  GetHighEventsResp,
  GetImportDevicesResp,
  GetLowEventsResp,
  GetOrganizationReportsResp,
  GetPanicButtonEventsResp,
  GetPartInfoResp,
  GetPendingDevicesResp,
  GetRequestedVideoResp,
  GetSaaSEventResp,
  GetSupportTicketResp,
  GetVehicleTripReportsResp,
  GetVehicleTripResp,
  GetVideoRequestReportsResp,
  IDeviceList,
  IDialCodeList,
  IDriverList,
  ICommonConfigurationList,
  AddCommonConfigurationType,
  IOrgList,
  IProjectList,
  IResourceRolesList,
  RenameChannelResp,
  RoleResponseType,
  SuccessType,
  IProjectMgmtList,
  GetDeviceStatusResp,
} from "../../../global.types";

import {
  alwaysOpenMenu,
  endLoading,
  startLoading,
} from "../reducers/general/general.actions";
import {
  AddDriverCode,
  DeleteDriverCode,
  DeleteDriverCodeSuccess,
  EditDriverCode,
  getDriver,
  getDriverForProj,
} from "../reducers/Management&Settings/driverManagement/driverManagement.actions";
import {
  AddManageRolesCode,
  DeleteManageRolesCode,
  DeleteManageRolesCodeSuccess,
  EditManageRolesCode,
  getManageRoles,
} from "../reducers/Management&Settings/manageRoles/manageRoles.actions";

import {
  deleteImportDevicesCode,
  deleteImportDevicesCodeSuccess,
  getCompleted,
  getDeviceReports,
  getDeviceStatus,
  getDriverStatistics,
  getEngineerServiceCalls,
  getEventReports,
  getFirstConnects,
  getGeoFenceEvents,
  getHighEvents,
  getImportDevices,
  getLowEvents,
  getOrganizationReports,
  getPanicButtonEvents,
  getPendingDevices,
  getRequestedVideo,
  getSaAsEvents,
  getVehicleTripReports,
  getVehicleTrips,
  getVideoRequestReports,
} from "../reducers/DataReducer/data.actions";
import {
  getDialCode,
  getOrgList,
  getProjectListForOrg,
  getResourceRoleList,
} from "../reducers/dropdowns/dropdown.actions";
import {
  AddDeviceCode,
  AddPartInfo,
  DeleteDeviceCode,
  DeleteDeviceCodeSuccess,
  EditDeviceCode,
  EditPartInfo,
  EditRenameChannel,
  getDevices,
  getPartInfo,
  getRenameChannel,
} from "../reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import {
  addGeoFencing,
  getGeoFencing,
} from "../reducers/Trips&GeoFence/geoFencing/geoFencing.actions";
import {
  AddUsersCode,
  DeleteUsersCode,
  DeleteUsersCodeSuccess,
  EditUsersCode,
  getUsers,
} from "../reducers/Management&Settings/usersManagement/usersManagement.actions";

import {
  AddSupportTicketCode,
  getSupportTicket,
} from "../reducers/Management&Settings/supportTicket/supportTicket.actions";

import {
  AddProjectMgmt,
  DeleteProjectCodeSuccess,
  DeleteProjectMgmt,
  EditProjectMgmt,
  getProject,
  getProjectMgmt,
} from "../reducers/Management&Settings/projectManagement/projectManagement.actions";
import {
  getCommonConfigurations,
  AddCommonConfigurationCode,
  EditCommonConfigurationCode,
  DeleteCommonConfigurationCode,
  DeleteCommonConfigurationCodeSuccess,
} from "../reducers/Management&Settings/commonConfiguration/commonConfiguration.actions";

export type AlwaysOpenMenu = ReturnType<typeof alwaysOpenMenu>;
export type StartLoading = ReturnType<typeof startLoading>;
export type EndLoading = ReturnType<typeof endLoading>;

export type GetManageRoles = ReturnType<typeof getManageRoles>;
export type GetManageRolesSuccess = SuccessType<
  GetManageRoles,
  RoleResponseType
>;

export type AddManageRolesCodeType = ReturnType<typeof AddManageRolesCode>;
export type AddManageRolesCodeSuccessType = SuccessType<
  AddManageRolesCodeType,
  EditRoleResonseType
>;
export type EditManageRolesCodeType = ReturnType<typeof EditManageRolesCode>;
export type EditManageRolesCodeSuccessType = SuccessType<
  EditManageRolesCodeType,
  EditRoleResonseType
>;
export type DeleteManageRolesCodeType = ReturnType<
  typeof DeleteManageRolesCode
>;
export type DeleteManageRolesCodeSuccessType = ReturnType<
  typeof DeleteManageRolesCodeSuccess
>;
export type GetDriver = ReturnType<typeof getDriver>;
export type GetDriverSuccess = SuccessType<GetDriver, IDriverList>;

export type AddDriver = ReturnType<typeof AddDriverCode>;
export type AddDriverSuccess = SuccessType<AddDriver, AddDriverResp>;

export type EditDriver = ReturnType<typeof EditDriverCode>;
export type EditDriverSuccess = SuccessType<EditDriver, AddDriverResp>;

export type DeleteDriver = ReturnType<typeof DeleteDriverCode>;
export type DeleteDriverSuccess = ReturnType<typeof DeleteDriverCodeSuccess>;

export type GetDriverForProj = ReturnType<typeof getDriverForProj>;
export type GetDriverForProjSuccess = SuccessType<
  GetDriverForProj,
  IDriverList
>;

export type GetDevice = ReturnType<typeof getDevices>;
export type GetDeviceSuccess = SuccessType<GetDevice, IDeviceList>;

export type AddDevice = ReturnType<typeof AddDeviceCode>;
export type AddDeviceSuccess = SuccessType<AddDevice, AddDeviceResp>;

export type EditDevice = ReturnType<typeof EditDeviceCode>;
export type EditDeviceSuccess = SuccessType<EditDevice, AddDeviceResp>;

export type DeleteDevice = ReturnType<typeof DeleteDeviceCode>;
export type DeleteDeviceSuccess = ReturnType<typeof DeleteDeviceCodeSuccess>;

export type GetPart = ReturnType<typeof getPartInfo>;
export type GetPartSuccess = SuccessType<GetPart, GetPartInfoResp>;

export type AddPart = ReturnType<typeof AddPartInfo>;
export type AddPartSuccess = SuccessType<AddPart, AddPartResp>;

export type EditPart = ReturnType<typeof EditPartInfo>;
export type EditPartSuccess = SuccessType<EditPart, AddPartResp>;

export type GetRenameChannel = ReturnType<typeof getRenameChannel>;
export type GetRenameChannelSuccess = SuccessType<
  GetRenameChannel,
  RenameChannelResp
>;

export type EditRename = ReturnType<typeof EditRenameChannel>;
export type EditRenameSuccess = SuccessType<EditRename, AddRenameResp>;

export type GetProjectListForOrg = ReturnType<typeof getProjectListForOrg>;
export type GetProjectListForOrgSuccessType = SuccessType<
  GetProjectListForOrg,
  IProjectList
>;

export type GetGeoFencing = ReturnType<typeof getGeoFencing>;
export type GetGeoFencingSuccess = SuccessType<GetGeoFencing, GeoFencingResp>;

export type AddGeoFencing = ReturnType<typeof addGeoFencing>;
export type AddGeoFencingSuccess = SuccessType<AddGeoFencing, AddGeoFenceResp>;

export type GetSupportTicket = ReturnType<typeof getSupportTicket>;
export type GetSupportTicketSuccess = SuccessType<
  GetSupportTicket,
  GetSupportTicketResp
>;

export type AddSupportTicket = ReturnType<typeof AddSupportTicketCode>;
export type AddSupportTicketSuccess = SuccessType<
  AddSupportTicket,
  AddSupportTicketResp
>;
export type GetSaAsEvents = ReturnType<typeof getSaAsEvents>;
export type GetSaAsEventsSuccess = SuccessType<GetSaAsEvents, GetSaaSEventResp>;

export type GetHighEvents = ReturnType<typeof getHighEvents>;
export type GetHighEventsSuccess = SuccessType<
  GetHighEvents,
  GetHighEventsResp
>;

export type GetDeviceStatus = ReturnType<typeof getDeviceStatus>;
export type GetDeviceStatusSuccess = SuccessType<GetDeviceStatus, GetDeviceStatusResp>;

export type GetLowEvents = ReturnType<typeof getLowEvents>;
export type GetLowEventsSuccess = SuccessType<GetLowEvents, GetLowEventsResp>;

export type GetRequestedVideo = ReturnType<typeof getRequestedVideo>;
export type GetRequestedVideoSuccess = SuccessType<
  GetRequestedVideo,
  GetRequestedVideoResp
>;

export type GetGeoFenceEvents = ReturnType<typeof getGeoFenceEvents>;
export type GetGeoFenceEventsSuccess = SuccessType<
  GetGeoFenceEvents,
  GetGeoFenceEventsResp
>;

export type GetPanicButtonEvents = ReturnType<typeof getPanicButtonEvents>;
export type GetPanicButtonEventsSuccess = SuccessType<
  GetPanicButtonEvents,
  GetPanicButtonEventsResp
>;

export type GetDriverStatistics = ReturnType<typeof getDriverStatistics>;
export type GetDriverStatisticsSuccess = SuccessType<
  GetDriverStatistics,
  GetDriverStatisticsResp
>;

export type GetVehicleTrips = ReturnType<typeof getVehicleTrips>;
export type GetVehicleTripsSuccess = SuccessType<
  GetVehicleTrips,
  GetVehicleTripResp
>;

export type GetVideoRequestReports = ReturnType<typeof getVideoRequestReports>;
export type GetVideoRequestReportsSuccess = SuccessType<
  GetVideoRequestReports,
  GetVideoRequestReportsResp
>;

export type GetVehicleTripReports = ReturnType<typeof getVehicleTripReports>;
export type GetVehicleTripReportsSuccess = SuccessType<
  GetVehicleTripReports,
  GetVehicleTripReportsResp
>;

export type GetOrganizationReports = ReturnType<typeof getOrganizationReports>;
export type GetOrganizationReportsSuccess = SuccessType<
  GetOrganizationReports,
  GetOrganizationReportsResp
>;

export type GetDeviceReport = ReturnType<typeof getDeviceReports>;
export type GetDeviceReportSuccess = SuccessType<
  GetDeviceReport,
  GetDeviceReportResp
>;

export type GetEventReport = ReturnType<typeof getEventReports>;
export type GetEventReportSuccess = SuccessType<
  GetEventReport,
  GetEventReportResp
>;

export type GetFirstConnects = ReturnType<typeof getFirstConnects>;
export type GetFirstConnectsSuccess = SuccessType<
  GetFirstConnects,
  GetFirstConnectResp
>;

export type GetImportDevices = ReturnType<typeof getImportDevices>;
export type GetImportDevicesSuccess = SuccessType<
  GetImportDevices,
  GetImportDevicesResp
>;

export type DeleteImportDevicesCode = ReturnType<
  typeof deleteImportDevicesCode
>;
export type DeleteImportDevicesCodeSuccess = ReturnType<
  typeof deleteImportDevicesCodeSuccess
>;

export type GetEngineerServiceCalls = ReturnType<
  typeof getEngineerServiceCalls
>;
export type GetEngineerServiceCallsSuccess = SuccessType<
  GetEngineerServiceCalls,
  GetEngineerServiceCallsResp
>;

export type GetPendingDevices = ReturnType<typeof getPendingDevices>;
export type GetPendingDevicesSuccess = SuccessType<
  GetPendingDevices,
  GetPendingDevicesResp
>;

export type GetCompleted = ReturnType<typeof getCompleted>;
export type GetCompletedSuccess = SuccessType<GetCompleted, GetCompletedResp>;

export type GetDialCode = ReturnType<typeof getDialCode>;
export type GetDialCodeSuccess = SuccessType<GetDialCode, IDialCodeList>;

export type GetOrganization = ReturnType<typeof getOrgList>;
export type GetOrganizationSuccess = SuccessType<GetOrganization, IOrgList>;

export type GetResourceRoleList = ReturnType<typeof getResourceRoleList>;
export type GetResourceRoleListSuccess = SuccessType<
  GetResourceRoleList,
  IResourceRolesList
>;

// CT ADMIN
export type GetUsers = ReturnType<typeof getUsers>;
export type GetUsersSuccess = SuccessType<GetUsers, CTAdminResp>;
export type AddUser = ReturnType<typeof AddUsersCode>;
export type AddUserSuccess = SuccessType<AddUser, AddCTAdminResp>;
export type EditUser = ReturnType<typeof EditUsersCode>;
export type EditUserSuccess = SuccessType<EditUser, AddCTAdminResp>;
export type DeleteUser = ReturnType<typeof DeleteUsersCode>;
export type DeleteUserSuccess = ReturnType<typeof DeleteUsersCodeSuccess>;

export type GetProjects = ReturnType<typeof getProject>;
export type GetProjectsSuccess = SuccessType<GetProjects, IProjectList>;

export type GetProjectMgmt = ReturnType<typeof getProjectMgmt>;
export type GetProjectMgmtSuccess = SuccessType<
  GetProjectMgmt,
  IProjectMgmtList
>;

export type AddProjectMgmtType = ReturnType<typeof AddProjectMgmt>;
export type AddProjectMgmtTypeSuccess = SuccessType<
  AddProjectMgmtType,
  AddProjectResp
>;

export type EditProjectMgmtType = ReturnType<typeof EditProjectMgmt>;
export type EditProjectMgmtTypeSuccess = SuccessType<
  EditProjectMgmtType,
  AddProjectResp
>;

export type DeleteProjectMgmtType = ReturnType<typeof DeleteProjectMgmt>;
export type DeleteProjectMgmtTypeSuccess = ReturnType<
  typeof DeleteProjectCodeSuccess
>;

export type GetCommonConfigurations = ReturnType<
  typeof getCommonConfigurations
>;
export type GetCommonConfigurationssSuccess = SuccessType<
  GetCommonConfigurations,
  ICommonConfigurationList
>;

export type AddCommonConfigurations = ReturnType<
  typeof AddCommonConfigurationCode
>;
export type AddCommonConfigurationsSuccess = SuccessType<
  AddCommonConfigurations,
  AddCommonConfigurationType
>;

export type EditCommonConfigurations = ReturnType<
  typeof EditCommonConfigurationCode
>;
export type EditCommonConfigurationsSuccess = SuccessType<
  EditCommonConfigurations,
  AddCommonConfigurationType
>;

export type DeleteCommonConfigurations = ReturnType<
  typeof DeleteCommonConfigurationCode
>;
export type DeleteCommonConfigurationsSuccess = ReturnType<
  typeof DeleteCommonConfigurationCodeSuccess
>;

export type AppActions =
  | GetCommonConfigurations
  | GetCommonConfigurationssSuccess
  | AddCommonConfigurations
  | AddCommonConfigurationsSuccess
  | EditCommonConfigurations
  | EditCommonConfigurationsSuccess
  | DeleteCommonConfigurations
  | DeleteCommonConfigurationsSuccess
  | AlwaysOpenMenu
  | StartLoading
  | EndLoading
  | GetManageRoles
  | GetManageRolesSuccess
  | AddManageRolesCodeType
  | AddManageRolesCodeSuccessType
  | EditManageRolesCodeType
  | EditManageRolesCodeSuccessType
  | DeleteManageRolesCodeType
  | DeleteManageRolesCodeSuccessType
  | GetDriver
  | GetDriverSuccess
  | AddDriver
  | AddDriverSuccess
  | EditDriver
  | EditDriverSuccess
  | DeleteDriver
  | DeleteDriverSuccess
  | GetDriverForProj
  | GetDriverForProjSuccess
  | GetDevice
  | GetDeviceSuccess
  | AddDevice
  | AddDeviceSuccess
  | EditDevice
  | EditDeviceSuccess
  | DeleteDevice
  | DeleteDeviceSuccess
  | AddPart
  | AddPartSuccess
  | GetPart
  | GetPartSuccess
  | EditPart
  | EditPartSuccess
  | GetRenameChannel
  | GetRenameChannelSuccess
  | EditRename
  | EditRenameSuccess
  | GetProjectListForOrg
  | GetProjectListForOrgSuccessType
  | GetDriverForProj
  | GetDriverForProjSuccess
  | GetGeoFencing
  | GetGeoFencingSuccess
  | AddGeoFencing
  | AddGeoFencingSuccess
  | GetSupportTicket
  | GetSupportTicketSuccess
  | AddSupportTicket
  | AddSupportTicketSuccess
  | GetSaAsEvents
  | GetSaAsEventsSuccess
  | GetHighEvents
  | GetHighEventsSuccess
  | GetDeviceStatus
  | GetDeviceStatusSuccess
  | GetLowEvents
  | GetLowEventsSuccess
  | GetRequestedVideo
  | GetRequestedVideoSuccess
  | GetGeoFenceEvents
  | GetGeoFenceEventsSuccess
  | GetPanicButtonEvents
  | GetPanicButtonEventsSuccess
  | GetDriverStatistics
  | GetDriverStatisticsSuccess
  | GetVehicleTrips
  | GetVehicleTripsSuccess
  | GetVideoRequestReports
  | GetVideoRequestReportsSuccess
  | GetVehicleTripReports
  | GetVehicleTripReportsSuccess
  | GetOrganizationReports
  | GetOrganizationReportsSuccess
  | GetDeviceReport
  | GetDeviceReportSuccess
  | GetEventReport
  | GetEventReportSuccess
  | GetFirstConnects
  | GetFirstConnectsSuccess
  | GetImportDevices
  | GetImportDevicesSuccess
  | DeleteImportDevicesCode
  | DeleteImportDevicesCodeSuccess
  | GetEngineerServiceCalls
  | GetEngineerServiceCallsSuccess
  | GetPendingDevices
  | GetPendingDevicesSuccess
  | GetCompleted
  | GetCompletedSuccess
  | GetDialCode
  | GetDialCodeSuccess
  | GetOrganization
  | GetOrganizationSuccess
  | GetResourceRoleList
  | GetResourceRoleListSuccess
  | GetUsers
  | GetUsersSuccess
  | AddUser
  | AddUserSuccess
  | EditUser
  | EditUserSuccess
  | DeleteUser
  | DeleteUserSuccess
  | GetProjects
  | GetProjectsSuccess
  | GetProjectMgmt
  | GetProjectMgmtSuccess
  | AddProjectMgmtType
  | AddProjectMgmtTypeSuccess
  | EditProjectMgmtType
  | EditProjectMgmtTypeSuccess
  | DeleteProjectMgmtType
  | DeleteProjectMgmtTypeSuccess;
