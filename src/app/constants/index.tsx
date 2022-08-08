import InputBase from "@material-ui/core/InputBase";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import CachedIcon from "@material-ui/icons/Cached";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import COLORS from "../colors";
import DriverDelete from "../components/Sidebar/Management&Settings/DriverManagement/tab/Components/driverDelete";
import DriverEdit from "../components/Sidebar/Management&Settings/DriverManagement/tab/Components/driverEdit";
import DriverView from "../components/Sidebar/Management&Settings/DriverManagement/tab/Components/driverView";
import ProjectDelete from "../components/Sidebar/Management&Settings/ProjectManagement/tab/Components/projectDelete";
import ProjectEdit from "../components/Sidebar/Management&Settings/ProjectManagement/tab/Components/projectEdit";
import ProjectView from "../components/Sidebar/Management&Settings/ProjectManagement/tab/Components/projectView";
import { ROUTES } from "../routes/routes";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TimelapseSharpIcon from "@mui/icons-material/TimelapseSharp";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { styled } from "@mui/material/styles";
import { ApexOptions } from "apexcharts";
import { ColorString } from "highcharts";
import { useState } from "react";
import Switch from "react-switch";
import ASSETS from "../assets";
//@ts-expect-error
import vid from "../assets/mp4/video.mp4";
import VideoRequest from "../components/Sidebar/Events&Videos/RequestedVideo/tab/Components/videoRequest";
import {
  DeviceReport,
  Driver,
  ProjectMgMtType,
  ProjectType,
} from "../../global.types";

const VehicleTripActionBtns1 = () => {
  return (
    <div className="imptabbody">
      <Link to="#" className="tabLink">
        <DirectionsCarIcon className="dropico" />
      </Link>
    </div>
  );
};
const VehicleTripActionBtns2 = () => {
  return (
    <div className="imptabbody">
      <Link to="#" className="tabLink">
        <CachedIcon className="dropico" />
      </Link>
    </div>
  );
};
const SaAsActionBtns2 = () => {
  return (
    <div className="imptabbody">
      <Link to={ROUTES.HIGH_EVENTS_VIDEO} className="tabLink">
        <TimelapseSharpIcon className="dropico" />
      </Link>
    </div>
  );
};
const SaAsActionBtns3 = () => {
  return (
    <div className="imptabbody">
      {/* @ts-expect-error TS(2551): Property 'SA_AS_EVENTS' does not exist on type '{ ... Remove this comment to see the full error message */}
      <Link to={ROUTES.SA_AS_EVENTS} className="tabLink">
        <LocationOnOutlinedIcon className="dropico" />
      </Link>
    </div>
  );
};
const DashHighEventsActionBtns1 = () => {
  return (
    <div className="tabAction">
      <Link to="#" className="tabLink">
        <VideocamOutlinedIcon className="dropico" />{" "}
      </Link>{" "}
    </div>
  );
};
const DashHighEventsActionBtns2 = () => {
  return (
    <div className="tabAction">
      <Link to="#" className="tabLink">
        <MapOutlinedIcon className="dropico" />{" "}
      </Link>{" "}
    </div>
  );
};

