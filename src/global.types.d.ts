export type CommonAPIResponse = {
  message: string;
  // result: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
  status: number;
  timestamp: string;
};

export type RoleResponseType = CommonAPIResponse & {
  result: Role[];
};

export type Permission = {
  permission: string;
  permissionId: number;
  read: boolean;
  write: boolean;
};

export type Role = {
  createdDate: string;
  description: string;
  id: number;
  liveStreaming: boolean;
  name: string;
  rolePermission: Permission[];
  status: boolean;
  engineer?: boolean;
  updatedDate: string;
};
export type AddManageRolesCodeData = PickRename<
  Omit<Role, "createdDate" | "updatedDate" | "id">,
  "rolePermission",
  "permissions"
>;
export type EditRoleResonseType = CommonAPIResponse & {
  result: Role;
};
export type EditManageRolesCodeData = PickRename<
  Omit<Role, "createdDate" | "updatedDate">,
  "rolePermission",
  "permissions"
>;

export type ResourceRole = {
  id: number;
  name: string;
};

export type IResourceRolesList = CommonAPIResponse & {
  result: ResourceRole[];
};

export type AddDriver = {
  countryName: string;
  defaultDriver?: boolean;
  email: string;
  emergencyContact: string;
  emergencyContactCode: string;
  mobileNo: string;
  mobileNoCode: string;
  name: string;
  organizationId: number;
  projectId: number;
  status: boolean;
};

export type Driver = {
  countryName: string;
  createdBy: number;
  createdOn: number;
  email: string;
  emergencyContact: string;
  emergencyContactCode: string;
  id: number;
  mobileNo: string;
  mobileNoCode: string;
  name: string;
  organizationId: number;
  organizationManagement: {
    id: number;
    name: string;
  };
  organizationName: string;
  project: {
    id: number;
    name: string;
  };
  projectId: number;
  projectName: string;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};

export type IDriverList = CommonAPIResponse & {
  result: Driver[];
};

export type Device = {
  camera1Name: string;
  camera2Name: string;
  camera3Name: string;
  camera4Name: string;
  camera5Name: string;
  createdBy: number;
  createdDate: string;
  createdOn: number;
  description1: string;
  description2: string;
  deviceId: number;
  driverManagement: {
    id: number;
    name: string;
  };
  driverManagementId: number;
  fleetNumber: string;
  homeDepot: string;
  id: number;
  insurerName: string;
  organizationManagement: {
    id: number;
    name: string;
  };
  policyNumber: string;
  project: {
    id: number;
    name: string;
  };
  projectId: number;
  status: boolean;
  updatedBy: number;
  updatedDate: string;
  updatedOn: number;
  vehicleRegestrationNo: string;
};

export type AddDeviceType = {
  camera1Name: string;
  camera2Name: string;
  camera3Name: string;
  camera4Name: string;
  camera5Name: string;
  description1: string;
  description2: string;
  deviceId: number;
  driverManagementId: number;
  fleetNumber: string;
  homeDepot: string;
  insurerName: string;
  organizationManagementId: number;
  policyNumber: string;
  projectId: number;
  status: boolean;
  vehicleRegestrationNo: string;
  id?: number;
};

export type IDeviceList = CommonAPIResponse & {
  result: Device[];
};

export type IPartInfoList = CommonAPIResponse & {
  result: PartInfo[];
};
export type AddRenameResp = CommonAPIResponse & {
  result: CameraInfo;
};

export type PartInfo = {
  deviceId: number;
  partInfoLabel: string;
  partInfoValue: string;
};
export type GetPartInfoResp = CommonAPIResponse & {
  result: PartInfoItem[];
};
export type AddPartInfoType = {
  deviceId: number;
  partInfoLabel: string;
  partInfoValue: string;
};
export type PartInfoItem = {
  id: number;
  partInfoLabel: string;
  partInfoValue: string;
  deviceId: number;
  createdOn: number;
  updatedOn: number;
  createdBy: number;
  updatedBy: number;
};
export type AddPartResp = CommonAPIResponse & {
  result: PartInfoItem;
};
export type RenameChannelResp = CommonAPIResponse & {
  result: CameraInfo;
};

export type SuccessType<MainType, dataType> = Omit<
  MainType,
  "data" | "type"
> & {
  type: `${MainType["type"]}_SUCCESS`;
  payload: dataType;
};
export type CameraInfo = {
  id: number;
  camera1Name: string;
  camera2Name: string;
  camera3Name: string;
  camera4Name: string;
  camera5Name: string;
};

