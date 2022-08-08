import { combineReducers } from "redux";
import { dataReducer } from "./DataReducer/data.reducer";
import { deviceStatusReducer } from "./deviceStatus/deviceStatus.reducer";
import { dropdownReducer } from "./dropdowns/dropdown.reducer";
import { generalReducer } from "./general/general.reducer";
import { commonConfigurationsReducer } from "./Management&Settings/commonConfiguration/commonConfiguration.reducer";
import { devicesReducer } from "./Management&Settings/deviceManagement/deviceManagement.reducer";
import { driverReducer } from "./Management&Settings/driverManagement/driverManagement.reducer";
import { manageRolesReducer } from "./Management&Settings/manageRoles/manageRoles.reducer";
import { projectReducer } from "./Management&Settings/projectManagement/projectManagement.reducer";
import { supportTicketReducer } from "./Management&Settings/supportTicket/supportTicket.reducer";
import { usersReducer } from "./Management&Settings/usersManagement/usersManagement.reducer";
import { geoFencingReducer } from "./Trips&GeoFence/geoFencing/geoFencing.reducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  userSlice: userReducer,
  generalSlice: generalReducer,
  driverData: driverReducer,
  manageRolesData: manageRolesReducer,
  devicesData: devicesReducer,
  supportTicketsData: supportTicketReducer,
  projectData: projectReducer,
  userData: usersReducer,
  dropdownList: dropdownReducer,
  dataStore: dataReducer,
  // saAsEventsData: saAsEventReducer,
  // highEventsData: highEventReducer,
  // lowEventsData: lowEventReducer,
  // requestedVideosData: requestedVideoReducer,
  // geoFenceEventsData: geoFenceEventsReducer,
  // panicButtonEventsData: panicButtonEventReducer,
  // driverStatisticsData: driverStatisticsReducer,
  // vehicleTripsData: vehicleTripsReducer,
  geoFencingData: geoFencingReducer,
  // videoRequestReportsData: videoRequestReportReducer,
  // vehicleTripReportsData: vehicleTripReportReducer,
  // organizationReportsData: organizationReportReducer,
  // deviceReportsData: deviceReportReducer,
  // eventReportsData: eventReportReducer,
  deviceStatusData: deviceStatusReducer,
  commonConfigurationsData: commonConfigurationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