const GeoFencingActionBtns1 = () => {
  return (
    <div className="imptabbody">
      <Link to="#" className="tabLink">
        <LocationOnOutlinedIcon className="dropico" />
      </Link>
    </div>
  );
};
const GeoFencingActionBtns2 = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  return (
    <div className="imptabbody">
      <span className="rswitch">
        <Switch
          onChange={handleChange}
          checked={checked}
          width={32}
          height={16}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#007ae1"
          className="react-switch"
        />{" "}
      </span>
      <div className="multIcon">
        <img src={ASSETS.MULTIPLY} className="multiplyIcon" alt="icon" />
      </div>
    </div>
  );
};
const GeoFencingActionBtns3 = () => {
  return (
    <div className="imptabbody">
      <Link to="#" className="tabLink">
        <CheckIcon className="dropico" />
      </Link>
    </div>
  );
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const URL =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const pass =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const LowEvents = () => {
  return <div className="imptabbody">2</div>;
};
const HighEvents = () => {
  return <div className="imptabbody">0</div>;
};
const IdleTime = () => {
  return <div className="imptabbody">02m:27s</div>;
};
const From = () => {
  return (
    <div className="imptabbody">Montgomery Road, Newbury, RG146HU, England</div>
  );
};
const To = () => {
  return (
    <div className="imptabbody">Montgomery Road, Newbury, RG146HU, England</div>
  );
};
const Type = () => {
  return <div className="imptabbody">Alarm on entry only</div>;
};
const Score = () => {
  return <div className="imptabbody">75</div>;
};
const Event = () => {
  return <div className="imptabbody">Tail Gating</div>;
};
const HighEventsEvent = () => {
  return <div className="imptabbody">Right Cornering</div>;
};
const GeoFenceEventsEvent = () => {
  return <div className="imptabbody">Right Cornering</div>;
};
const Country = () => {
  return <div className="imptabbody">United Kingdom</div>;
};
const DriverActionBtns = (data: $TSFixMe) => {
  return (
    <div className="imptabbody">
      <DriverView data={data.data} />
      <DriverEdit data={data.data} />
      <DriverDelete data={data.data} />
    </div>
  );
};
const ProjectActionBtns = (data: $TSFixMe) => {
  return (
    <div className="tabAction tabSet">
      <Link to={ROUTES.COMMON_CONFIG} className="tabLink">
        <SettingsOutlinedIcon className="dropico" />
      </Link>
      <ProjectView data={data.data} />
      <ProjectEdit data={data.data} />
      <ProjectDelete data={data.data} />
    </div>
  );
};

const GeoFenceActionBtns = () => {
  return (
    <div className="imptabbody">
      {/* @ts-expect-error TS(2551): Property 'GEO_FENCE_EVENTS' does not exist on type... Remove this comment to see the full error message */}
      <Link to={ROUTES.GEO_FENCE_EVENTS} className="tabLink">
        <DirectionsCarIcon className="dropico" />
      </Link>
    </div>
  );
};
const DriverStatisticsActionBtns = () => {
  return (
    <div className="imptabbody">
      <Link to={ROUTES.DRIVER_SCORE_CARD} className="tabLink">
        <VisibilityOutlinedIcon className="dropico" />
      </Link>
    </div>
  );
};
const HighEventsActionBtns2 = () => {
  return (
    <div className="imptabbody">
      <Link to={ROUTES.HIGH_EVENTS_VIDEO} className="tabLink">
        <TimelapseSharpIcon className="dropico" />
      </Link>
    </div>
  );
};
const HighEventsActionBtns3 = () => {
  return (
    <div className="imptabbody">
      {/* @ts-expect-error TS(2551): Property 'SA_AS_EVENTS' does not exist on type '{ ... Remove this comment to see the full error message */}
      <Link to={ROUTES.SA_AS_EVENTS} className="tabLink">
        <LocationOnOutlinedIcon className="dropico" />
      </Link>
    </div>
  );
};
const LowEventsActionBtns1 = () => {
  return (
    <div className="imptabbody">
      <Link to={ROUTES.HIGH_EVENTS_VIDEO} className="tabLink">
        <FileDownloadOutlinedIcon className="dropico" />
      </Link>
    </div>
  );
};
const LowEventsActionBtns2 = () => {
  return (
    <div className="imptabbody">
      {/* @ts-expect-error TS(2551): Property 'SA_AS_EVENTS' does not exist on type '{ ... Remove this comment to see the full error message */}
      <Link to={ROUTES.SA_AS_EVENTS} className="tabLink">
        <LocationOnOutlinedIcon className="dropico" />
      </Link>
    </div>
  );
};
const PanicButtonActionBtns1 = () => {
  return (
    <div className="imptabbody">
      <Link to="#" className="tabLink">
        <PlayCircleOutlineSharpIcon className="dropico" />
      </Link>
    </div>
  );
};
const RequestedVideoActionBtns1 = () => {
  return (
    <div className="imptabbody">
      <Link to={ROUTES.HIGH_EVENTS_VIDEO} className="tabLink">
        <PlayCircleOutlineSharpIcon className="dropico" />
      </Link>
    </div>
  );
};
const RequestedVideoActionBtns2 = () => {
  return <VideoRequest />;
};
const RequestedVideoActionBtns3 = () => {
  return (
    <div className="imptabbody">
      <input type="checkbox" />
    </div>
  );
};
const TripsHighEventsActionBtns1 = () => (
  <div className="tabAction">
    <Link to="#" className="tabLink">
      <DnsRoundedIcon className="dropico" />
    </Link>
  </div>
);
const TripsHighEventsActionBtns2 = () => (
  <div className="tabAction">
    <Link to="#" className="tabLink">
      <LockOutlinedIcon className="dropicored" />
    </Link>
  </div>
);
const TripsHighEventsActionBtns3 = () => (
  <div className="tabAction">
    <Link to="#" className="tabLink">
      <CropSquareOutlinedIcon className="dropicored" />
    </Link>
  </div>
);
const TripsHighEventsActionBtns4 = () => (
  <div className="tabAction">
    <Link to="#" className="tabLink">
      <OpacityOutlinedIcon className="dropico" />
    </Link>
  </div>
);
const TripsHighEventsActionBtns5 = () => (
  <div className="tabAction">
    <Link to="#" className="tabLink">
      <LockOpenOutlinedIcon className="dropicogreen" />
    </Link>
  </div>
);
const TripsHighEventsActionBtns6 = () => (
  <div className="tabAction">
    <Link to="#" className="tabLink">
      <PlayArrowOutlinedIcon className="dropicogreen" />
    </Link>
  </div>
);
const TripsActionBtns1 = () => {
  return (
    <div className="tabAction">
      <RefreshOutlinedIcon className="dropico" />
    </div>
  );
};
const TripsActionBtns2 = () => {
  return (
    <div className="tabAction">
      <Link to={ROUTES.TRIPS_DETAIL} className="tabLink">
        <NavigationRoundedIcon className="dropico" />
      </Link>
    </div>
  );
};
const DeviceStatusActionBtns1 = () => {
  return (
    <div className="tabAction">
      <Link to="#" className="tabLink">
        <ReplayOutlinedIcon className="dropico" />
      </Link>
      <Link to="#" className="tabLink">
        <VideoCallRoundedIcon className="dropico" />
      </Link>
    </div>
  );
};
const DeviceStatusActionBtns2 = () => {
  return (
    <div className="tabAction">
      <input type="checkbox" />
    </div>
  );
};
const tripsHighEventsData = [
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns2 />,
    moving: <TripsHighEventsActionBtns3 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns2 />,
    moving: <TripsHighEventsActionBtns3 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns2 />,
    moving: <TripsHighEventsActionBtns3 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns2 />,
    moving: <TripsHighEventsActionBtns3 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns2 />,
    moving: <TripsHighEventsActionBtns3 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
  {
    time: "12:01PM",
    vehicle: "PO68YGD",
    setPoints: "-2.2°C",
    return: "-2.2°C",
    supply: "-4.3°C",
    type: <TripsHighEventsActionBtns1 />,
    mode: <TripsHighEventsActionBtns5 />,
    moving: <TripsHighEventsActionBtns6 />,
    powerSupply: <TripsHighEventsActionBtns4 />,
  },
];
const searchData = [
  {
    parent: "IMEI",
    child: "352031100058699",
  },
  {
    parent: "LIC Plate",
    child: "12 MH 4686",
  },
  {
    parent: "First Installed Date",
    child: "1-04-2021",
  },
  {
    parent: "Remaining Warranty Period",
    child: "700 days",
  },
  {
    parent: "Driver",
    child: "Stacey Stamper",
  },
  {
    parent: "Ignition Status",
    child: "ON",
  },
  {
    parent: "Channels",
    child: "Camera Telematics",
  },
  {
    parent: "Organization",
    child: "Camera Telematics",
  },
  {
    parent: "Project",
    child: "Camera Telematics",
  },
  {
    parent: "High Events",
    child: "15",
  },
  {
    parent: "Low Events",
    child: "30",
  },
  {
    parent: "Last GPS Data",
    child: "      18-04-2018",
  },
  {
    parent: "     Street Name location",
    child: (
      // @ts-expect-error TS(2322): Type '{ children: Element; href: string; class: st... Remove this comment to see the full error message
      <a href="#nogo" class="iconLocation">
        <PinDropIcon />
      </a>
    ),
  },
];
export type DriverAddSchemaType = Yup.InferType<
  typeof driverValidationAddSchema
>;
const driverValidationAddSchema = Yup.object({
  dName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  mobileNo: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  mobileNoCode: Yup.string().required("requireSelect"),
  email: Yup.string().email("Invalid email format").required("Required"),
  emergencyContact: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  emergencyContactCode: Yup.string().required("requireSelect"),
  // organization: Yup.string().required("requireSelect"),
  // project: Yup.string().required("requireSelect"),
  project: Yup.object({
    id: Yup.number().required(),
    name: Yup.string().required(),
  }).required("requireSelect"),
  country: Yup.string().optional(),
  status: Yup.boolean().required().default(true),
});
export type CommonConfigurationAddValidationType = Yup.InferType<
  typeof commonSchema
>;
const commonSchema = Yup.object({
  organization: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).required("requireSelect"),
  organizationTo: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).required("requireSelect"),
  organizationFrom: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).required("requireSelect"),
  status: Yup.boolean().required().default(true),
});
const driverValidationEditSchema = Yup.object({
  dName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  mobileNo: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  mobileNoCode: Yup.object({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }).typeError("requireSelect"),
  email: Yup.string().email("Invalid email format").required("Required"),
  emergencyContact: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  emergencyContactCode: Yup.object({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }).typeError("requireSelect"),
  organization: Yup.object({
    id: Yup.number().required(),
    name: Yup.string().required(),
  }).required("requireSelect"),
  project: Yup.object({
    id: Yup.number().required(),
    name: Yup.string().required(),
  }).required("requireSelect"),
  // project: Yup.string().required("requireSelect"),
  country: Yup.string().optional(),
  status: Yup.boolean().required().default(true),
});
export type DriverValidationEditType = Yup.InferType<
  typeof driverValidationEditSchema
