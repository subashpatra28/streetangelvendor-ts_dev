import DevicesOtherOutlinedIcon from "@material-ui/icons/DevicesOtherOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Select from "react-select";
import { Col, Row } from "reactstrap";
import {
  alwaysOpenMenu,
  endLoading,
  startLoading,
} from "../../redux/reducers/general/general.actions";
import { ROUTES } from "../../routes/routes";
import DeviceStatus from "../Navbar/deviceStatus";
import Notifications from "../Navbar/notifications";
import RequestVideo from "../Navbar/requestVideo";
import SearchModal from "../Navbar/searchModal";
import User from "../Navbar/user";
import UserConfiguration from "../Navbar/user/userConfiguration";
import Dashboard from "../Sidebar/Dashboard";
import TripsDetail from "../Sidebar/Dashboard/trips/tabComponents";
import DriverStatistics from "../Sidebar/DriverStatistics";
import DriverScoreCard from "../Sidebar/DriverStatistics/tab/Components/DriverScoreCard";
import ALERTEvents from "../Sidebar/Events&Videos/Geo-FenceEvents";
import HighEvents from "../Sidebar/Events&Videos/HighEvents";
import LowEvents from "../Sidebar/Events&Videos/LowEvents";
import PanicEvents from "../Sidebar/Events&Videos/PanicButtonEvents";
import RequestedVideo from "../Sidebar/Events&Videos/RequestedVideo";
import ActiveSafety from "../Sidebar/Events&Videos/SA-ASEvents";
import DeviceManagement from "../Sidebar/Management&Settings/DeviceManagement";
import DriverManagement from "../Sidebar/Management&Settings/DriverManagement";
import ManageRoles from "../Sidebar/Management&Settings/ManageRoles";
import ProjectManagement from "../Sidebar/Management&Settings/ProjectManagement";
import CommonConfig from "../Sidebar/Management&Settings/ProjectManagement/Setting/commonConfig";
import CommonConfiguration from "../Sidebar/Management&Settings/ProjectManagement/Setting/commonConfig/manageTemplate";
import AddConfiguration from "../Sidebar/Management&Settings/ProjectManagement/Setting/commonConfig/manageTemplate/addConfiguration";
import EditConfiguration from "../Sidebar/Management&Settings/ProjectManagement/Setting/commonConfig/manageTemplate/editConfiguration";
import SupportTicket from "../Sidebar/Management&Settings/SupportTicket";
import UsersManagement from "../Sidebar/Management&Settings/UsersManagement";
import Map from "../Sidebar/MapComponents";
import DeviceReport from "../Sidebar/Report/DeviceReport";
import EventReport from "../Sidebar/Report/EventReport";
import OrganizationReport from "../Sidebar/Report/OrganizationReport";
import VehicleTripReport from "../Sidebar/Report/VehicleTripReport";
import VideoRequestReport from "../Sidebar/Report/VideoRequestReport";
import GeoFencing from "../Sidebar/Trips&Geo-fence/Geo Fencing";
import VehicleTrip from "../Sidebar/Trips&Geo-fence/Vehicle Trip";
import LocationTab from "../Unspecified/LocationReport";
import Sidebar from "./Sidebar";
//@ts-expect-error
import Fade from "react-reveal/Fade";
import { getProject } from "../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../redux/reducers/rootReducer";
import { AppDispatch } from "../../redux/store/store";
import Archive from "../Sidebar/Archive/Archive";
import HighEventsVideo from "../Sidebar/Events&Videos/SA-ASEvents/tab/Components/HighEventsVideo";
import OpenStreetMap from "../Unspecified/OpenStreetMap";
import VendorDashBoard from "../Unspecified/VendorDashBoard";
import VendorDashboardFinal from "../Unspecified/VendorDashboardFinal";
import {
  getDialCode,
  getOrgList,
} from "../../redux/reducers/dropdowns/dropdown.actions";
import { getDevices } from "../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Side(props: Props) {
  const [alwaysOpen, setAlwaysOpen] = useState(true);
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    !alwaysOpen && props.openMenu(true);
    !alwaysOpen && setHover(true);
  };
  const handleMouseLeave = () => {
    !alwaysOpen && props.openMenu(false);
    !alwaysOpen && setHover(false);
  };

  useEffect(() => {
    const apiCalls = async () => {
      props.startLoading();
      await Promise.all([
        props.getOrgList(),
        props.getDialCodeList(),
        props.getDeviceList(),
        props.getProjectList(),
      ]);
      props.endLoading();
    };
    apiCalls();
    return () => {};
  }, []);

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop: $TSFixMe) => (event: $TSFixMe) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Router>
      <div className="App1">
        <div
          className={"Sidebar " + (alwaysOpen ? "toggle" : "hide")}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <Scrollbars autoHide>
            <Sidebar
              handleDrawerOpen={alwaysOpen}
              hover={hover}
              alwaysOpen={alwaysOpen}
            />
          </Scrollbars>
        </div>
        <div className={"Content " + (alwaysOpen || hover ? "shrink" : "")}>
          <div className="header">
            <div className="head">
              <div className="HeaderLeft">
                <button
                  className="menubutton menuIcon"
                  onClick={() => {
                    setAlwaysOpen(!alwaysOpen);
                    props.openMenu(!props.isOpen);
                  }}
                >
                  <MenuIcon />
                </button>
              </div>

              <div className="HeaderRight">
                <Fade left duration={2000}>
                  <FormControl
                    className="headerSearch"
                    sx={{ background: "white" }}
                  >
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={values.weight}
                      onChange={handleChange("weight")}
                      className="dataModal"
                      placeholder="Search here ..."
                      endAdornment={
                        <InputAdornment position="end">
                          <SearchModal />
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                  <Select
                    className="headDrop borderWidt"
                    isSearchable={false}
                    placeholder="Project"
                    options={props.projects?.result ?? []}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id.toString()}
                    // value={""}
                    onChange={() => {}}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999,
                      }),
                    }}
                  />
                </Fade>

                <Fade right duration={2000}>
                  <RequestVideo />
                  <Link to={ROUTES.DEVICE_STATUS} className="tabLink">
                    <button className="navhov notify">
                      <Row>
                        <Col md={3} className="navhovCol">
                          <DevicesOtherOutlinedIcon className="headicon" />
                        </Col>
                        <Col md={9} className="navhovCol2">
                          <Row>Device Status</Row>
                        </Col>
                      </Row>
                    </button>
                  </Link>
                  <div className="notify nofify1">
                    <Notifications />
                  </div>
                  <div className="user">
                    <User />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="mainContent">
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/sA-ASEvents">
                  <ActiveSafety />
                </Route>
                <Route path="/highEvents">
                  <HighEvents />
                </Route>
                <Route path="/lowEvents">
                  <LowEvents />
                </Route>
                <Route path="/requestedVideo">
                  <RequestedVideo />
                </Route>
                <Route path="/geo-FenceEvents">
                  <ALERTEvents />
                </Route>
                <Route path="/panicButtonEvents">
                  <PanicEvents />
                </Route>
                <Route path="/driverStatistics">
                  <DriverStatistics />
                </Route>
                <Route path="/vehicleTrip">
                  <VehicleTrip />
                </Route>
                <Route path="/geoFencing">
                  <GeoFencing />
                </Route>
                <Route path="/maps">
                  <Map />
                </Route>
                <Route path="/eventReport">
                  <EventReport />
                </Route>
                <Route path="/videoRequestReport">
                  <VideoRequestReport />
                </Route>
                <Route path="/deviceReport">
                  <DeviceReport />
                </Route>
                <Route path="/organizationReport">
                  <OrganizationReport />
                </Route>
                <Route path="/vehicleTripReport">
                  <VehicleTripReport />
                </Route>
                <Route path="/manageRoles">
                  <ManageRoles />
                </Route>
                <Route path="/usersManagement">
                  <UsersManagement />
                </Route>
                <Route path="/projectManagement">
                  <ProjectManagement />
                </Route>
                <Route path="/supportTicket">
                  <SupportTicket />
                </Route>
                <Route path="/driverManagement">
                  <DriverManagement />
                </Route>
                <Route path="/deviceManagement">
                  <DeviceManagement />
                </Route>
                <Route path="/deviceStatus">
                  <DeviceStatus />
                </Route>
                <Route path="/archive">
                  <Archive />
                </Route>
                <Route path="/logout">
                  <Dashboard />
                </Route>
                <Route path="/userConfiguration">
                  <UserConfiguration />
                </Route>
                <Route path="/highEventsVideo">
                  <HighEventsVideo />
                </Route>
                <Route path="/addConfiguration">
                  <AddConfiguration />
                </Route>
                <Route path="/editConfiguration">
                  <EditConfiguration />
                </Route>
                <Route path="/commonConfiguration">
                  <CommonConfiguration />
                </Route>
                <Route path="/commonConfig">
                  <CommonConfig />
                </Route>
                <Route path="/tripsDetail">
                  <TripsDetail />
                </Route>
                <Route path="/driverScoreCard">
                  <DriverScoreCard />
                </Route>
                <Route path="/locationReport">
                  <LocationTab />
                </Route>
                <Route path="/vendor-dashBoard">
                  <VendorDashBoard />
                </Route>
                <Route path="/openStreetMap">
                  <OpenStreetMap />
                </Route>
                <Route path="/vendor-dashBoard-final">
                  <VendorDashboardFinal />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.generalSlice.isLoading,
  isOpen: state.generalSlice.open,
  dropdowns: state.dropdownList.dropdowns,
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  openMenu: (isOpen: $TSFixMe) => dispatch(alwaysOpenMenu(isOpen)),
  getProjectList: () => dispatch(getProject()),
  getOrgList: () => dispatch(getOrgList()),
  getDeviceList: () => dispatch(getDevices()),
  getDialCodeList: () => dispatch(getDialCode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Side);
