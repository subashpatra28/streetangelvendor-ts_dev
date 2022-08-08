import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import ASSETS from "../../../../../../../assets";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { Device } from "../../../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: Device;
  };
const View = (props: Props) => {
  useEffect(() => console.log(props.data));
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
          <h5 className="modlabel modheadcont">View Device</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <ModalBody>
          <div className="rit">
            <div className="deviceclrhead ml-2">Select Organization</div>
          </div>
          <br />
          {/* <Row>
            <Col md={12}>
              <FormGroup className="dropinput">
                <div className="modalheader">Select Organization</div>
                <Select
                  className=" borderShadow mt-2"
                  isDisabled
                  options={props.driversDropdownList}
                  value={{
                    label: props.data.organizationManagement.name,
                    value: props.data.organizationManagement.name,
                  }}
                />
              </FormGroup>
            </Col>
          </Row> */}
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Select Project</div>
                <Select
                  className=" borderShadow mt-2"
                  isDisabled
                  // options={props.driversDropdownList}
                  value={{
                    label: props.data.project.name,
                    value: props.data.project.name,
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Select Driver</div>
                <Select
                  className=" borderShadow mt-2"
                  isDisabled
                  // options={props.driversDropdownList}
                  value={{
                    label: props.data.driverManagement.name,
                    value: props.data.driverManagement.name,
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="rit">
            <div className="deviceclrhead ml-2">Add Device Detail</div>
          </div>
          <br />
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Vehicle Reg.#</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  value={props.data.vehicleRegestrationNo}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Device ID.</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  pattern="\d"
                  maxLength={15}
                  name="select"
                  value={props.data.deviceId}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Insurer Name</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  value={props.data.insurerName}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Policy Number</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  pattern="\d"
                  maxLength={15}
                  name="select"
                  value={props.data.policyNumber}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Home Depot</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  value={props.data.homeDepot}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Fleet Number</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  pattern="\d"
                  maxLength={15}
                  name="select"
                  value={props.data.fleetNumber}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Description1</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  value={props.data.description1}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="dropinput">
                <div className="modalheader">Description2</div>
                <Input
                  className="mt-2 disableField"
                  disabled
                  type="text"
                  name="select"
                  value={props.data.description2}
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
  drivers: state.driverData.drivers,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