>;
export type supportTicketValidationAddType = Yup.InferType<
  typeof supportTicket
>;
const supportTicket = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  contact: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  message: Yup.string()
    .min(2, "message must be at least 2 characters long")
    .max(10, "message maximum 10 characters allow")
    .required("Required"),
  // organization: Yup.object().required("requireSelect"),
  // organization: Yup.string().required("requireSelect"),
  organization: Yup.string().required("Required"),
  organizationId: Yup.string().required(),
  messageStatus: Yup.boolean().required().default(true),
  status: Yup.boolean().required().default(true),
});
export type DeviceMgmtAddType = Yup.InferType<typeof deviceValidationAddSchema>;
const deviceValidationAddSchema = Yup.object({
  vehicleRegestrationNo: Yup.string()
    .min(4, "Must be 4 characters long")
    .required("Required"),
  deviceId: Yup.string()
    .min(4, "Must be 4 characters long")
    .required("Required"),
  organizationManagementId: Yup.number().required("requireSelect"),
  description1: Yup.string().optional(),
  description2: Yup.string().optional(),
  driverManagementId: Yup.object({
    id: Yup.number().required(),
    name: Yup.string().required(),
  }).required("requireSelect"),
  projectId: Yup.object({
    id: Yup.number().required(),
    name: Yup.string().required(),
  }).required(),
  fleetNumber: Yup.string().optional(),
  homeDepot: Yup.string().optional(),
  insurerName: Yup.string().optional(),
  policyNumber: Yup.string().optional(),
  status: Yup.boolean().required().default(true),
});
export type DeviceEditSchema = Yup.InferType<typeof deviceValidationEditSchema>;
const deviceValidationEditSchema = Yup.object({
  vehicleRegestrationNo: Yup.string()
    .min(4, "Must be 4 characters long")
    .required("Required"),
  deviceId: Yup.number()
    .min(4, "Must be 4 characters long")
    .required("Required"),
  organizationManagementId: Yup.number().required(),
  description1: Yup.string().optional(),
  description2: Yup.string().optional(),
  driverManagementId: Yup.object({
    //Working
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).required("requireSelect"),
  projectId: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).required("requireSelect"),
  fleetNumber: Yup.string().optional(),
  homeDepot: Yup.string().optional(),
  insurerName: Yup.string().optional(),
  policyNumber: Yup.string().optional(),
  status: Yup.boolean().required().default(true),
});

export type ManageRoleEditValidationSchemaType = Yup.InferType<
  typeof manageRolesEditValidationSchema
>;
const manageRolesEditValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  description: Yup.string().optional(),
  engineer: Yup.boolean().required().default(true),
  liveStreaming: Yup.boolean().required().default(true),
  permissions: Yup.array()
    .of(
      Yup.object().shape({
        permission: Yup.string(),
        permissionId: Yup.number(),
        read: Yup.boolean(),
        write: Yup.boolean(),
      })
    )
    .required("Required"),
  status: Yup.boolean().required().default(true),
});

export type ManageRoleAddValidationSchemaType = Yup.InferType<
  typeof manageRolesAddValidationSchema
>;
const manageRolesAddValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  description: Yup.string().optional(),
  engineer: Yup.boolean().required().default(true),
  liveStreaming: Yup.boolean().required().default(true),
  permissions: Yup.object().required("Required"),
  status: Yup.boolean().required().default(true),
});
export type AddProjectValidationType = Yup.InferType<
  typeof projectValidationSchema
>;
const projectValidationSchema = Yup.object({
  website: Yup.string().matches(URL, "Enter a valid url").required("Required"),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  // userName: Yup.string()
  //   .min(2, "Name must be at least 2 characters long")
  //   .required("Required"),
  // password: Yup.string()
  //   .matches(
  //     pass,
  //     "Password is not valid. Should Contain Lowercase, Uppercase, Number and Symbol."
  //   )
  //   .min(8, "Minimum 8 characters")
  //   .required("Required"),
  postalCode: Yup.string()
    .min(6, "Number must be at least 6 characters long")
    .max(10, "Number too long")
    .required("Required"),
  contactPersonName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  contactPersonMobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  // contactPersonMobileCode: Yup.object({
  //   label: Yup.string().required(),
  //   value: Yup.string().required(),
  // }).typeError("requireSelect"),
  contactPersonMobileCode: Yup.string().required("requireSelect"),
  faxNumber: Yup.string()
    .matches(phoneRegExp, "Fax number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  alternativeEmail: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  city: Yup.string().optional(),
  country: Yup.string().optional(),
  logo: Yup.boolean().optional().default(true),
  organizationAddress: Yup.string().optional(),
  organizationId: Yup.number().required(),
  organizationName: Yup.string().required(),
  // renewalDate: Yup.string().required(""),
  service: Yup.string().optional(),
  state: Yup.string().optional(),
  officeNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .optional(),
});

const projectEditValidationSchema = Yup.object({
  website: Yup.string().matches(URL, "Enter a valid url").required("Required"),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  // userName: Yup.string()
  //   .min(2, "Name must be at least 2 characters long")
  //   .required("Required"),
  // password: Yup.string()
  //   .matches(
  //     pass,
  //     "Password is not valid. Should Contain Lowercase, Uppercase, Number and Symbol."
  //   )
  //   .min(8, "Minimum 8 characters")
  //   .required("Required"),
  postalCode: Yup.string()
    .min(6, "Number must be at least 6 characters long")
    .max(10, "Number too long")
    .required("Required"),
  contactPersonName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  contactPersonMobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  contactPersonMobileCode: Yup.object({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }).typeError("requireSelect"),
  // contactPersonMobileCode: Yup.string().required("requireSelect"),
  faxNumber: Yup.string()
    .matches(phoneRegExp, "Fax number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  alternativeEmail: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  city: Yup.string().optional(),
  country: Yup.string().optional(),
  logo: Yup.boolean().optional().default(true),
  organizationAddress: Yup.string().optional(),
  // renewalDate: Yup.string().required(""),
  service: Yup.string().optional(),
  state: Yup.string().optional(),
  officeNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .optional(),
  organizationId: Yup.number().required(),
  organizationName: Yup.string().required(),
});
export type ProjectEditValidationType = Yup.InferType<
  typeof projectEditValidationSchema
>;
export type AddUserValidationType = Yup.InferType<
  typeof UsersManagementAddValidationSchema
>;
const UsersManagementAddValidationSchema = Yup.object({
  userName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  password: Yup.string()
    .matches(
      pass,
      "Password is not valid. Should Contain Lowercase, Uppercase, Number and Symbol. "
    )
    .min(8, "Minimum 8 characters")
    .required("Required"),
  role: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).required("requireSelect"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  allowAlertEmail: Yup.boolean().optional().default(true),
  allowMaintenanceEmail: Yup.boolean().optional().default(true),
  allowWelcomeEmail: Yup.boolean().optional().default(true),
  status: Yup.boolean().optional().default(true),
  engineer: Yup.boolean().optional().default(true),
  mobileCode: Yup.string().required("requireSelect"),
  organizationsIds: Yup.object().required("Required"),
});
const LoginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Required"),
  password: Yup.string()
    .matches(
      pass,
      "Password is not valid. Should Contain Lowercase, Uppercase, Number and Symbol. "
    )
    .min(8, "Minimum 8 characters")
    .required("Required"),
});
export type EditUserValidationType = Yup.InferType<
  typeof UsersManagementEditValidationSchema
