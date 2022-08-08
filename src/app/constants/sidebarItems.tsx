import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LaptopMacOutlinedIcon from "@material-ui/icons/LaptopMacOutlined";
import PersonOutlinOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import GpsFixedOutlinedIcon from "@material-ui/icons/GpsFixedOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import { RootState } from "../redux/reducers/rootReducer";

import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import {
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Collapse,
} from "@material-ui/core";
import { connect } from "react-redux";

export const SIDE_BAR_ITEMS = [
  {
    name: "Dashboard",
    state: "dashboard",
    icon: <HomeOutlinedIcon />,
    pathname: ROUTES.DASHBOARD,
  },
  {
    name: "Events & Videos",
    icon: <CalendarTodayOutlinedIcon />,
    state: "events",
    children: [
      {
        name: "SA-AS Events",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.SA_AS_EVENT,
        state: "events",
        isSubMenu: true,
      },
      {
        name: "High Events",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.HIGH_EVENT,
        state: "events",
        isSubMenu: true,
      },
      {
        name: "Low Events",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.LOW_EVENT,
        state: "events",
        isSubMenu: true,
      },
      {
        name: "Requested Video",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.REQUESTED_VIDEO,
        state: "events",
        isSubMenu: true,
      },
      {
        name: "Geo-Fence Events",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.GEO_FENCE_EVENT,
        state: "events",
        isSubMenu: true,
      },
      {
        name: "Panic Button Events",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.PANIC_BUTTON_EVENT,
        state: "events",
        isSubMenu: true,
      },
    ],
  },
  {
    name: "Drive Statistics",
    state: "statistics",
    icon: <ShowChartOutlinedIcon />,
    pathname: ROUTES.DRIVER_STATISTIC,
  },
  {
    name: "Trips & Geo-fence",
    icon: <GpsFixedOutlinedIcon />,
    state: "tripsAndGeoFence",
    children: [
      {
        name: "Vehicle Trip",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.VEHICLE_TRIP,
        state: "tripsAndGeoFence",
        isSubMenu: true,
      },
      {
        name: "Geo Fencing",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.GEO_FENCING,
        state: "tripsAndGeoFence",
        isSubMenu: true,
      },
    ],
  },
  {
    name: "Maps",
    state: "maps",
    icon: <MapOutlinedIcon />,
    pathname: ROUTES.MAPS,
  },
  {
    name: "Reports",
    icon: <DescriptionOutlinedIcon />,
    state: "reports",
    children: [
      {
        name: "Event Report",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.EVENTS_REPORT,
        state: "reports",
        isSubMenu: true,
      },
      {
        name: "Video Request Report",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.VIDEO_REQUEST_REPORT,
        state: "reports",
        isSubMenu: true,
      },
      {
        name: "Device Report",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.DEVICE_REPORT,
        state: "reports",
        isSubMenu: true,
      },
      {
        name: "Organization Report",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.ORGANIZATION_REPORT,
        state: "reports",
        isSubMenu: true,
      },
      {
        name: "Vehicle Trip Report",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.VEHICLE_TRIP_REPORT,
        state: "reports",
        isSubMenu: true,
      },
    ],
  },
  {
    name: "Management & Settings",
    icon: <PersonOutlinOutlinedIcon />,
    state: "managmentSetting",
    children: [
      {
        name: "Manage Roles",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.MANAGE_ROLES,
        state: "managmentSetting",
        isSubMenu: true,
      },
      {
        name: "Project Management",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.PROJECT_MANAGEMENT,
        state: "managmentSetting",
        isSubMenu: true,
      },
      {
        name: "Users Management",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.USERS_MANAGEMENT,
        state: "managmentSetting",
        isSubMenu: true,
      },
      {
        name: "Support Ticket",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.SUPPORT_TICKET,
        state: "managmentSetting",
        isSubMenu: true,
      },
      {
        name: "Driver Management",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.DRIVER_MANAGEMENT,
        state: "managmentSetting",
        isSubMenu: true,
      },
      {
        name: "Device Management",
        icon: <ArrowForwardIcon />,
        pathname: ROUTES.DEVICE_MANAGEMENT,
        state: "managmentSetting",
        isSubMenu: true,
      },
    ],
  },
  //   {
  //     name: "All Devices",
  //     icon: <LaptopMacOutlinedIcon />,
  //     state: "allDevice",
  //     children: [
  //       {
  //         name: "First Connect",
  //         icon: <ArrowForwardIcon />,
  //         pathname: ROUTES.FIRST_CONNECT,
  //         state: "allDevice",
  //         isSubMenu: true,
  //       },
  //       {
  //         name: "Import Devices",
  //         icon: <ArrowForwardIcon />,
  //         pathname: ROUTES.IMPORT_DEVICES,
  //         state: "allDevice",
  //         isSubMenu: true,
  //       },
  //       {
  //         name: "Device Status",
  //         icon: <ArrowForwardIcon />,
  //         pathname: ROUTES.DEVICE_STATUS,
  //         state: "allDevice",
  //         isSubMenu: true,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Engineer Service Calls",
  //     state: "serviceCall",
  //     icon: <SettingsOutlinedIcon />,
  //     pathname: ROUTES.ENGINEER_SERVICE_CALLS,
  //   },
  {
    name: "Archive",
    state: "archive",
    icon: <ArchiveOutlinedIcon />,
    pathname: ROUTES.ARCHIVE,
  },
  //   {
  //     name: "Logout",
  //     state: "logout",
  //     icon: <ExitToAppOutlinedIcon />,
  //     pathname: ROUTES.LOGOUT,
  //   },
];

