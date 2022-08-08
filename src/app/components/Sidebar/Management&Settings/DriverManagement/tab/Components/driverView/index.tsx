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
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Select from "react-select";
import { connect } from "react-redux";
import ASSETS from "../../../../../../../assets";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { Driver } from "../../../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: Driver;
  };
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
          <h5 className="modlabel modheadcont">View Driver</h5>
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12}>
              <FormGroup className="dropinput">
                <div className="modalheader">Select Project</div>
                <Select
                  className=" borderShadow mt-2"
                  isDisabled
                  value={{
                    label: props.data.project.name,
                    value: props.data.project.id,
                  }}
                  // options={props.projects.result}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Driver Name</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  placeholder="Driver Name"
                  value={props.data.name}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Country</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  placeholder="Country"
                  value={props.data.countryName}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <div className="modalheader">Mobile Number</div>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup className="dropinput">
                <Select
                  placeholder="Code"
                  className=" borderShadow mt-2"
                  isDisabled
                  value={{
                    label: props.data.mobileNoCode,
                    value: props.data.mobileNoCode,
                  }}
                  options={props.dropdowns.dialCode?.dropDown}
                />
              </FormGroup>
            </Col>
            <Col md={9}>
              <FormGroup className="dropinput">
                <Input
                  className="mt-2 disableField"
                  disabled
                  pattern="\d"
                  maxLength={15}
                  name="select"
                  placeholder="Emergency Contact"
                  value={props.data.mobileNo}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <div className="modalheader">Emergency Contact 2</div>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup className="dropinput">
                <Select
                  placeholder="Code"
                  className=" borderShadow mt-2"
                  isDisabled
                  value={{
                    label: props.data.emergencyContactCode,
                    value: props.data.emergencyContactCode,
                  }}
                  options={props.dropdowns.dialCode?.dropDown}
                />
              </FormGroup>
            </Col>
            <Col md={9}>
              <FormGroup className="dropinput">
                <Input
                  className="mt-2 disableField"
                  disabled
                  pattern="\d"
                  maxLength={15}
                  name="select"
                  placeholder="Emergency Contact"
                  value={props.data.emergencyContact}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup className="dropinput">
                <div className="modalheader">Email Id</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  placeholder="Email Id"
                  value={props.data.email}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <Label className="modlabel modinpulabel">Status</Label>
            </Col>
            <Col md={4}>
              <FormControlLabel
                value={true}
                checked={props.data.status}
                control={<Radio />}
                label="Active"
                disabled
              />
              <FormControlLabel
                value={false}
                checked={!props.data.status}
                control={<Radio />}
                label="Deactive"
                disabled
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
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(View);