>;
const UsersManagementEditValidationSchema = Yup.object({
  userName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  password: Yup.string()
    .matches(
      pass,
      "Password is not valid. Should Contain Lowercase, Uppercase, Number and Symbol. "
    )
    .min(8, "Minimum 8 characters")
    .required("Required"),
  role: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).required("requireSelect"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(15, "too long")
    .required("Required"),
  allowAlertEmail: Yup.boolean().optional().default(true),
  allowMaintenanceEmail: Yup.boolean().optional().default(true),
  allowWelcomeEmail: Yup.boolean().optional().default(true),
  status: Yup.boolean().optional().default(true),
  engineer: Yup.boolean().optional().default(true),
  mobileCode: Yup.object({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }).required("requireSelect"),
  organizationsIds: Yup.array().required("Required"),
});
const eventsVideosValidationSchema = Yup.object({
  organization: Yup.object().required("Organization is required."),
  project: Yup.object().required("Project is required."),
  vehicleReg: Yup.object().required("Vehicle Registration is required."),
});
export type GeoFenceAddType = Yup.InferType<typeof geoFenceValidationSchema>;

const geoFenceValidationSchema = Yup.object({
  organization: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).typeError("Organization is required."),
  project: Yup.object({
    name: Yup.string().required(),
    id: Yup.number().required(),
  }).typeError("Project is required."),
  vehicleReg: Yup.object({
    vehicleRegestrationNo: Yup.string().required(),
    deviceId: Yup.number().required(),
  }).typeError("Vehicle Reg. is required."),
  alarm: Yup.object({
    vehicleRegestrationNo: Yup.string().required(),
    deviceId: Yup.number().required(),
  }).typeError("Alarm is required."),
  geoFenceName: Yup.string().required(),
});

const organizationReportValidationSchema = Yup.object({
  organization: Yup.object().required("Organization is required."),
  project: Yup.object().required("Project is required."),
});
const supportTicketDownloadColumns = [
  {
    label: "id",
    key: "id",
  },
  { label: "Date", key: "date" },
  {
    label: "Organization",
    key: "organization",
  },
  {
    label: "Contact",
    key: "contact",
  },
  { label: "Message", key: "message" },
  {
    label: "Status",
    key: "status",
  },
  { label: "MessageStatus", key: "messageStatus" },
];

const driverManagmentDownloadColumns = [
  {
    label: "Project",
    key: "organizationName",
  },
  { label: "Name", key: "name" },
  {
    label: "Mobile",
    key: "mobile",
  },
  {
    label: "Emergency Contact",
    key: "emergencyContact",
  },
  { label: "Email", key: "email" },
];
const driverColumns = [
  { title: "Project", data: "organizationName" },
  { title: "Name", data: "name" },
  { title: "Country", format: () => <Country /> },
  { title: "Mobile", data: "mobileNo" },
  { title: "Emergency Contact", data: "emergencyContact" },
  { title: "Email", data: "email" },
  { title: "Status", format: (data: Driver) => <>{data.status + ""}</> },
  {
    title: "Action",
    format: (data: Driver) => <DriverActionBtns data={data} />,
  },
];
const projectManagmentDownloadColumns = [
  {
    label: " Project",
    key: "name",
  },
  {
    label: "Country",
    key: "country",
  },
  { label: "Devices", key: "id" },
  { label: "Contact Person", key: "contactPersonName" },
  { label: "Email", key: "email" },
];
const projectColumns = [
  { title: "Project", data: "name" },
  { title: "Country", data: "country" },
  { title: "Devices", data: "id" },
  { title: "Contact Person", data: "contactPersonName" },
  { title: "Email", data: "email" },
  {
    title: "Action",
    format: (data: ProjectMgMtType) => <ProjectActionBtns data={data} />,
  },
];
const OrganizationSummary1 = [
  { title: "Organization", data: "organizationManagement.name" },
  { title: "Country", data: "country" },
  { title: "Devices", data: "id" },
  { title: "Name", data: "name" },
  { title: "Email", data: "email" },
  { title: "Renewal Date", data: "renewalDate" },
  {
    title: "Action",
    format: (data: ProjectType) => <ProjectActionBtns data={data} />,
  },
];
const geoFencingDownloadColumns = [
  { label: "No:", key: "id" },
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Device ID", key: "deviceId" },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  { label: "DateTime", key: "createdDate" },
];
const geoFenceColumns = [
  { title: "No:", data: "id" },
  {
    title: "Action",
    format: () => <GeoFenceActionBtns />,
  },
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: " Organization", data: "organizationManagement.name" },
  {
    title: "Event",
    format: () => <GeoFenceEventsEvent />,
  },
  { title: "DateTime", data: "createdDate" },
];
const saAsEventsColumns = [
  { title: "No:", data: "id" },
  {
    title: "Action",
    format: () => <SaAsActionBtns2 />,
  },
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: "Driver", data: "driverManagement.name" },
  { title: " Organization", data: "organizationManagement.name" },
  { title: "Event", format: () => <Event /> },
  {
    title: "Location",
    format: () => <SaAsActionBtns3 />,
  },
  { title: "DateTime", data: "createdDate" },
];
const deviceReportsDownloadColumns = [
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Device ID", key: "deviceId" },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  {
    label: "Project",
    key: "project.name",
  },
  { label: "Total Events", key: "project.id" },
  { label: "High Events", key: "organizationManagement.id" },
  { label: "Low Events", key: "driverManagement.id" },
];
const deviceReportColumns = [
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: " Organization", data: "organizationManagement.name" },
  { title: " Project", data: "project.name" },
  { title: "Total Video Request", data: "organizationManagement.id" },
  { title: "High Events", data: "project.id" },
  { title: "Low Events", data: "driverManagement.id" },
  { title: "Status", format: (data: DeviceReport) => <>{data.status + ""}</> },
];
const eventReportDownloadColumns = [
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Device ID", key: "deviceId" },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  { label: "Total Events", key: "project.id" },
  { label: "High Events", key: "organizationManagement.id" },
  { label: "Low Events", key: "driverManagement.id" },
  { label: "Latest High Events", key: "updatedDate" },
];
const eventReportColumns = [
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: "Organization", data: "organizationManagement.name" },
  { title: "Total Events", data: "project.id" },
  { title: "High Events", data: "organizationManagement.id" },
  { title: "Low Events", data: "driverManagement.id" },
  { title: "Latest High Events", data: "updatedDate" },
];
const organizationReportDownloadColumns = [
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  {
    label: "Project",
    key: "project.name",
  },
  { label: "High Events", key: "id" },
  { label: "Low Events", key: "projectId" },
  {
    label: "Total Device",
    key: "driverManagementId",
  },
  { label: "Active Device", key: "project.id" },
  { label: "Total Video Requests", key: "organizationManagement.id" },
];
const organizationReportColumns = [
  { title: "Organization", data: "organizationManagement.name" },
  { title: "Project", data: "project.name" },
  { title: "High Events", data: "id" },
  { title: "Low Events", data: "projectId" },
  { title: "Total Device", data: "driverManagementId" },
  { title: "Active Device", data: "project.id" },
  { title: "Total Video Requests", data: "organizationManagement.id" },
];
const vehicleTripReportDownloadColumns = [
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Organization", key: "organizationManagement.name" },
  {
    label: " Project",
    key: "project.name",
  },
  { label: "Total Trip Count", key: "organizationManagement.id" },
  { label: "Total Distance Covered(km.)", key: "project.id" },
  { label: "High Event Count", key: "driverManagement.id" },
  { label: "Low Event Count", key: "project.id" },
  { label: "Total Idle Time", key: "organizationManagement.id" },
];
const vehicleTripReportColumns = [
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: " Organization", data: "organizationManagement.name" },
  { title: "Project", data: "project.name" },
  { title: "Total Trip Count", data: "organizationManagement.id" },
  { title: "Total Distance Covered(km.)", data: "project.id" },
  { title: "High Event Count", data: "driverManagement.id" },
  { title: "Low Event Count", data: "project.id" },
  { title: "Total Idle Time", data: "organizationManagement.id" },
];
const videoRequestReportDownloadColumns = [
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  { label: "Project", key: "project.name" },
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Video Requests", key: "project.id" },
  { label: "High Events", key: "organizationManagement.id" },
  { label: "Low Events", key: "driverManagement.id" },
  { label: "Latest High Events", key: "updatedDate" },
];
const videoRequestReportColumns = [
  { title: " Organization", data: "organizationManagement.name" },
  { title: "Project", data: "project.name" },
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Video Requests", data: "project.id" },
  { title: "High Events", data: "organizationManagement.id" },
  { title: "Low Events", data: "driverManagement.id" },
  { title: "Latest High Events", data: "updatedDate" },
];
const geoFencingsDownloadColumns = [
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Start Time", key: "createdDate" },
  { label: "End Time", key: "updatedDate" },
  { label: "Device ID", key: "deviceId" },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  {
    label: "Project",
    key: "project.name",
  },
  {
    label: "Radius(Meter)",
    key: "id",
  },
  {
    label: "Fence No",
    key: "projectId",
  },
  { label: "Created Date", key: "createdDate" },
];
const geoFencingColumns = [
  { title: "Vehicle Reg#", data: "vehicleRegNo" },
  { title: "Start Time", data: "startTime" },
  { title: "End Time", data: "endTime" },
  { title: "From", format: () => <From /> },
  { title: "To", format: () => <To /> },
  { title: "Device ID", data: "deviceId" },
  { title: "Organization", data: "organization.id" },
  { title: "Project", data: "project.id" },
  { title: "Type", format: () => <Type /> },
  { title: "Radius(Meter)", data: "radius" },
  { title: "Fence No", data: "fenceNo" },
  {
    title: "Status",
    format: () => <GeoFencingActionBtns3 />,
  },
  { title: "Created Date", data: "createdDate" },
  {
    title: "Location",
    format: () => <GeoFencingActionBtns1 />,
  },
  {
    title: "Action",
    format: () => <GeoFencingActionBtns2 />,
  },
];
const highEventsColumns = [
  { title: "No:", data: "id" },
  {
    title: "Action",
    format: () => <HighEventsActionBtns2 />,
  },
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: "Driver", data: "driverManagement.name" },
  { title: " Organization", data: "organizationManagement.name" },
  {
    title: "Event",
    format: () => <HighEventsEvent />,
  },
  {
    title: "Location",
    format: () => <HighEventsActionBtns3 />,
  },
  { title: "DateTime", data: "createdDate" },
];

