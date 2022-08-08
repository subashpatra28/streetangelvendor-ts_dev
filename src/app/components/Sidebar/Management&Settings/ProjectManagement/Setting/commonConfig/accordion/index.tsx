import { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import AccordionActions from "@material-ui/core/AccordionActions";
import ToggleButton from "../../../../../../Common/ToggleButton";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Select, { OptionsOrGroups } from "react-select";
import { Col, Row, FormGroup, Input } from "reactstrap";
import { BootstrapInput, PrettoSlider } from "../../../../../../../constants";

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

export default function AddAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("");
  type OptionType = {
    value: string;
    label: string;
  };
  const handleChange =
    (panel: string) => (event: $TSFixMe, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };
  const [age] = useState("");
  const options: OptionsOrGroups<OptionType | null, any> = [
    { value: "1", label: "Reset Data" },
    { value: "2", label: "Keep Data" },
  ];

  const options1: OptionsOrGroups<OptionType | null, any> = [
    { value: "10", label: "Wakeup on external power" },
    { value: "20", label: "Wakeup on accelerometer" },
    { value: "30", label: "Wakeup ignition" },
  ];
  const options2: OptionsOrGroups<OptionType | null, any> = [
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
                <Col md={3}>
                  <div className="accordionBold">LOW AXIS VALUE(G)*</div>
                </Col>
                <Col md={3} className="accordianAxis">
                  <div className="accordionDescrip">
                    Ideal Value For This Field Is 0.4
                  </div>
                </Col>
              </Row>
            </>
            <div className="table-fixed">
              <Row>
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
              <Row>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Braking
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Acceleration
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row>
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
              <Row>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Left Cornering
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Right Cornering
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row>
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
              <Row>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Fall
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Bump
                  </div>
                </Col>
              </Row>
            </div>
            <br />
            <div className="table-fixed">
              <Row>
                <Col md={3}>
                  <div className="accordionBold">HIGH AXIS VALUE(G)*</div>
                </Col>
                <Col md={3} className="accordianAxis">
                  <div className="accordionDescrip">
                    Ideal Value For This Field Is 0.9
                  </div>
                </Col>
              </Row>
            </div>
            <br />
            <div className="table-fixed">
              <Row>
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
              <Row>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Braking
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Acceleration
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row>
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
              <Row>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Left Cornering
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Right Cornering
                  </div>
                </Col>
              </Row>
            </div>
            <div className="table-fixed">
              <Row>
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
              <Row>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
                    Fall
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip accordionDescripexcep">
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
                <div className="accordionDescrip videopreset">
                  VideoPreOffset(Seconds)
                </div>
              </Col>
              <Col>
                <div className="accordionDescrip videopreset">
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
          <>
            <Row className="came camtoggle">
              <Col md={2}>
                <Row className="accordionDescrip">Second Camera Channel</Row>
              </Col>
              <Col md={2}>
                <ToggleButton />
              </Col>
              <Col md={2}>
                <Row className="accordionDescrip">Third Camera Channel</Row>
              </Col>
              <Col md={2}>
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
            <Row className="came camtoggle">
              <Col md={2}>
                <Row className="accordionDescrip">Low</Row>
              </Col>
              <Col md={2}>
                <ToggleButton />
              </Col>
              <Col md={2} className="modalheader">
                <div className="accordionDescrip">High </div>
              </Col>
              <Col md={2}>
                <ToggleButton />
              </Col>
            </Row>
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
                  <div className="tripsdetailtex videopreset">
                    Low Speed % (for less then 80KPH/50MPH)
                  </div>
                </Col>
                <Col>
                  <div className="tripsdetailtex videopreset">
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
                  <div className="accordionDescrip videopreset">
                    Low Speed % (for less then 80KPH/50MPH)
                  </div>
                </Col>
                <Col>
                  <div className="accordionDescrip videopreset">
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
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="accord"
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
        <AccordionDetails className="accordianDetails">
          <>
            <Row md={6}>
              <Col>
                <div className="modlabel accordionDescrip"> Audio</div>
              </Col>
              <Col xs={1} className="accordianRoaming mt-md-0 mt-1">
                <ToggleButton />
              </Col>
            </Row>
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions>
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="accord"
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
        <AccordionDetails className="accordianDetails">
          <Typography>
            <Row>
              <Col md={3}>
                <div className="modlabel accordionDescrip">
                  Detailed Vehicle Axis Data
                </div>
              </Col>
              <Col xs={1} className="accordianRoaming mt-md-0 mt-1">
                <ToggleButton />
              </Col>
            </Row>
          </Typography>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions>
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
        <AccordionDetails className="accordianDetails">
          <div className="table-fixed">
            <>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col sm={6}>
                      <div className="modlabel accordionDescrip mt-md-3">
                        Wakeup Mode
                      </div>
                    </Col>
                    <Col sm={6}>
                      <ToggleButton />
                    </Col>
                  </Row>
                </Col>
                <Col md={5}>
                  <Row>
                    <Col sm={12} className="mt-md-0 mt-5 ml-md-5">
                      <div className="modlabel accordionDescrip">
                        Wake up Condition
                      </div>
                      <Select defaultValue={null} options={options1} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          </div>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions>
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
        <AccordionDetails className="accordianDetails">
          <>
            <div className="modinpulabel">
              * This Setting is Supported Only In CT2030 Firmware's Device.
            </div>
            <br />
            <Row>
              <Col md={6}>
                <div className="modlabel accordionDescrip mb-1">
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
          </>
        </AccordionDetails>
        <Divider className="divi" />
        <AccordionActions>
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
        <AccordionDetails className="accordianDetails">
          <>
            <Row>
              <Col xs={4} className="modinpulabel modlabel">
                <>Roaming</>
              </Col>
              <Col xs={1} className="accordianRoaming mt-md-0 mt-1">
                <ToggleButton />
              </Col>
            </Row>
          </>
        </AccordionDetails>

        <Divider className="divi" />
        <AccordionActions>
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
        <AccordionDetails className="accordianDetails">
          <>
            <Row className="accordionData">
              <Col md={2}>
                <div className="modinpulabel modlabel">Aggregate Package</div>
              </Col>
              <Col md={0} className="accordianAggregate mt-md-0 mt-1">
                <ToggleButton />
              </Col>
            </Row>
          </>
        </AccordionDetails>

        <Divider className="divi" />
        <AccordionActions>
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
        <AccordionDetails className="accordianDetails">
          <div className="table-fixed">
            <Row>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  <div className="modlabel accordionDescrip">Name</div>
                  <Input
                    autocomplete="disable"
                    className="accordinp"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="accordtextinput">
                  {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                  <div className="modlabel accordionDescrip" for="mcc">
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
                  {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                  <div className="modlabel accordionDescrip" for="mnc">
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
                  {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                  <div className="modlabel accordionDescrip" for="apn">
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
                  {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                  <div className="modlabel accordionDescrip" for="user">
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
        <AccordionActions>
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
        <AccordionDetails className="accordianDetails">
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
        <AccordionActions>
          <div className="divAlign2">
            <button className="accordbut">Submit</button>
            <button className="accordbut">Cancel</button>
          </div>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
