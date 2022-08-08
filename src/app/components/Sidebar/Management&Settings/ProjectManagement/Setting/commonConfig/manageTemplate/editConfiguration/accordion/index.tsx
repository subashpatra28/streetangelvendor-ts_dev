import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import ToggleButton from "../../../../../../../../Common/ToggleButton";
import Select from "react-select";
//@ts-expect-error
import Editable from "react-text-content-editable";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { PrettoSlider } from "../../../../../../../../../constants";

// @ts-expect-error TS(2345): Argument of type '(theme: Theme) => { heading: { f... Remove this comment to see the full error message
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "14px",
    fontWeight: "600",
    flexBasis: "20%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function EditAccordion() {
  const classes = useStyles();
  const [text1, setText1] = useState("First Camera Channel");
  const [text2, setText2] = useState("Second Camera Channel");
  const [text3, setText3] = useState("Third Camera Channel");
  const [text4, setText4] = useState("Fourth Camera Channel");
  const [text5, setText5] = useState("Fifth Camera Channel");
  const onChange1 = (value: string) => {
    setText1(value);
  };
  const onChange2 = (value: string) => {
    setText2(value);
  };
  const onChange3 = (value: string) => {
    setText3(value);
  };
  const onChange4 = (value: string) => {
    setText4(value);
  };
  const onChange5 = (value: string) => {
    setText5(value);
  };
  const [expanded, setExpanded] = useState("");
  const handleChange =
    (panel: string) => (event: $TSFixMe, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };
  const [age] = useState("");

  const options = [
    { value: "1", label: "Reset Data" },
    { value: "2", label: "Keep Data" },
  ];

  const options1 = [
    { value: "10", label: "Wakeup on external power" },
    { value: "20", label: "Wakeup on accelerometer" },
    { value: "30", label: "Wakeup ignition" },
  ];
  const options2 = [
    { value: "0", label: "Default (45 Second)" },
    { value: "1", label: "1 Minute" },
    { value: "5", label: "5 Minute" },
    { value: "10", label: "10 Minute" },
  ];

  return (
    <div className={((classes as $TSFixMe).root, "commonConfigurationAccord")}>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Axis Value
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <>
            <>
              <Row>
                <Col>
                  <h5 className="accordionBold">
                    LOW AXIS VALUE(G)*
                    <span className="accordionDescrip modlabel">
                      Ideal Value For This Field Is 0.4
                    </span>
                  </h5>
                </Col>
              </Row>
            </>
            <div className="table-fixed">
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Braking
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Acceleration
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Left Cornering
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Right Cornering
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Fall
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Bump
                  </div>
                </Col>
              </Row>
            </div>
            <br />
            <>
              <Row>
                <Col>
                  <h5 className="accordionBold">
                    HIGH AXIS VALUE(G)*
                    <span className="accordionDescrip modlabel">
                      Ideal Value For This Field Is 0.9
                    </span>
                  </h5>
                </Col>
              </Row>
            </>
            <br />
            <div className="table-fixed">
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Braking
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Acceleration
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Left Cornering
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Right Cornering
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={0.1}
                    min={0}
                    max={2}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Fall
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip modlabel accordionDescripexcep">
                    Bump
                  </div>
                </Col>
              </Row>
            </div>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel14"}
        onChange={handleChange("panel14")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel14bh-content"
          id="panel14bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Video Configuration
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <div className="table-fixed">
            <Row className="accordionData">
              <Col md={6} className="accordionSlider">
                <PrettoSlider
                  aria-label="pretto slider"
                  defaultValue={0}
                  step={0.1}
                  min={0}
                  max={2}
                  valueLabelDisplay="on"
                />
              </Col>
              <Col md={6} className="accordionSlider">
                <PrettoSlider
                  aria-label="pretto slider"
                  defaultValue={0}
                  step={0.1}
                  min={0}
                  max={2}
                  valueLabelDisplay="on"
                />
              </Col>
            </Row>
            <Row className="accordionData">
              <Col>
                <div className="accordionDescrip modlabel videopreset">
                  VideoPreOffset(Seconds)
                </div>
              </Col>
              <Col>
                <div className="accordionDescrip modlabel videopreset">
                  VideoPostOffset(Seconds)
                </div>
              </Col>
            </Row>
          </div>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Camera Configuration
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <div className="table-fixed">
            <Row className="came camtoggle">
              <Col xs={12} md={6}>
                <div className="accordionDescrip modlabel accordianSlider">
                  <Editable
                    tag="p"
                    type="text"
                    maxLength="20"
                    onChange={onChange1}
                    value={text1}
                  />
                  <ToggleButton />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="accordionDescrip modlabel accordianSlider">
                  <Editable
                    tag="p"
                    type="text"
                    maxLength="20"
                    onChange={onChange2}
                    value={text2}
                  />
                  <ToggleButton />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="accordionDescrip modlabel accordianSlider">
                  <Editable
                    tag="p"
                    type="text"
                    maxLength="20"
                    onChange={onChange3}
                    value={text3}
                  />
                  <ToggleButton />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="accordionDescrip modlabel accordianSlider">
                  <Editable
                    tag="p"
                    type="text"
                    maxLength="20"
                    onChange={onChange4}
                    value={text4}
                  />
                  <ToggleButton />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="accordionDescrip modlabel accordianSlider">
                  <Editable
                    tag="p"
                    type="text"
                    maxLength="20"
                    onChange={onChange5}
                    value={text5}
                  />
                  <ToggleButton />
                </div>
              </Col>
            </Row>
          </div>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel13"}
        onChange={handleChange("panel13")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel13bh-content"
          id="panel13bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Speed Configuration
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <>
            <>
              <Row className="came camtoggle">
                <Col md={3} className="modlabel accordionDescrip">
                  <>Low </>
                </Col>
                <Col md={3}>
                  <ToggleButton />
                </Col>
                <Col md={3} className="modlabel accordionDescrip">
                  <>High </>
                </Col>
                <Col md={3}>
                  <ToggleButton />
                </Col>
              </Row>
            </>
            <>
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={1}
                    min={0}
                    max={10}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={1}
                    min={0}
                    max={10}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="modlabel accordionDescrip accordionDescripexcep">
                    Low Speed % (for less then 80KPH/50MPH)
                  </div>
                </Col>
                <Col>
                  <div className="modlabel accordionDescrip accordionDescripexcep">
                    High Speed % (for less then 80KPH/50MPH)
                  </div>
                </Col>
              </Row>
            </>
            <div className="table-fixed">
              <Row className="accordionData">
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={1}
                    min={0}
                    max={10}
                    valueLabelDisplay="on"
                  />
                </Col>
                <Col md={6} className="accordionSlider">
                  <PrettoSlider
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={1}
                    min={0}
                    max={10}
                    valueLabelDisplay="on"
                  />
                </Col>
              </Row>
              <Row className="accordionData">
                <Col>
                  <div className="modlabel accordionDescrip accordionDescripexcep">
                    Low Speed % (for less then 80KPH/50MPH)
                  </div>
                </Col>
                <Col>
                  <div className="modlabel accordionDescrip accordionDescripexcep">
                    High Speed % (for less then 80KPH/50MPH)
                  </div>
                </Col>
              </Row>
            </div>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        className="accord"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Audio Configuration
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <>
            <Row>
              <Col md={2}>
                <div className="modlabel accordionDescrip"> Record Audio</div>
              </Col>
              <Col md={1} className="accordianRoaming">
                <ToggleButton />
              </Col>
            </Row>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Parts Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <>
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="address"
                  >
                    Street Angel CT
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="address"
                    name="address"
                    id="address"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="sideCameras"
                  >
                    Side Cameras
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="sideCameras"
                    name="sideCameras"
                    id="sideCameras"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="reversingCamera"
                  >
                    Reversing Camera
                  </div>
                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="reversingCamera"
                    name="reversingCamera"
                    id="reversingCamera"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="hub"
                  >
                    Hub
                  </div>
                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="hub"
                    name="hub"
                    id="hub"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip" // @ts-expect-error
                    for="hdd"
                  >
                    HDD
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="hdd"
                    name="hdd"
                    id="hdd"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip" // @ts-expect-error
                    for="cabling"
                  >
                    Cabling
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="cabling"
                    name="cabling"
                    id="cabling"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="monitor"
                  >
                    Monitor
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="monitor"
                    name="monitor"
                    id="monitor"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="sideSensorKit"
                  >
                    Side Sensor Kit
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="sideSensorKit"
                    name="sideSensorKit"
                    id="sideSensorKit"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="suziKit"
                  >
                    Suzi Kit
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="suziKit"
                    name="suziKit"
                    id="suziKit"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="driver/PassengerCameras"
                  >
                    Driver/Passenger Cameras
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="driver/PassengerCameras"
                    name="driver/PassengerCameras"
                    id="driver/PassengerCameras"
                    placeholder=""
                  />
                </FormGroup>
              </Col>
            </Row>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        className="accord"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Axis Details Configuration
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <>
            <Row>
              <Col md={3}>
                <div className="modlabel accordionDescrip">
                  Detailed Vehicle Axis Data
                </div>
              </Col>
              <Col className="accordianRoaming">
                <ToggleButton />
              </Col>
            </Row>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Park Mode Setting
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <div className="table-fixed">
            <>
              <Row className="came">
                <Col md={2}>
                  <div className="modlabel accordionDescrip">Wakeup Mode</div>
                </Col>
                <Col md={0}>
                  <ToggleButton />
                </Col>
                <Col md={6}>
                  <div className="modlabel accordionDescrip">
                    Wake up Condition
                  </div>
                  <Select defaultValue={null} options={options1} />
                </Col>
              </Row>
            </>
          </div>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel12bh-content"
          id="panel12bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Sleep Delay
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <div className="table-fixed">
            <div className="tripsdetailtex">
              * This Setting is Supported Only In CT2030 Firmware's Device.
            </div>
            <br />
            <Row>
              <Col md={6}>
                <div className="modlabel accordionDescrip">
                  Wake up Condition
                </div>
                <Select defaultValue={null} options={options2} />
              </Col>
              <Col
                className="modlabel modinpulabel accordionleft mt-md-0 mt-2 ml-md-1"
                md={5}
              >
                <Row>
                  <Col md={10}>
                    <>Allow Use Of Vehicle's Battery After Ignition Off:</>
                  </Col>
                  <Col md={2}>
                    <ToggleButton />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Roaming Setting
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <>
            <Row>
              <Col md={2}>
                <div className="accordionDescrip modlabel ">Roaming</div>
              </Col>
              <Col md={0} className="accordianAggregate mt-md-0 mt-1 mb-1">
                <ToggleButton />
              </Col>
            </Row>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Aggregate Package Setting
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <>
            <Row>
              <Col md={2}>
                <div className="accordionDescrip modlabel modlabel">
                  Aggregate Package
                </div>
              </Col>
              <Col md={0} className="accordianRoaming">
                <ToggleButton />
              </Col>
            </Row>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Apn Setting
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <div className="table-fixed">
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div className="modlabel accordionDescrip">Name</div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="mcc"
                  >
                    MCC
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="mcc"
                    name="mcc"
                    id="mcc"
                    placeholder="MCC"
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="mnc"
                  >
                    MNC
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="mnc"
                    name="mnc"
                    id="mnc"
                    placeholder="MNC"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip" // @ts-expect-error
                    for="apn"
                  >
                    APN
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="apn"
                    name="apn"
                    id="apn"
                    placeholder="APN"
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div
                    className="modlabel accordionDescrip"
                    // @ts-expect-error
                    for="user"
                  >
                    User
                  </div>

                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    // @ts-expect-error
                    type="user"
                    name="user"
                    id="user"
                    placeholder="User"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div className="modlabel accordionDescrip">Password</div>
                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "pane11"}
        onChange={handleChange("pane11")}
        className="accord"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expndico" />}
          aria-controls="panel11bh-content"
          id="panel11bh-header"
          className="accordsummary"
        >
          <Typography className={(classes as $TSFixMe).heading}>
            Restore Factory Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accorddetl">
          <div className="table-fixed">
            <Row>
              <Col md={6}>
                <div className="modlabel accordionDescrip">Select Level</div>

                <Select defaultValue={null} options={options} />
              </Col>
            </Row>
          </div>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions className="accordact">
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>
      <Divider className="divi mt-1" />
      <div className="mb-4 mt-2 divAlign2">
        <button className="accordbut">Save</button>
      </div>
    </div>
  );
}
