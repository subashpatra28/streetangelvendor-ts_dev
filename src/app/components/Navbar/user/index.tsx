import { useState } from "react";
import user2 from "../../../assets/png/user2.png";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import COLORS from "../../../colors";
import { ROUTES } from "../../../routes/routes";

export default function User() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handlePopoverOpen = (event: $TSFixMe) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div className="userDiv">
      <div
        className="usermainDiv"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <img className="user1" src={user2} alt="user2" />
         {/* @ts-expect-error TS(2741): Property 'title' is missing in type '{ children: E... Remove this comment to see the full error message */}
        <NavDropdown
          id="collasible-nav-dropdown"
          show={open}
          className="userIcon"
        >
          <button className="userButton">
            <ArrowDropUpIcon className="arrowIcon" fontSize="large" />
          </button>
          <div className="userCard">
            <div className="userprofilediv">
              <img src={user2} alt="user2" className="userprofileimage" />
              <span className="userprofilename">Yuki Hayashi</span>
              <span className="usertypeclass">Super User</span>
            </div>
            <>
              <Link to={ROUTES.USER_CONFIGURATION} className="tabLink">
                <button className="profileOptionBtn userProfile">
                  <PersonOutlineOutlinedIcon className="ico sig" />
                  <span className="user-text">Edit Profile</span>
                </button>
              </Link>
              <Link to="#" className="tabLink">
                <button className="profileOptionBtn userProfile">
                  <ExitToAppOutlinedIcon className="ico sig" />
                  <span className="user-text">Sign Out</span>
                </button>
              </Link>
            </>
          </div>
        </NavDropdown>
      </div>
    </div>
  );
}
