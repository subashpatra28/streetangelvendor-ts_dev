import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
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
import { AddDeviceType } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  DeviceMgmtAddType,
  deviceValidationAddSchema,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { AddDeviceCode } from "../../../../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import {
  getDriver,
  getDriverForProj,
} from "../../../../../../../redux/reducers/Management&Settings/driverManagement/driverManagement.actions";
import { getProject } from "../../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddRole = (props: Props) => {
  console.log("AddRole props", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.drivers.result) {
      await props.getDriverList();
    }
    if (!props.projects.result) {
      await props.getProjectList();
    }
    props.endLoading();
  };

  const handleAddDevice = async (values: DeviceMgmtAddType) => {
    try {
      props.startLoading();
      await toast.promise(
        props.AddDeviceCode({
          camera1Name: "camera1",
          camera2Name: "camera2",
          camera3Name: "camera3",
          camera4Name: "camera4",
          camera5Name: "camera5",
          description1: values.description1 ?? "",
          description2: values.description2 ?? "",
          fleetNumber: values.fleetNumber ?? "",
          homeDepot: values.homeDepot ?? "",
          insurerName: values.insurerName ?? "",
          policyNumber: values.policyNumber ?? "",
          vehicleRegestrationNo: values.vehicleRegestrationNo,
          deviceId: parseInt(values.deviceId),
          driverManagementId: values.driverManagementId.id,
          organizationManagementId: values.organizationManagementId,
          projectId: values.projectId.id,
          status: values.status,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.DEVICE_SUCCESS,
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
      console.log("error in dashboard api", error);
    } finally {
      await props.endLoading();
    }
  };

  const handleDriverListForProject = async (projectId: number) => {
    try {
      props.startLoading();
      await props.getDriverForProj(projectId);
    } catch (error) {
      console.log("handleDriverListForProject error ", error);
    } finally {
      props.endLoading();
    }
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle} className="pagebtn">
        <>Add Device</>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Add Device</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={deviceValidationAddSchema}
          enableReinitialize={true}
          initialValues={{
            vehicleRegestrationNo: "",
            deviceId: "",
            projectId: { id: 0, name: "" },
            driverManagementId: { id: 0, name: "" },
            organizationManagementId: 0,
            status: true,
            description1: "",
            description2: "",
            homeDepot: "",
            fleetNumber: "",
            insurerName: "",
            policyNumber: "",
          }}
          onSubmit={handleAddDevice}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            setFieldValue,
            values,
            isValid,
            errors,
          }) => (
            <>
              <ModalBody>
                <div className="rit">
                  <div className="deviceclrhead ml-2">Select Organization </div>
                </div>
                <br />
                {/* <Row>
                  <Col md={12}>
                    <FormGroup>
                      <div className="modalheader mb-2">
                        Select Organization <span className="required"> *</span>
                      </div>
                      <Select
                        placeholder="Select organization"
                        className={`
                          ${
                            touched.organizationManagementId &&
                            errors.organizationManagementId
                              ? "requireSelect"
                              : ""
                          } +     " borderShadow" +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt"
                        

                        `}
                        // name="organization"
                        options={props.orgList.result}
                        // value={values.organizationManagementId}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) =>
                          setFieldValue("organizationManagementId", option)
                        }
                        onBlur={handleBlur("organizationManagementId")}
                      />
                      {touched.organizationManagementId &&
                      errors.organizationManagementId ? (
                        <div className="validate">Required</div>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Col>
                </Row> */}
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup>
                      <div className="modalheader mb-2">
                        Select Project<span className="required"> *</span>
                      </div>
                      <Select
                        placeholder="Select Project"
                        className={`
                           ${
                             touched.projectId && errors.projectId
                               ? "requireSelect"
                               : ""
                           } +     " borderShadow" +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt" 

                        `}
                        options={props.projects.result ?? []}
                        // value={values.projectId}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) => {
                          setFieldValue("projectId", option);
                          setFieldValue(
                            "organizationManagementId",
                            option?.organizationId ?? 0
                          );
                          handleDriverListForProject(option?.id ?? 0);
                        }}
                        onBlur={handleBlur("projectId")}
                      />
                      {touched.projectId && errors.projectId ? (
                        <div className="validate">Required</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <div className="modalheader mb-2">
                        Select Driver<span className="required"> *</span>
                      </div>
                      <Select
                        isLoading={props.isLoading}
                        placeholder="Select Driver"
                        className={`"borderShadow " +   ${
                          touched.driverManagementId &&
                          errors.driverManagementId
                            ? "requireSelect"
                            : ""
                        }
`}
                        options={props.drivers?.result ?? []}
                        // value={values.driverManagementId}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) =>
                          setFieldValue("driverManagementId", option)
                        }
                        onBlur={handleBlur("driverManagementId")}
                      />
                      {touched.driverManagementId &&
                      errors.driverManagementId ? (
                        <div className="validate">Required</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <div className="rit">
                  <div className="deviceclrhead ml-2">Add Device Detail</div>
                </div>
                <br />
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Vehicle Reg.#<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.vehicleRegestrationNo &&
                            touched.vehicleRegestrationNo
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          type="text"
                          placeholder="Vehicle Regestration No"
                          name="vehicleRegestrationNo"
                          value={values.vehicleRegestrationNo}
                          onChange={handleChange("vehicleRegestrationNo")}
                          onBlur={handleBlur("vehicleRegestrationNo")}
                        />
                        <ErrorMessage
                          name="vehicleRegestrationNo"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Device ID.<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.deviceId && touched.deviceId
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          type="text"
                          placeholder="Device Id"
                          name="deviceId"
                          value={values.deviceId}
                          onChange={handleChange("deviceId")}
                          onBlur={handleBlur("deviceId")}
                        />
                        <ErrorMessage
                          name="deviceId"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Insurer Name</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        placeholder="Insurer Name"
                        value={values.insurerName}
                        onChange={handleChange("insurerName")}
                        onBlur={handleBlur("insurerName")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Policy Number</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        placeholder="Policy Number"
                        value={values.policyNumber}
                        onChange={handleChange("policyNumber")}
                        onBlur={handleBlur("policyNumber")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Home Depot</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        placeholder="Home Depot"
                        value={values.homeDepot}
                        onChange={handleChange("homeDepot")}
                        onBlur={handleBlur("homeDepot")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Fleet Number</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        value={values.fleetNumber}
                        placeholder="Fleet Number"
                        onChange={handleChange("fleetNumber")}
                        onBlur={handleChange("fleetNumber")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Description1</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        value={values.description1}
                        placeholder="Description 1"
                        onChange={handleChange("description1")}
                        onBlur={handleChange("description1")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Description2</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        value={values.description2}
                        placeholder="Description 2"
                        onChange={handleChange("description2")}
                        onBlur={handleChange("description2")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <div className="modalheader">Status</div>
                  </Col>
                  <Col md={6}>
                    <RadioGroup
                      onChange={(e) =>
                        setFieldValue("status", e.target.checked)
                      }
                      className="radioStatus"
                      onBlur={handleBlur("status")}
                      aria-label="status"
                      defaultValue={values.status}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value={true}
                        checked={values.status}
                        control={<Radio />}
                        label="Active"
                      />
                      <FormControlLabel
                        value={false}
                        checked={!values.status}
                        control={<Radio />}
                        label="Deactive"
                      />
                    </RadioGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter className="footer-width">
                <div className="footwidth">
                  <Button
                    // disabled={!isValid}
                    // @ts-expect-error
                    onClick={handleSubmit}
                    // type="submit"
                    className="popbtn datewidth btnBox"
                  >
                    <>ADD</>
                  </Button>
                </div>
                <div className="divider" />
                <div className="footwidth">
                  <Button onClick={toggle} className="popbtn datewidth btnBox">
                    <>CANCEL</>
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
  isLoading: state.generalSlice.isLoading,
  dropdowns: state.dropdownList.dropdowns,
  drivers: state.driverData.drivers_proj,
  projects: state.projectData.projects,
  orgList: state.dropdownList.dropdowns.orgList,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getProjectList: () => dispatch(getProject()),
  getDriverList: () => dispatch(getDriver()),
  AddDeviceCode: (data: AddDeviceType) => dispatch(AddDeviceCode(data)),
  getDriverForProj: (projectId: number) =>
    dispatch(getDriverForProj(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRole);
