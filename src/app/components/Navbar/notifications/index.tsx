import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Row, Col } from "reactstrap";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import COLORS from "../../../colors";
import ASSETS from "../../../assets";

export default function Notifications() {
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
    <>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <NotificationsNoneOutlinedIcon className="notificationIcon" />
        <div className="count-label" />
      </Typography>
      {/* @ts-expect-error TS(2741): Property 'title' is missing in type '{ children: E... Remove this comment to see the full error message */}
      <NavDropdown
        id="mouse-over-popover"
        show={open}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className="notifMod"
      >
        <button className="notificationButton">
          <ArrowDropUpIcon className="arrowIcon" fontSize="large" />
        </button>
        <a className="notificationCard">
          <Row className="notificationRow">Notifications(40)</Row>
          <Link to="/#" className="tabLink">
            <Link to="/#" className="tabLink">
              <Row>
                <Col className="notificationCol">
                  <img
                    alt="abbott"
                    src={ASSETS.ABBOTT}
                    className="notificationImage"
                  />
                  <span className="activestatus activestatusorange"></span>
                  <Col className="leftdiv">
                    <Row className="notificationRow1">Abbott</Row>
                    <Row className="notificationRow2">
                      Membership has been ended
                    </Row>
                    <Row className="notificationRow3">Oct 20, 07:30 pm</Row>
                  </Col>
                </Col>
              </Row>
            </Link>
            <Link to="/#" className="tabLink">
              <Row>
                <Col className="notificationCol">
                  <img
                    alt="braxten"
                    src={ASSETS.BRAXTEN}
                    className="notificationImage"
                  />
                  <span className="activestatus activestatusred"></span>
                  <Col className="leftdiv">
                    <Row className="notificationRow1">Braxten</Row>
                    <Row className="notificationRow2">Approved new design</Row>
                    <Row className="notificationRow3">Oct 10, 12:00 am</Row>
                  </Col>
                </Col>
              </Row>
            </Link>
            <Link to="/#" className="tabLink">
              <Row>
                <Col className="notificationCol">
                  <img
                    alt="larkyn"
                    src={ASSETS.LARKYN}
                    className="notificationImage"
                  />
                  <span className="activestatus activestatusgreen"></span>
                  <Col className="leftdiv">
                    <Row className="notificationRow1">Larkyn</Row>
                    <Row className="notificationRow2">
                      Check out every table in detail
                    </Row>
                    <Row className="notificationRow3">Oct 15, 04:00 pm</Row>
                  </Col>
                </Col>
              </Row>
            </Link>
          </Link>
        </a>
      </NavDropdown>
    </>
  );
}