export type User = {
  id: number;
  userName: string;
  password: string;
  email: string;
  mobile: string;
  mobileCode: string;
  engineer: boolean;
  roleId: number;
  allowAlertEmail: boolean;
  allowMaintenanceEmail: boolean;
  allowWelcomeEmail: boolean;
  organizationsId: string;
  status: boolean;
  createdOn: number;
  updatedOn: number;
  createdBy: number;
  updatedBy: number;
  role: {
    id: number;
    name: string;
  };
};

export type AddUser = {
  allowAlertEmail: boolean;
  allowMaintenanceEmail: boolean;
  allowWelcomeEmail: boolean;
  email: string;
  engineer: boolean;
  mobile: string;
  mobileCode: string;
  organizationsIds: number[];
  password: string;
  roleId: number;
  status: boolean;
  userName: string;
  id?: number;
};

export type UserResp = CommonAPIResponse & {
  result: User[];
};

export type AddUserResp = CommonAPIResponse & {
  result: User;
};

export type supportTicket = {
  id: number;
  date: string;
  organizationId: {
    id: number;
    name: string;
  };
  contact: number;
  message: string;
  status: boolean;
  messageStatus: boolean;
};
export type ISupportTicketList = CommonAPIResponse & {
  result: supportTicket[];
};

export type AddSupportTicket = {
  id?: number;
  date: string;
  organizationId: {
    id: string;
    name: string;
  };
  contact: string;
  message: string;
  status: boolean;
  messageStatus: boolean;
};
export type AddSupportTicketType = CommonAPIResponse & {
  result: supportTicket;
};

export type IProjectList = CommonAPIResponse & {
  result: ProjectType[];
};

export type ProjectType = {
  createdDate: string;
  id: number;
  name: string;
  organizationId: number;
  organizationName: string;
  updatedDate: string;
};

export type IProjectMgmtList = CommonAPIResponse & {
  result: ProjectMgMtType[];
};

export type AddProject = {
  alternativeEmail: string;
  city: string;
  contactPersonMobile: string;
  contactPersonMobileCode: string;
  contactPersonName: string;
  country: string;
  email: string;
  faxNumber?: string;
  organizationId: number;
  organizationName: string;
  logo: boolean;
  name: string;
  officeNumber: string;
  organizationAddress: string;
  password?: string;
  postalCode: string;
  renewalDate?: string;
  service: string;
  state: string;
  userName?: string;
  website?: string;
};

export type ProjectMgMtType = {
  alternativeEmail: string;
  city: string;
  contactPersonMobile: string;
  contactPersonMobileCode: string;
  contactPersonName: string;
  country: string;
  createdBy?: number;
  createdOn?: number;
  email: string;
  faxNumber: string;
  id: number;
  logo: boolean;
  name: string;
  officeNumber: string;
  organizationId: number;
  organizationName: string;
  organizationAddress: string;
  password?: string;
  postalCode: string;
  renewalDate?: string;
  service: string;
  state: string;
  updatedBy?: number;
  updatedOn?: number;
  userName?: string;
  website: string;
};

export type CommonConfiguration = {
  id: number;
  createOn: string;
  status: boolean;
  organization: {
    id: number;
    name: string;
  };
  organizationTo: {
    id: number;
    name: string;
  };
  organizationFrom: {
    id: number;
    name: string;
  };
};
export type ICommonConfigurationList = CommonAPIResponse & {
  result: CommonConfiguration[];
};
export type AddCommonConfiguration = {
  id?: number;
  createOn: string;
  status: boolean;
  organization: {
    id: number;
    name: string;
  };
  organizationTo: {
    id: number;
    name: string;
  };
  organizationFrom: {
    id: number;
    name: string;
  };
};

export type AddCommonConfigurationType = CommonAPIResponse & {
  result: CommonConfiguration;
};

export type PickRename<T, K extends keyof T, R extends PropertyKey> = Omit<
  T,
  K
> & {
  [P in R]: T[K];
};

export type AddDriverResp = CommonAPIResponse & {
  result: Driver;
};

export type AddProjectResp = CommonAPIResponse & {
  result: ProjectMgMtType;
};

export type IDialCodeList = CommonAPIResponse & {
  result: string[];
};

export type AddDeviceResp = CommonAPIResponse & {
  result: Device;
};

export type CTAdminUser = {
  id: number;
  userName: string;
  password: string;
  email: string;
  mobile: string;
  mobileCode: string;
  engineer: boolean;
  roleId: number;
  allowAlertEmail: boolean;
  allowMaintenanceEmail: boolean;
  allowWelcomeEmail: boolean;
  organizationsId: string;
  status: boolean;
  createdOn: number;
  updatedOn: number;
  createdBy: number;
  updatedBy: number;
  role: {
    id: number;
    name: string;
  };
};

