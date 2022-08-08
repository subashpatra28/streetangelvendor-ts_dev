import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Collapse, Drawer } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { Scrollbars } from "react-custom-scrollbars";
import { SIDEBAR_ITEMS } from "../../constants";
import COLORS from "../../colors";
import { ROUTES } from "../../routes/routes";
import ASSETS from "../../assets";
import SideBarMenu, { SIDE_BAR_ITEMS } from "../../constants/sidebarItems";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    overflow: "hidden",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  item: {
    minWidth: "35px",
    padding: "",
    color: COLORS.lightGrayishBlue,
    "& span, & svg": {
      fontSize: ".7rem",
    },
  },
  list: {
    position: "relative",
    padding: "5px 0px 7px 15px",
    display: "flex",
    alignItems: "center",
    fontSize: ".8rem !important",
  },
  paper: {
    background: COLORS.veryDarkMostlyBlackblue,
    color: "white",
  },
}));

function Sidebar({
  handleHover,
  handleDrawerOpen,
  hover,
  alwaysOpen,
}: $TSFixMe) {
  const classes = useStyles();
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    getPath(SIDE_BAR_ITEMS);
  }, [pathname, hover, alwaysOpen]);
  //@ts-expect-error
  function getPath(object: $TSFixMe) {
    if (object.pathname === pathname) return [object.state];
    else if (object.children || Array.isArray(object)) {
      let children = Array.isArray(object) ? object : object.children;
      for (let child of children) {
        // @ts-expect-error TS(7022): 'result' implicitly has type 'any' because it does... Remove this comment to see the full error message
        let result = getPath(child, pathname);
        if (result) {
          if (object.pathname) result.unshift(object.state);
          setSelected(result[0]);
          return result;
        }
      }
    }
  }

  const imageChange = () => {
    setOpen(true);
  };
  const imageNotChange = () => {
    setOpen(false);
  };

  return (
    <div
      className={classes.root}
      onMouseEnter={imageChange}
      onMouseLeave={imageNotChange}
    >
      <Drawer
        variant="permanent"
        // classes={{ paper: classes.paper }}
      >
        <Link
          to={{ pathname: ROUTES.DASHBOARD, state: "dashboard" }}
          className="tabLink"
        >
          <div className="headericon headericon2">
            <img
              className="sideimage1"
              src={ASSETS.STREET_ANGEL}
              alt="streetangel"
              style={{
                display: open || handleDrawerOpen ? "block" : "none",
                margin: "0 auto",
              }}
            />
            <img
              className="sideimage2"
              src={ASSETS.STREET}
              alt="street"
              style={{
                display: open || handleDrawerOpen ? "none" : "block",
                margin: "0 auto",
              }}
            />
          </div>
        </Link>
        <SideBarMenu
          selected={selected}
          setSelected={setSelected}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          classes={classes}
          pathname={pathname}
        />
        <>
          <List className="deviceList">
            <div className="sidemodal">
              <h6 style={{ padding: "1rem" }}>DEVICE STATUS</h6>
            </div>
            <>
              <Scrollbars
                className="scrl scrl2"
                style={{ height: 300, width: 280, marginLeft: "-30px" }}
                //App.css inside style not work...plz note.
              >
                <ul className="sidelist">
                  {[
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",

                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                    "12 MH 4686",
                  ].map((item, index) => (
                    <li className="sidedata">
                      {/* @ts-expect-error TS(2339): Property 'h7' does not exist on type 'JSX.Intrinsi... Remove this comment to see the full error message */}
                      <h7>{item}</h7>
                      <span className={index % 2 === 0 ? "green" : "red"} />
                    </li>
                  ))}
                </ul>
              </Scrollbars>
            </>
          </List>
        </>
      </Drawer>
    </div>
  );
}

export default Sidebar;
