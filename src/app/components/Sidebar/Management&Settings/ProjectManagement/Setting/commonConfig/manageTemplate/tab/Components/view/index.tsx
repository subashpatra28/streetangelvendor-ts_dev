import { useState, useEffect } from "react";
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
  InputGroup,
  CustomInput,
  InputGroupAddon,
} from "reactstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { Formik } from "formik";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Select from "react-select";
import * as Yup from "yup";
import ASSETS from "../../../../../../../../../../assets";
import IMEINumber from "../imeiNumber";
import { getOrgList } from "../../../../../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../../../../redux/reducers/general/general.actions";
import CustomInput1 from "../../../../../../../../../Common/CustomInput";
import { AppDispatch } from "../../../../../../../../../../redux/store/store";
import { RootState } from "../../../../../../../../../../redux/reducers/rootReducer";
import { CommonConfiguration } from "../../../../../../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: CommonConfiguration;
  };
const View = (props: Props) => {
  console.log("props", props);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <span className="tableModalBtn">
        <VisibilityOutlinedIcon onClick={toggle} className="dropico" />
      </span>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <>
          <ModalHeader className="mod">
            <h5 className="modlabel modheadcont">Assign Devices</h5>
            <button className="mult" onClick={toggle}>
              <img src={ASSETS.MULTIPLY} alt="multiply" />
            </button>
          </ModalHeader>
          <ModalBody>
            <div className="modalheader">File Upload</div>
            <Row>
              <Col xs={12} md={8} className="mt-2">
                <CustomInput1 />
              </Col>
              <Col md={4}>
                <Button className="range modalbtn dashboardMinDiv popimptbtn ">
                  Upload
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <IMEINumber />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6} className="dropinput dropHid">
                <div className="modalheader">Organization To</div>
                <Select
                  isDisabled
                  className="dashboardMinDiv eventsBottom eventsFont hoverDrop mt-2"
                  placeholder="Organization"
                  value={{
                    label: props.data.organizationTo.name,
                    value: props.data.organizationTo.id,
                  }}
                />
              </Col>
              <Col md={6} className="dropinput dropHid">
                <div className="modalheader">Organization From</div>
                <Select
                  isDisabled
                  className="dashboardMinDiv eventsBottom eventsFont hoverDrop mt-2"
                  placeholder="Organization"
                  value={{
                    label: props.data.organizationFrom.name,
                    value: props.data.organizationFrom.id,
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6} className="dropinput">
                <FormGroup>
                  <Label className="modlabel modinpulabel">
                    Organization Name
                  </Label>
                  <Select
                    isDisabled
                    className="dashboardMinDiv eventsBottom eventsFont hoverDrop"
                    placeholder="Organization"
                    value={{
                      label: props.data.organization.name,
                      value: props.data.organization.id,
                    }}
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
            <Button className="popbtn vie btnBox" onClick={toggle}>
              <>CLOSE</>
            </Button>
          </ModalFooter>
        </>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
