import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { ProjectMgMtType } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import SetLogo from "./setLogo";
import Select from "react-select";

type Props = ReturnType<typeof mapStateToProps> & {
  data: ProjectMgMtType;
};
const View = (props: Props) => {
  useEffect(() => console.log("View Project index", props));
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <span className="tableModalBtn">
        {/* <Label className="tableModalBtnHeight"> */}
        <VisibilityOutlinedIcon onClick={toggle} className="dropico" />
        {/* </Label>
        {buttonLabel} */}
      </span>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">View Project</h5>
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Project Name</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Project Name"
                  value={props.data.name}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Project Address</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  value={props.data.organizationAddress}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="exampleAddress">
                  City
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="City"
                  value={props.data.city}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="exampleAddress">
                  State
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="State"
                  value={props.data.state}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="exampleAddress">
                  Country
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Country"
                  value={props.data.country}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="exampleAddress">
                  Postal Code
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Postal Code"
                  value={props.data.postalCode}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="services">
                  Services
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Services"
                  value={props.data.service}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="contactPersonName">
                  Contact Person Name
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Contact Person Name"
                  value={props.data.contactPersonName}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="exampleSelect">
                  Code
                </div>
                <Select
                  placeholder="Code"
                  className="borderShadow mt-2"
                  isDisabled
                  // value={props.data.contactPersonMobileCode}
                  value={{
                    label: props.data.contactPersonMobileCode,
                    value: props.data.contactPersonMobileCode,
                  }}
                  options={props.dropdowns.dialCode?.dropDown}
                />
              </FormGroup>
            </Col>
            <Col md={9}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: Element; className: string; for:... Remove this comment to see the full error message */}
                <div className="modalheader" for="contactPersonName">
                  <br />
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Contact Person Mobile"
                  value={props.data.contactPersonMobile}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="contactPersonName">
                  Office No
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Office No"
                  value={props.data.officeNumber}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="contactPersonName">
                  Fax No
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Fax No"
                  value={props.data.faxNumber}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="contactPersonName">
                  Website
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Website"
                  value={props.data.website}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="contactPersonName">
                  Email
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Email"
                  value={props.data.email}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                <div className="modalheader" for="Alternate Contact">
                  Alternate Email Id
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Alternate Email Id"
                  value={props.data.alternativeEmail}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <SetLogo />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="assi footer-width">
          <Button className="popbtn vie datewidth btnBox" onClick={toggle}>
            <>CLOSE</>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
});

export default connect(mapStateToProps)(View);