const highEventsDownloadColumns = [
  { label: "No:", key: "id" },
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Device ID", key: "deviceId" },
  {
    label: "Driver",
    key: "driverManagement.name",
  },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  { label: "DateTime", key: "createdDate" },
];
const lowEventsColumns = [
  { title: "No:", data: "id" },
  {
    title: "Action",
    format: () => <LowEventsActionBtns1 />,
  },
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: "Driver", data: "driverManagement.name" },
  { title: " Organization", data: "organizationManagement.name" },
  {
    title: "Event",
    format: () => <HighEventsEvent />,
  },
  {
    title: "Location",
    format: () => <LowEventsActionBtns2 />,
  },
  { title: "DateTime", data: "createdDate" },
];
const lowEventsDownloadColumns = [
  { label: "No:", key: "id" },
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Device ID", key: "deviceId" },
  {
    label: "Driver",
    key: "driverManagement.name",
  },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  { label: "DateTime", key: "createdDate" },
];
const vehicleTripDownloadColumns = [
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Driver", key: "driverManagement.name" },
  { label: "Start Time", key: "createdDate" },
  { label: "End Time", key: "updatedDate" },
  { label: "Distance(km.)", key: "deviceId" },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  {
    label: "Project",
    key: "projectId",
  },
  {
    label: "Driven Time",
    key: "driverManagementId",
  },
];
const vehicleTripColumns = [
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  {
    title: "View Trip",
    format: () => <VehicleTripActionBtns1 />,
  },
  {
    title: "Action",
    format: () => <VehicleTripActionBtns2 />,
  },
  { title: "Driver", data: "driverManagement.name" },
  { title: "Start Time", data: "createdDate" },
  { title: "End Time", data: "updatedDate" },
  { title: "From", format: () => <From /> },
  { title: "To", format: () => <To /> },
  { title: "Distance(km.)", data: "projectId" },
  { title: "Driven Time", data: "driverManagementId" },
  { title: "Idle Time", format: () => <IdleTime /> },
  {
    title: "High Events",
    format: () => <HighEvents />,
  },
  {
    title: "Low Events",
    format: () => <LowEvents />,
  },
];
const driverStatisticsDownloadColumns = [
  {
    label: "Driver Name",
    key: "name",
  },
  {
    label: " Organization",
    key: "organizationName",
  },
  {
    label: "Project",
    key: "projectName",
  },
  { label: "Date", key: "createdOn" },
];
const driverStatisticsColumns = [
  { title: "Driver Name", data: "name" },
  { title: "Organization", data: "organizationName" },
  { title: "Project", data: "projectName" },
  { title: "Date", data: "createdOn" },
  { title: "Score", format: () => <Score /> },
  {
    title: "Action",
    format: () => <DriverStatisticsActionBtns />,
  },
];
const panicButtonDownloadColumns = [
  { label: "No:", key: "id" },
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Device Id", key: "driverManagement.name" },
  { label: "Project", key: "driverManagement.name" },
  {
    label: "Driver",
    key: "updatedDate",
  },
  {
    label: " Project",
    key: "project.name",
  },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  { label: "Requested Time", key: "createdDate" },
];
const panicButtonColumns = [
  { title: "No:", data: "id" },
  {
    title: "Action",
    format: () => <PanicButtonActionBtns1 />,
  },
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: "Driver", data: "driverManagement.name" },
  { title: "Project", data: "project.name" },
  { title: " Organization", data: "organizationManagement.name" },
  { title: "DateTime", data: "createdDate" },
];
const requestedVideoDownloadColumns = [
  { label: "No:", key: "id" },
  {
    label: "Vehicle Reg#",
    key: "vehicleRegestrationNo",
  },
  { label: "Start Time", key: "createdDate" },
  {
    label: "Finish Time",
    key: "updatedDate",
  },
  {
    label: " Organization",
    key: "organizationManagement.name",
  },
  {
    label: " Project",
    key: "project.name",
  },
  {
    label: " Requested By",
    key: "driverManagement.name",
  },
  {
    label: "Requested Channel",
    key: "projectId",
  },
  { label: "Requested Time", key: "createdDate" },
];
const requestedVideoColumns = [
  { title: "No:", data: "id" },
  {
    title: "Action",
    format: () => <RequestedVideoActionBtns1 />,
  },
  {
    title: "Request New Time",
    format: () => <RequestedVideoActionBtns2 />,
  },
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Start Time", data: "createdDate" },
  { title: "Finish Time", data: "updatedDate" },
  { title: " Organization", data: "organizationManagement.name" },
  { title: "Project", data: "project.name" },
  { title: "Requested By", data: "driverManagement.name" },
  { title: "Requested Channel", data: "projectId" },
  { title: "Requested Time", data: "createdDate" },
  {
    title: "Action",
    format: () => <RequestedVideoActionBtns3 />,
  },
];
const dashHighEventsColumns = [
  { title: "No", data: "id" },
  {
    title: "Action",
    format: () => <DashHighEventsActionBtns1 />,
  },
  { title: "Device Id", data: "deviceId" },
  { title: "VehicleReg", data: "vehicleRegestrationNo" },
  { title: "Driver", data: "driverManagement.name" },
  { title: "Projects", data: "project.name" },
  { title: "Contact Person", data: "homeDepot" },
  { title: "Event Type", data: "" },
  {
    title: "Location",
    format: () => <DashHighEventsActionBtns2 />,
  },
  { title: "Date & Time", data: "createdDate" },
];
const tripsHighEventsColumns = [
  { title: "Type", data: "type" },
  { title: "Time", data: "time" },
  { title: "Vehicle", data: "vehicle" },
  { title: "Mode", data: "mode" },
  { title: "Moving", data: "moving" },
  { title: "Power Supply", data: "powerSupply" },
  { title: "SetPoints", data: "setPoints" },
  { title: "Return", data: "return" },
  { title: "Supply", data: "supply" },
];
const tripsColumns = [
  { title: "VehicleReg", data: "vehicleRegestrationNo" },
  { title: "Start Time", data: "createdDate" },
  { title: "End Time", data: "updatedDate" },
  { title: "From", data: "" },
  { title: "To", data: "" },
  { title: "Distance(km)", data: "projectId" },
  { title: "Driven Time", data: "driverManagementId" },
  { title: "Avg. Speed", data: "" },
  { title: "Idle Time", data: "" },
  { title: "High Events", data: "" },
  { title: "Low Events", data: "" },
  {
    title: "View Trips",
    format: () => <TripsActionBtns2 />,
  },
  {
    title: "Action",
    format: () => <TripsActionBtns1 />,
  },
];
const deviceStatusColumns = [
  { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
  { title: "Device ID", data: "deviceId" },
  { title: "ICCID", data: "policyNumber" },
  { title: "Organization", data: "organizationManagement.name" },
  { title: "Project", data: "project.name" },
  { title: "Firmware Version", data: "fleetNumber" },
  { title: "Latest Login Date", data: "updatedDate" },
  { title: "Latest Gps Date", data: "createdDate" },
  {
    title: " Action",
    format: () => <DeviceStatusActionBtns2 />,
  },
  {
    title: "Select",
    format: () => <DeviceStatusActionBtns1 />,
  },
];
const tripsDetails = [
  {
    classHead: "tabAll scoreLeft",
    btnClass: "tripsdetail tripsdetailblue",
    icnClass: " tripsDetailCardblue scoreCardHead driverSvg",
    icon: <ChatBubbleOutlineOutlinedIcon className="tripsDetailCardIcon " />,
    num: "842",
    tex: "Duration",
  },
  {
    classHead: "tabAll scoreMid",
    btnClass: "tripsdetail tripsdetailred",
    icnClass: " tripsDetailCardred scoreCardHead driverSvg",
    icon: <HelpOutlineOutlinedIcon className="tripsDetailCardIcon " />,
    num: "4.67 Km",
    tex: "Distance",
  },
  {
    classHead: "tabAll scoreMid",
    btnClass: "tripsdetail tripsdetailyellow",
    icnClass: " tripsDetailCardyellow scoreCardHead driverSvg",
    icon: <EqualizerRoundedIcon className="tripsDetailCardIcon " />,
    num: "195s",
    tex: "Idle Time",
  },
  {
    classHead: "tabAll scoreRight",
    btnClass: "tripsdetail tripsdetailgreen",
    icnClass: " tripsDetailCardgreen scoreCardHead driverSvg",
    icon: <DateRangeOutlinedIcon className="tripsDetailCardIcon " />,
    num: "0",
    tex: "Harsh Events",
  },
];
const vendorButton = [
  {
    classHead: "tabAll scoreLeft",
    btnClass: "tripsdetail tripsdetailblue",
    icnClass: " tripsDetailCardblue scoreCardHead driverSvg",
    icon: <VisibilityOutlinedIcon className="tripsDetailCardIcon" />,
    num: "873",
    tex: "Total Devices",
  },
  {
    classHead: "tabAll scoreMid",
    btnClass: "tripsdetail tripsdetailred",
    icnClass: " tripsDetailCardred scoreCardHead driverSvg",
    icon: <ShoppingCartOutlinedIcon className="tripsDetailCardIcon " />,
    num: "2,563",
    tex: "Active Devices",
  },
  {
    classHead: "tabAll scoreMid",
    btnClass: "tripsdetail tripsdetailyellow",
    icnClass: " tripsDetailCardyellow scoreCardHead driverSvg",
    icon: <LocalMallOutlinedIcon className="tripsDetailCardIcon " />,
    num: "84",
    tex: "In-Active Devices",
  },
];
const highEventsChannel = [
  {
    classChannel1: "thumb1 channel2",
    channel1: "Channel 1",
    content1: vid,
    classChannel2: "thumb1 channel2",
    channel2: "Channel 2",
    content2: vid,
  },
  {
    classChannel1: "thumb1 channel2",
    channel1: "Channel3",
    content1: vid,
    classChannel2: "thumb1 channel2",
    channel2: "Channel4",
    content2: vid,
  },
];
const selectVendor = [
  { vendor: "Vendor 1", year: 1994 },
  { vendor: "Vendor 2", year: 1972 },
  { vendor: "Vendor 3", year: 1974 },
];
const measurement = [
  { value: "Kilometer", label: "Kilometer" },
  { value: "Mile", label: "Mile" },
];
const Measurement = measurement[0];
const time = [
  { value: "24", label: "24 Hour" },
  { value: "12", label: "12 Hour" },
];
const Time = time[0];
const client = [
  { title: "Telematics", year: 1994 },
  { title: "Supervalu", year: 1972 },
  { title: "Haulage", year: 1974 },
];
interface IdataTop10 {
  options: ApexOptions;
  colors: ColorString[];
  series: { name: string; data: number[] }[];
}
const dataTop10: IdataTop10 = {
  colors: ["#ED1F68", "#663366", "#cc6699", "#ff9999"],
  series: [
    {
      name: "Trip",
      data: [44, 55, 57, 56, 61, 58, 63],
    },
    {
      name: "Travel",
      data: [76, 85, 101, 98, 87, 105, 91],
    },
    {
      name: "Distance",
      data: [35, 41, 36, 26, 45, 48, 52],
    },
  ],
  options: {
    chart: {
      // foreColor: COLORS.white,
      // type: 'bar',
      // height: 350,
      toolbar: {
        show: false,
        // tools: {
        //   download: false,
        // },
      },
    },
    grid: {
      borderColor: "#ced1e0",
      strokeDashArray: 5,

      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
      monochrome: {
        enabled: true,
        color: COLORS.brightPink,
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 0.25,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Nick",
        "Michael",
        "Mark",
        "Aidan",
        "Jason",
        "Marc",
        "Barra",
      ],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: $TSFixMe) {
          return val;
        },
      },
    },
  },
};
const dataProject = {
  Team: [20, 20, 20, 20, 20],
  options: {
    chart: {
      foreColor: COLORS.white,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    theme: {
      mode: "light",
      palette: "palette1",
      monochrome: {
        enabled: true,
        color: COLORS.brightPink,
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
    plotOptions: {
      pie: {},
    },
    legend: {
      position: "bottom",
      show: true,
    },
  },
};
const dataVehicle: any = {
  series: [
    {
      name: "Le-meilleur Admin",
      data: [1100, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100],
    },
  ],
  options: {
    chart: {
      foreColor: COLORS.lightBlue,
      height: 350,
      type: "area",
      toolbar: {
        show: true,
        tools: {
          download: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    grid: {
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
      monochrome: {
        enabled: true,
        color: COLORS.brightPink,
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: COLORS.windyBlue,
    },
    xaxis: {
      categories: [
        "PO68YGD",
        "12 C 14556",
        "161 MH 2197",
        "WN20 ZDV",
        "131 D 34954",
        "PJ19 FNE",
        "WN20 ZDX",
        "FP66 YJF",
        "171 D 2413",
        "141 MH 4230",
        "171 D 11870",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
const driverDetails = [
  {
    classHead: "tabAll borderShadow scoreLeft",
    classColor: "tripsdetail tripsdetailblue",
    icon: <PersonOutlineIcon />,
    classIconColor: "tripsDetailCardblue scoreCardHead driverSvg",
    contentParent: "    Drive_20/20 Telematics",
    contentChild: "Driver Name",
  },
  {
    classHead: "tabAll borderShadow allPageTab",
    classColor: "tripsdetail tripsdetailred",
    icon: <PeopleOutlineIcon />,
    classIconColor: " tripsDetailCardred scoreCardHead driverSvg",
    contentParent: " 20/20 Telematics",
    contentChild: "Driver Organization",
  },
  {
    classHead: "tabAll borderShadow scoreRight",
    classColor: "tripsdetail tripsdetailyellow",
    icon: <LaptopMacOutlinedIcon />,
    classIconColor: " tripsDetailCardyellow scoreCardHead driverSvg",
    contentParent: " 20/20 Telematics",
    contentChild: "Driver Project",
  },
];
var dataHarsh = {
  series: [30, 150],
  options: {
    labels: ["High", "Low"],
    chart: {
      width: 374,
      type: "donut",
    },
    colors: ["#007ae1", "#ff3e3e"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 150,
          },
          legend: {
            //position: 'bottom'
            show: false,
          },
        },
      },
    ],
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
  },
};
const dataHours = {
  series: [
    {
      name: "Hours",
      data: [90, 70, 65, 50, 45, 30, 15],
    },
  ],

  options: {
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
      // dropShadow: {
      //   enabled: true,
      //   opacity: 0.1,
      //   blur: 5,
      //   left: -10,
      //   top: 10,
      // },
    },
    plotOptions: {
      bar: {
        barHeight: "50%",
        horizontal: true,
        // columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    grid: {
      borderColor: "#ced1e0",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    // yaxis: {
    //   labels: {
    //     show: true,
    //   },
    // },
    theme: {
      monochrome: {
        enabled: true,
        color: "#007ae1",
        shadeIntensity: 0.1,
      },
    },
  },
};
const dataScore = {
  series: [70],
  labels: ["Progress"],
  options: {
    chart: {
      height: 280,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
      },
    },
    labels: ["Score"],
  },
};
var VideoOptions = {
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: null,
            },
          },
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
  chart: {
    height: 244,
    type: "spline",
    events: {
      load() {
        setTimeout((this as $TSFixMe).reflow.bind(this), 0);
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [COLORS.vivideRed, COLORS.blueRibbon, COLORS.sushiBlue],
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    title: {
      text: "Time",
    },
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    title: {
      text: "m/s²",
    },
  },
  tooltip: {
    shared: true,
  },
  series: [
    {
      name: "Ax",
      data: [
        0.1, 0.3, 0.4, -0.1, 0, 0.1, 0.3, 0.4, -0.1, 0, 7.1, 0.3, 0.4, -0.1, 0,
      ],
    },
    {
      name: "Ay",
      data: [9, 4, 2, -3, 0, 0, 4, 2, -3, 0, 0, 4, 2, -3, 0],
    },
    {
      name: "Az",
      data: [-0.1, 0.5, 1, -2, 0, -0.1, 0.5, 1, -2, 0, -5.1, 0.5, 1, -2, 0],
    },
  ],
  plotOptions: {
    series: {
      allowPointSelect: true,
      point: {
        events: {
          click: function () {
            // vid.currentTime = this.x / 2;
            // vid.pause();
          },
        },
      },
    },
  },
};
const columnsRole = [
  { id: "srNo", label: "Sr No", align: "center", minWidth: 10 },
  { id: "module", label: "Module", align: "center", minWidth: 200 },
  {
    id: "read",
    label: "Read",
    minWidth: 100,
    align: "center",
  },
  { id: "write", label: "Write", align: "center", minWidth: 100 },
];
const PrettoSlider = withStyles((theme) => ({
  root: {
    color: COLORS.pureMostlyPureBlue,
    height: 8,
    width: 500 + theme.spacing(3) * 2,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "blue",
    border: "2px solid currentColor",
    marginTop: -5,
    marginLeft: 0,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-100% + 1px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
}))(Slider);
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "theme.palette.background.paper",
    border: "1px solid COLORS.ghost",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: COLORS.malibu,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
const SIDEBAR_ITEMS = {
  dashboard: "Dashboard",
  events_videos: "Events & Videos",
  driver_statistics: "Driver Statistics",
  trips_geo_fence: "Trips & Geo-fence",
  maps: "Maps",
  reports: "Reports",
  management_settings: "Management & Settings",
  archive: "Archive",
};
const dashboardButtonDetails = [
  {
    infoName: "Total devices",
    infoNum: <>70/100</>,
    classHead: "tabAll scoreLeft shadowCard",
    iconAssets: (
      <div className="target">
        <img src={ASSETS.TOTAL} alt="Total" />
      </div>
    ),
  },
  {
    infoName: "Online devices",
    infoNum: <>60</>,
    classHead: "tabAll scoreMid shadowCard",
    iconAssets: (
      <div className="target">
        <img src={ASSETS.ONLINE} alt="Online" />
      </div>
    ),
  },
  {
    infoName: "UnAssigned Devices",
    infoNum: <>60</>,
    classHead: "tabAll scoreRight shadowCard",
    iconAssets: (
      <button className="btn btn-danger targetSettings">
        <img alt="icon" className="icon-settings" src={ASSETS.SETTINGS} />
        Manage
      </button>
    ),
  },
  {
    infoName: "Total Miles Protected By Street Angel",
    infoNum: <>60</>,
    classHead: "tabAll scoreRight1 shadowCard",
    iconAssets: (
      <div className="target">
        <img src={ASSETS.MILES} alt="Miles" />
      </div>
    ),
  },
];
const dashboardButtonDetails1 = [
  {
    infoName: "Total Vs Assigned Devices",
    infoNum: <>70/100</>,
    classHead: "tabAll scoreLeft shadowCard",
    iconAssets: (
      <div className="target">
        <img src={ASSETS.TOTAL} alt="Total" />
      </div>
    ),
  },
  {
    infoName: "Online devices",
    infoNum: <>60</>,
    classHead: "tabAll scoreMid shadowCard",
    iconAssets: (
      <div className="target">
        <img src={ASSETS.ONLINE} alt="Online" />
      </div>
    ),
  },
  {
    infoName: "UnAssigned Devices",
    infoNum: <>30</>,
    classHead: "tabAll scoreRight shadowCard",
    iconAssets: (
      <button className="btn btn-danger targetSettings">
        <img alt="icon" className="icon-settings" src={ASSETS.SETTINGS} />
        Manage
      </button>
    ),
  },
];
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  border: "1px solid #007ae1",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  // border:'1px solid #007ae1',

  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  border: "none",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 20%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: COLORS.white,
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? COLORS.denim : COLORS.dodgerBlue,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
const colourStyles = {
  control: (styles: $TSFixMe) => ({
    ...styles,
    backgroundColor: "transparent",
    width: "60px",
    minHeight: "0px",
    height: "25px",
    padding: "0px",
    margin: "0px",
    textAlign: "left",
    position: "unset",
  }),
  option: (
    styles: $TSFixMe,
    { data, isDisabled, isFocused, isSelected }: $TSFixMe
  ) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#007bff" : "white",
      color: isFocused ? "white" : "black",
      padding: "0 5px",
      margin: 0,
      textAlign: "left",
    };
  },
};
const manageRoleDownloadColumns = [
  {
    label: "Role",
    key: "name",
  },
  { label: "Created Date", key: "updatedDate" },
];
const userManagmentDownloadColumns = [
  {
    label: "UserName",
    key: "userName",
  },
  { label: "Email", key: "email" },
  {
    label: "Mobile",
    key: "mobile",
  },
  { label: "Project", key: "organizationsId" },
  {
    label: "Role",
    key: "role.name",
  },
];
const deviceManagmentDownloadColumns = [
  {
    label: "No.",
    key: "id",
  },
  { label: "Project", key: "driverManagement.name" },
  { label: "Vehicle Reg#", key: "vehicleRegestrationNo" },
  {
    label: "Device ID",
    key: "deviceId",
  },
  {
    label: "Date Time",
    key: "createdDate",
  },
  {
    label: "Driver Name",
    key: "driverManagement.name",
  },
];
const Options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 25, label: 25 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
];

export {
  VehicleTripActionBtns1,
  VehicleTripActionBtns2,
  LowEvents,
  HighEvents,
  IdleTime,
  From,
  To,
  Type,
  Score,
  Event,
  HighEventsEvent,
  GeoFenceEventsEvent,
  Country,
  DriverActionBtns,
  GeoFenceActionBtns,
  commonSchema,
  projectColumns,
  geoFenceColumns,
  saAsEventsColumns,
  deviceReportColumns,
  eventReportColumns,
  organizationReportColumns,
  OrganizationSummary1,
  vehicleTripReportColumns,
  videoRequestReportColumns,
  geoFencingColumns,
  vehicleTripColumns,
  driverStatisticsColumns,
  highEventsColumns,
  lowEventsColumns,
  panicButtonColumns,
  requestedVideoColumns,
  dashHighEventsColumns,
  tripsHighEventsColumns,
  tripsColumns,
  deviceStatusColumns,
  tripsDetails,
  vendorButton,
  tripsHighEventsData,
  projectValidationSchema,
  deviceValidationAddSchema,
  deviceValidationEditSchema,
  driverValidationAddSchema,
  driverValidationEditSchema,
  manageRolesEditValidationSchema,
  manageRolesAddValidationSchema,
  UsersManagementEditValidationSchema,
  UsersManagementAddValidationSchema,
  eventsVideosValidationSchema,
  organizationReportValidationSchema,
  driverColumns,
  highEventsChannel,
  driverDetails,
  Measurement,
  Time,
  measurement,
  time,
  phoneRegExp,
  URL,
  selectVendor,
  pass,
  dataTop10,
  dataProject,
  dataVehicle,
  dataHarsh,
  dataHours,
  dataScore,
  client,
  VideoOptions,
  columnsRole,
  PrettoSlider,
  BootstrapInput,
  SIDEBAR_ITEMS,
  dashboardButtonDetails,
  dashboardButtonDetails1,
  searchData,
  BpIcon,
  BpCheckedIcon,
  AntSwitch,
  Options,
  colourStyles,
  highEventsDownloadColumns,
  lowEventsDownloadColumns,
  requestedVideoDownloadColumns,
  geoFencingDownloadColumns,
  panicButtonDownloadColumns,
  driverStatisticsDownloadColumns,
  vehicleTripDownloadColumns,
  geoFencingsDownloadColumns,
  eventReportDownloadColumns,
  videoRequestReportDownloadColumns,
  deviceReportsDownloadColumns,
  organizationReportDownloadColumns,
  vehicleTripReportDownloadColumns,
  manageRoleDownloadColumns,
  projectManagmentDownloadColumns,
  userManagmentDownloadColumns,
  driverManagmentDownloadColumns,
  deviceManagmentDownloadColumns,
  supportTicketDownloadColumns,
  supportTicket,
  geoFenceValidationSchema,
  LoginValidationSchema,
  projectEditValidationSchema,
};
