import { useState } from "react";
import "./ToggleButton.css";

function ToggleButton({
  onClick,
  checked
}: $TSFixMe) {
  console.log("togglebtn props", checked);
  // const [toggle, setToggle] = useState(true);
  const handleToggle = (e: $TSFixMe) => {
    // const newToggle = !toggle;
    onClick(!checked);
    // setToggle(!toggle);
  };
  return (
    <div className="form-group ToggleBtn DeviceStatus EditStatus">
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button r" id="button-2">
            <input
              type="checkbox"
              onClick={handleToggle}
              className="checkbox"
              checked={!checked}
            />
            <div className="knobs" />
            <div className="layer" />
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
export default ToggleButton;
