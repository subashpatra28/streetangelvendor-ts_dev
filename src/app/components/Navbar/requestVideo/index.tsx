import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
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
import ASSETS from "../../../assets/index";
import { eventsVideosValidationSchema } from "../../../constants";
import { getOrgList } from "../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getProject } from "../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../redux/store/store";

const { RangePicker } = DatePicker;

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const RequestVideo = (props: Props) => {
  console.log("requestVideoProps", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.orgList.result) {
      await props.getOrgList();
    }
    if (!props.devices.result) {
      await props.getDeviceList();
    }
    if (!props.projects.result) {
      await props.getProjectList();
    }
    props.endLoading();
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="modalheader notify">
      <button onClick={toggle} className="navhov">
        <Row>
          <Col md={3} className="requestIcn">
            <VideocamOutlinedIcon className="headicon" />
          </Col>
          <Col md={9} className="requestIcn">
            <Row> Request Video</Row>
          </Col>
        </Row>
      </button>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Video Request</h5>
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={eventsVideosValidationSchema}
          enableReinitialize={true}
          initialValues={{
            vehicleReg: {},
            organization: {},
            project: {},
            dateTimeYear: "",
          }}
          onSubmit={() => {}}
        >
          {({ handleBlur, setFieldValue }) => (
            <>
              <ModalBody>
                <Row>
                  <Col md={12}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Organization</div>
                      <Select
                        className=" eventsFont borderShadow mt-2"
                        placeholder="Organization"
                        options={props.dropdowns.orgList?.result || []}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        // value={""}
                        onChange={(option) =>
                          setFieldValue("organization", option)
                        }
                        onBlur={handleBlur("organization")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Project</div>
                      <Select
                        className=" eventsFont borderShadow mt-2"
                        placeholder="Project"
                        options={props.projects?.result ?? []}
                        // value={""}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        // value={""}
                        onChange={(option) => setFieldValue("project", option)}
                        onBlur={handleBlur("project")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Vehicle Reg#</div>
                      <Select
                        className=" eventsFont borderShadow mt-2"
                        placeholder="Vehicle Reg#"
                        options={props.devices?.result ?? []}
                        //  // value={""}
                        getOptionLabel={(option) =>
                          option.vehicleRegestrationNo
                        }
                        getOptionValue={(option) => option.id.toString()}
                        // value={""}
                        onChange={(option) =>
                          setFieldValue("Vehicle Reg", option)
                        }
                        onBlur={handleBlur("Vehicle Reg")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <div className="modalheader">Channel</div>
                <FormGroup row className="inpucheck mt-2">
                  <Col md={4}>
                    <FormGroup check>
                      {/* @ts-expect-error TS(2322): Type '{ children: Element[]; check: true; }' is no... Remove this comment to see the full error message */}
                      <div check>
                        <Input
                          autocomplete="disable"
                          type="checkbox"
                          id="checkbox2"
                        />
                        <div className="customcamera">Main camera</div>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup check>
                      {/* @ts-expect-error TS(2322): Type '{ children: Element[]; check: true; }' is no... Remove this comment to see the full error message */}
                      <div check>
                        <Input
                          autocomplete="disable"
                          type="checkbox"
                          id="checkbox2"
                        />
                        <div className="customcamera">Second camera</div>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup check>
                      {/* @ts-expect-error TS(2322): Type '{ children: Element[]; check: true; }' is no... Remove this comment to see the full error message */}
                      <div check>
                        <Input
                          autocomplete="disable"
                          type="checkbox"
                          id="checkbox2"
                        />
                        <div className="customcamera">Third camera</div>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup check>
                      {/* @ts-expect-error TS(2322): Type '{ children: Element[]; check: true; }' is no... Remove this comment to see the full error message */}
                      <div check>
                        <Input
                          autocomplete="disable"
                          type="checkbox"
                          id="checkbox2"
                        />
                        <div className="customcamera">Fourth camera</div>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup check>
                      {/* @ts-expect-error TS(2322): Type '{ children: Element[]; check: true; }' is no... Remove this comment to see the full error message */}
                      <div check>
                        <Input
                          autocomplete="disable"
                          type="checkbox"
                          id="checkbox2"
                        />
                        <div className="customcamera">Fifth camera</div>
                      </div>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <div className="modalheader">Request Date</div>
                <Row className="range rangePosition mt-2">
                  <RangePicker
                    showTime={{ format: "HH:mm:ss" }}
                    format="DD-MM-YYYY HH:mm:ss"
                  />
                </Row>
              </ModalBody>
              <ModalFooter className="footer-width">
                <div className="footwidth">
                  <Button className="popbtn datewidth btnBox" onClick={toggle}>
                    <>CLOSE</>
                  </Button>
                </div>
                <div className="divider" />
                <div className="footwidth">
                  <Button className="popbtn datewidth btnBox" onClick={toggle}>
                    <>REQUEST VIDEO</>
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  projects: state.projectData.projects,
  devices: state.devicesData.devices,
  isLoading: state.generalSlice.isLoading,
  highEvents: state.dataStore.highEvents,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getProjectList: () => dispatch(getProject()),
  getDeviceList: () => dispatch(getDevices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestVideo);