export type AddUserType = {
  allowAlertEmail: boolean;
  allowMaintenanceEmail: boolean;
  allowWelcomeEmail: boolean;
  email: string;
  engineer: boolean;
  mobile: string;
  mobileCode: string;
  organizationsIds: number[];
  password: string;
  roleId: number;
  status: boolean;
  userName: string;
  id?: number;
};

export type CTAdminResp = CommonAPIResponse & {
  result: CTAdminUser[];
};

export type AddCTAdminResp = CommonAPIResponse & {
  result: CTAdminUser;
};

export type GeoFencing = {
  deviceId: number;
  endTime: null;
  fenceNo: string;
  id: number;
  orgId: number;
  projectId: number;
  radius: string;
  startTime: number;
  vehicleRegNo: number;
};

export type GeoFencingResp = CommonAPIResponse & {
  result: GeoFencing[];
};

export type AddGeoFence = Omit<GeoFencing, "id">;
export type AddGeoFenceResp = CommonAPIResponse & {
  result: GeoFencing;
};
export type AddGeoFencingType = Omit<GeoFencingType, "id">;
export type GeoFencingType = {
  deviceId: number;
  endTime: null;
  fenceNo: string;
  id: number;
  organization: {
    id: number;
    name: string;
  };
  project: {
    id: number;
    name: string;
  };
  radius: string;
  startTime: number;
  vehicleReg: {
    vehicleRegestrationNo: string;
    deviceId: number;
  };
};
export type SupportTicket = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetSupportTicketResp = CommonAPIResponse & {
  result: SupportTicket[];
};

export type AddSupportTicketResp = CommonAPIResponse & {
  result: SupportTicket;
};

export type SaaSEvent = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetSaaSEventResp = CommonAPIResponse & {
  result: SaaSEvent[];
};

export type GetHighEvent = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetHighEventsResp = CommonAPIResponse & {
  result: GetHighEvent[];
};

export type GetLowEvent = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetLowEventsResp = CommonAPIResponse & {
  result: GetLowEvent[];
};

export type RequestedVideo = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetRequestedVideoResp = CommonAPIResponse & {
  result: RequestedVideo[];
};

export type GeoFenceEvent = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetGeoFenceEventsResp = CommonAPIResponse & {
  result: GeoFenceEvent[];
};

export type PanicButtonEvent = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetPanicButtonEventsResp = CommonAPIResponse & {
  result: PanicButtonEvent[];
};
export type GetDeviceStatus = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetDeviceStatusResp = CommonAPIResponse & {
  result: GetDeviceStatus[];
};
export type DriverStatistics = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetDriverStatisticsResp = CommonAPIResponse & {
  result: DriverStatistics[];
};

export type VehicleTrip = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetVehicleTripResp = CommonAPIResponse & {
  result: VehicleTrip[];
};

export type VideoRequestReport = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetVideoRequestReportsResp = CommonAPIResponse & {
  result: VideoRequestReport[];
};

export type VehicleTripReport = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetVehicleTripReportsResp = CommonAPIResponse & {
  result: VehicleTripReport[];
};

export type OrganizationReport = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetOrganizationReportsResp = CommonAPIResponse & {
  result: OrganizationReport[];
};

export type DeviceReport = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetDeviceReportResp = CommonAPIResponse & {
  result: DeviceReport[];
};

export type OrganizationType = {
  alternativeEmail: string;
  city: string;
  contactPersonMobile: string;
  contactPersonMobileCode: string;
  contactPersonName: string;
  country: string;
  createdBy?: number;
  createdOn?: number;
  email: string;
  faxNumber: string;
  id: number;
  logo: boolean;
  name: string;
  officeNumber: string;
  organizationAddress: string;
  password: string;
  postalCode: string;
  renewalDate: string;
  service: string;
  state: string;
  updatedBy?: number;
  updatedOn?: number;
  userName: string;
  website: string;
};

export type IOrgList = CommonAPIResponse & {
  result: OrganizationType[];
};

export type EventReport = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetEventReportResp = CommonAPIResponse & {
  result: EventReport[];
};

export type FirstConnect = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetFirstConnectResp = CommonAPIResponse & {
  result: FirstConnect[];
};

export type ImportDevice = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetImportDevicesResp = CommonAPIResponse & {
  result: ImportDevice[];
};

export type EngServiceCall = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetEngineerServiceCallsResp = CommonAPIResponse & {
  result: EngServiceCall[];
};

export type PendingDevice = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetPendingDevicesResp = CommonAPIResponse & {
  result: PendingDevice[];
};

export type Completed = {
  createdBy: number;
  createdOn: number;
  id: number;
  message: "string";
  messageStatus: boolean;
  orginazationId: number;
  status: boolean;
  updatedBy: number;
  updatedOn: number;
};
export type GetCompletedResp = CommonAPIResponse & {
  result: Completed[];
};
