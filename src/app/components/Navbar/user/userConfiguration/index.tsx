import { useState } from "react";
import { Form, Button, Row, Col, Card, CardBody, Container } from "reactstrap";
import {
  measurement,
  time,
  BpCheckedIcon,
  BpIcon,
} from "../../../../constants";
//@ts-expect-error
import { TimezoneSelect, clientTz } from "timezone-select-js";
import "react-dropdown/style.css";
import Select from "react-select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ToggleButton from "../../../Common/ToggleButton";
// import "cdbreact";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import CustomInput from "../../../Common/CustomInput/index";

export default function UserConfiguration() {
  const [selectedTimezone, setSelectedTimezone] = useState(clientTz());
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(true);

  return (
    <div className="header headerDiv bg-gradient-info pb-1 pt-0 pt-md-8">
      <Container className="mt--7" fluid>
        <Row className="mt-0">
          <Col>
            {/* <Card className={["card-stats mb-4 mb-xl-0", "cardcolor"]}> */}
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
              <div className="mb-4">
                <div className="tabpage mb-4">User Configuration</div>
                <Row className="mt-0">
                  <Col xl="12">
                    <Card className="card-stats md-4 mb-xl-0 devi">
                      <CardBody className="cardBodycolor">
                        <Form>
                          <Row>
                            <Col md={4}>
                              <div className="modalheader">
                                Select Time Zone
                              </div>
                              <TimezoneSelect
                                className="dropdownfont mt-2"
                                value={selectedTimezone}
                                onChange={setSelectedTimezone}
                                menuPortalTarget={document.body}
                                styles={{
                                  menuPortal: (base: $TSFixMe) => ({
                                    ...base,
                                    zIndex: 9999,
                                  }),
                                }}
                              />
                            </Col>
                            <Col md={4}>
                              <div className="modalheader">
                                Select Measurement
                              </div>
                              <Select
                                className="dropdownfont mt-2"
                                defaultValue="null"
                                // @ts-expect-error TS(2322): Type '{ value: string; label: string; }[]' is not ... Remove this comment to see the full error message
                                options={measurement}
                                onChange={() => {}}
                                // value={Measurement}
                                menuPortalTarget={document.body}
                                styles={{
                                  menuPortal: (base) => ({
                                    ...base,
                                    zIndex: 9999,
                                  }),
                                }}
                              />
                            </Col>
                            <Col md={4}>
                              <div className="modalheader">
                                Select Time Format
                              </div>
                              <Select
                                className="dropdownfont mt-2"
                                defaultValue="null"
                                // @ts-expect-error TS(2322): Type '{ value: string; label: string; }[]' is not ... Remove this comment to see the full error message
                                options={time}
                                onChange={() => {}}
                                // value={Time}
                                menuPortalTarget={document.body}
                                styles={{
                                  menuPortal: (base) => ({
                                    ...base,
                                    zIndex: 9999,
                                  }),
                                }}
                              />
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col md={3}>
                              <div className="modalheader mb-2">
                                Receive Alert Email
                              </div>
                              <ToggleButton
                                checked={selected1}
                                onClick={() => {
                                  setSelected1(!selected1);
                                }}
                              />
                            </Col>
                            <Col md={3}>
                              <div className="modalheader mb-2">
                                Receieve Maintenance Email
                              </div>
                              <ToggleButton
                                checked={selected2}
                                onClick={() => {
                                  setSelected2(!selected2);
                                }}
                              />
                            </Col>
                            <Col md={4}>
                              <div className="modalheader mt-3 mb-2">
                                Profile Picture
                              </div>
                              <CustomInput />
                            </Col>
                            <Col md={2}>
                              <br />
                              <Button block className="pagebtn mt-3">
                                Upload
                              </Button>
                            </Col>
                          </Row>
                          <br />
                          <br />
                          <>
                            <RadioGroup>
                              <div className="thecont userDiv1 inpucheck">
                                <div className="modalheader">Select Theme</div>
                                <FormControlLabel
                                  className="rad"
                                  value="Grey"
                                  control={
                                    <Radio
                                      sx={{
                                        "&:hover": {
                                          bgcolor: "transparent",
                                        },
                                      }}
                                      disableRipple
                                      // @ts-expect-error TS(2322): Type '"white"' is not assignable to type '"default... Remove this comment to see the full error message
                                      color="white"
                                      checkedIcon={<BpCheckedIcon />}
                                      icon={<BpIcon />}
                                    />
                                  }
                                  label="Grey Scale"
                                />
                                {/* <div className="thetex modlabel customcamera">
                                        Grey Scale
                                      </div> */}
                                <span className="foo grey" />

                                <FormControlLabel
                                  className="rad"
                                  value="BlackPinkPurple"
                                  control={
                                    <Radio
                                      sx={{
                                        "&:hover": {
                                          bgcolor: "transparent",
                                        },
                                      }}
                                      disableRipple
                                      // @ts-expect-error TS(2322): Type '"white"' is not assignable to type '"default... Remove this comment to see the full error message
                                      color="white"
                                      checkedIcon={<BpCheckedIcon />}
                                      icon={<BpIcon />}
                                    />
                                  }
                                  label="Black-Pink-Purple"
                                />
                                {/* <div className="thetex modlabel customcamera">
                                        Black-Pink-Purple
                                      </div> */}
                                <span className="foo pink" />

                                <FormControlLabel
                                  className="rad"
                                  value="BlueWhiteGrey"
                                  control={
                                    <Radio
                                      sx={{
                                        "&:hover": {
                                          bgcolor: "transparent",
                                        },
                                      }}
                                      disableRipple
                                      // @ts-expect-error TS(2322): Type '"white"' is not assignable to type '"default... Remove this comment to see the full error message
                                      color="white"
                                      checkedIcon={<BpCheckedIcon />}
                                      icon={<BpIcon />}
                                    />
                                  }
                                  label="Blue-White-Grey"
                                />

                                {/* <div className="thetex modlabel customcamera">
                                        Blue-White-Grey
                                      </div> */}
                                <span className="foo blue" />

                                <FormControlLabel
                                  className="rad"
                                  value="ClaretBlue"
                                  control={
                                    <Radio
                                      sx={{
                                        "&:hover": {
                                          bgcolor: "transparent",
                                        },
                                      }}
                                      disableRipple
                                      // @ts-expect-error TS(2322): Type '"white"' is not assignable to type '"default... Remove this comment to see the full error message
                                      color="white"
                                      checkedIcon={<BpCheckedIcon />}
                                      icon={<BpIcon />}
                                    />
                                  }
                                  label=" Claret-Blue"
                                />

                                {/* <div className="thetex inpucheck">
                                  Claret-Blue
                                </div> */}
                                <span className="foo claret" />
                              </div>
                            </RadioGroup>
                          </>
                          <br />
                          <br />
                          <Row>
                            <Col md={3}>
                              <Button block className="pagebtn">
                                Update
                              </Button>
                            </Col>
                            <Col md={3}>
                              <Button block className="pagebtn">
                                Cancel
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
        <CopyrightFooter />
      </Container>
    </div>
  );
}
