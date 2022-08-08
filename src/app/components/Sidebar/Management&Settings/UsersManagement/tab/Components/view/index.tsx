import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  CustomInput,
} from "reactstrap";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { connect } from "react-redux";
import Select from "react-select";
import ASSETS from "../../../../../../../assets";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { CTAdminUser } from "../../../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { data: CTAdminUser };

const View = (props: Props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <span onClick={toggle} className="tableModalBtn">
        {/* <Label className="tableModalBtnHeight"> */}
        <VisibilityOutlinedIcon onClick={toggle} className="dropico" />
        {/* </Label>
        {buttonLabel} */}
      </span>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">View User</h5>
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12}>
              <FormGroup className="dropinput">
                <div className="modalheader">Username</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  value={props.data.userName}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Email Id</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="email"
                  value={props.data.email}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Password</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="password"
                  value={props.data.password}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup className="dropinput">
                <div className="modalheader">Mobile Number</div>
                <Select
                  placeholder={"Country Code"}
                  className=" borderShadow mt-2"
                  isDisabled
                  value={{
                    label: props.data.mobileCode,
                    value: props.data.mobileCode,
                  }}
                  options={props.dropdowns.dialCode?.dropDown}
                />
              </FormGroup>
            </Col>
            <Col md={9}>
              <FormGroup className="dropinput">
                <div className="modalheader">
                  <br />
                </div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  placeholder="Digits Only"
                  value={props.data.mobile}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <div className="modalheader">Select User Role</div>
            <Col md={12}>
              <FormGroup className="dropinput">
                <div className="modalheader"></div>
                <Select
                  className=" borderShadow mt-2"
                  isDisabled
                  value={props.data.role}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id.toString()}
                  options={props.manageRoles.result}
                />
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <FormGroup check>
                <Label check className="inpucheck">
                  <Input
                    disabled
                    type="checkbox"
                    checked={props.data.allowAlertEmail}
                  />
                  Do you Allow to Alert Email
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <FormGroup check>
                <Label check className="inpucheck">
                  <Input
                    disabled
                    type="checkbox"
                    checked={props.data.allowMaintenanceEmail}
                  />
                  Do you Allow to Maintenance Email
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <FormGroup check>
                <Label check className="inpucheck">
                  <Input
                    disabled
                    type="checkbox"
                    checked={props.data.allowWelcomeEmail}
                  />
                  Do you want to send welcome email
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={2}>
              <div className="modalheader">Status</div>
            </Col>
            <Col md={2}>
              <CustomInput
                disabled
                // className="modlabel modinpulabel"
                type="radio"
                id="exampleCustomRadio"
                name="customRadio"
                label="Active"
                checked={props.data.status}
              />
            </Col>
            <Col md={2}>
              <CustomInput
                disabled
                // className="modlabel modinpulabel"
                type="radio"
                id="exampleCustomRadio2"
                name="customRadio"
                label="Deactive"
                checked={!props.data.status}
              />
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
  manageRoles: state.manageRolesData.manageRoles,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(View);
