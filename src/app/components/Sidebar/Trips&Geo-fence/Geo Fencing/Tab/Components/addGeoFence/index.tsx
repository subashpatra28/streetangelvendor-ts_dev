import { Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import {
  Button,
  Col,
  Form,
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
  geoFenceValidationSchema,
  GeoFenceAddType,
} from "../../../../../../../constants";
import { getOrgList } from "../../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getProject } from "../../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { addGeoFencing } from "../../../../../../../redux/reducers/Trips&GeoFence/geoFencing/geoFencing.actions";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { AddGeoFencingType } from "../../../../../../../../global.types";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddGeoFence = (props: Props) => {
  console.log("GeoFenceProps", props);
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

  const addGeoFence = async (values: GeoFenceAddType) => {
    try {
      props.startLoading();
      await toast.promise(
        props.addGeoFencing({
          vehicleReg: values.vehicleReg,
          startTime: new Date().getTime(),
          endTime: null,
          deviceId: 1010101010,
          organization: values.organization,
          project: values.project,
          radius: "23",
          fenceNo: "1234",
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.GEO_FENCING_SUCCESS,
          error: {
            render(err: { data: AxiosError }) {
              // When the promise reject, data will contains the error
              return (
                err?.data?.response?.data?.message ??
                "Error while performing action. Please try again later."
              );
            },
          },
        }
      );
      toggle();
    } catch (error) {
      console.log("error add geofence", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <Button onClick={toggle} className="pagebtn">
        Add GeoFence
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modalTop">
        <Formik
          validationSchema={geoFenceValidationSchema}
          enableReinitialize={true}
          initialValues={{
            vehicleReg: {
              deviceId: 0,
              vehicleRegestrationNo: "",
            },
            organization: {
              id: 0,
              name: "",
            },
            project: {
              id: 0,
              name: "",
            },
            alarm: {
              deviceId: 0,
              vehicleRegestrationNo: "",
            },
            geoFenceName: "",
          }}
          onSubmit={addGeoFence}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <>
              <ModalHeader className="mod">
                <h5 className="modlabel modheadcont">Add GeoFence</h5>
                <button className="mult" onClick={toggle}>
                  <img src={ASSETS.MULTIPLY} alt="multiply" />
                </button>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">Organization</div>
                      <Select
                        className="dashboardMinDiv eventsBottom eventsFont borderShadow dropRadius"
                        placeholder="Organization"
                        options={props.dropdowns.orgList?.result || []}
                        // value={""}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) =>
                          setFieldValue("organization", {
                            name: option?.name,
                            id: option?.id,
                          })
                        }
                        onBlur={handleBlur("organization")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">Project</div>
                      <Select
                        className="dashboardMinDiv eventsBottom eventsFont  dropRadius"
                        placeholder="Project"
                        options={props.projects?.result ?? []}
                        // value={""}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) =>
                          setFieldValue("project", {
                            name: option?.name,
                            id: option?.id,
                          })
                        }
                        onBlur={handleBlur("project")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">Vehicle Reg#</div>
                      <Select
                        className="dashboardMinDiv eventsBottom eventsFont borderShadow dropRadius"
                        placeholder="Vehicle Reg#"
                        options={props.devices?.result ?? []}
                        // value={""}
                        getOptionLabel={(option) =>
                          option.vehicleRegestrationNo
                        }
                        getOptionValue={(option) => option.deviceId.toString()}
                        onChange={(option) =>
                          setFieldValue("vehicleReg", {
                            vehicleRegestrationNo:
                              option?.vehicleRegestrationNo,
                            deviceId: option?.deviceId,
                          })
                        }
                        onBlur={handleBlur("vehicleReg")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">Alarm</div>
                      <Select
                        className="dashboardMinDiv eventsBottom eventsFont  dropRadius"
                        placeholder="Alarm on entry Only"
                        options={props.devices?.result ?? []}
                        // value={""}
                        getOptionLabel={(option) =>
                          option.vehicleRegestrationNo
                        }
                        getOptionValue={(option) => option.deviceId.toString()}
                        onChange={(option) =>
                          setFieldValue("alarm", {
                            vehicleRegestrationNo:
                              option?.vehicleRegestrationNo,
                            deviceId: option?.deviceId,
                          })
                        }
                        onBlur={handleBlur("alarm")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form>
                      <Label>GeoFence Name</Label>
                      <Input
                        autocomplete="disable"
                        className=" dropRadius"
                        placeholder="Name of Geo-Fence"
                        onChange={handleChange("geoFenceName")}
                        onBlur={handleBlur("geoFenceName")}
                      />
                    </Form>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter className="footer-width">
                <div className="footwidth">
                  <Button
                    // @ts-expect-error
                    onClick={handleSubmit}
                    className="popbtn datewidth btnBox"
                  >
                    <>ADD</>
                  </Button>
                </div>
                <div className="divider" />
                <div className="footwidth">
                  <Button onClick={toggle} className="popbtn datewidth btnBox">
                    <>CLEAR</>
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  projects: state.projectData.projects,
  devices: state.devicesData.devices,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getProjectList: () => dispatch(getProject()),
  getDeviceList: () => dispatch(getDevices()),
  addGeoFencing: (data: AddGeoFencingType) => dispatch(addGeoFencing(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGeoFence);