const SideBarMenu = ({
  selected,
  setSelected,
  open,
  handleDrawerOpen,
  classes,
  pathname,
  openMenu,
}: $TSFixMe) => {
  return (
    <>
      <SidebarMenuitem
        sidebarItems={SIDE_BAR_ITEMS}
        selected={selected}
        openMenu={openMenu}
        setSelected={setSelected}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        classes={classes}
        pathname={pathname}
      />
    </>
  );
};

const SidebarMenuitem = ({
  sidebarItems,
  selected,
  setSelected,
  open,
  handleDrawerOpen,
  classes,
  pathname,
  openMenu,
}: $TSFixMe) => {
  return (
    <List className="deviceList">
      {sidebarItems?.map((item: $TSFixMe, index: $TSFixMe) => (
        <SubMenu
          item={item}
          selected={selected}
          openMenu={openMenu}
          setSelected={setSelected}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          classes={classes}
          pathname={pathname}
        />
      ))}
    </List>
  );
};

const SubMenu = ({
  item,
  handleDrawerOpen,
  classes,
  open,
  selected,
  setSelected,
  pathname,
  openMenu,
}: $TSFixMe) => {
  return (
    <div
      style={{ height: !openMenu ? "43.19px" : "", backgroundColor: "#121929" }}
    >
      <Link
        to={{ pathname: item.pathname, state: item.state }}
        className="tabLink"
      >
        <ListItem
          button
          key={item.name}
          onClick={() => {
            if (!item.pathname) {
              if (selected === item.state) {
                setSelected("");
              } else {
                setSelected(item.state);
              }
            } else {
              setSelected(item.state);
            }
          }}
          className={
            item.pathname
              ? item.pathname === pathname
                ? item.isSubMenu
                  ? `subMenu active ${classes.item} `
                  : selected === item.state
                  ? "arrwhvr active"
                  : "arrwhvr"
                  ? "arrwhvr active"
                  : ""
                : item.isSubMenu
                ? `subMenu ${classes.item}`
                : "arrwhvr"
              : selected === item.state
              ? "contentActive"
              : "arrwhvr"
          }
        >
          <ListItemIcon className="svgiconParent">{item.icon}</ListItemIcon>

          <ListItemText primary={item.name} />
          {item.children?.length &&
            (selected === item.state ? (
              <ExpandMore
                className={classes?.item + " navIcn" + " SidebarItemDivText"}
              />
            ) : (
              <NavigateNextIcon
                className={classes?.item + " navIcn" + " SidebarItemDivText"}
              />
            ))}
        </ListItem>
        <Collapse in={selected === item.state} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="arrwfrwd">
            {openMenu && item.children?.length ? (
              <SidebarMenuitem
                sidebarItems={item.children}
                selected={selected}
                setSelected={setSelected}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                classes={classes}
                pathname={pathname}
              />
            ) : (
              ""
            )}
          </List>
        </Collapse>
      </Link>
    </div>
  );
};
const mapStateToProps = (state: RootState) => ({
  openMenu: state.generalSlice.open,
});

export default connect(mapStateToProps)(SideBarMenu);
