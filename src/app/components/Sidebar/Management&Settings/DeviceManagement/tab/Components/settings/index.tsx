import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Device } from "../../../../../../../../global.types";
type Props = {
  data: Device;
};
const Settings = (props: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <SettingsOutlinedIcon className="dropico" />
        <ExpandMoreOutlinedIcon className="dropico" />
      </DropdownToggle>
      <DropdownMenu className="settingdrop">
        <div className="settingdropmenu" onClick={toggle}>
          Health-Check
        </div>
        <div className="settingdropmenu" onClick={toggle}>
          Configuration
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Settings;
