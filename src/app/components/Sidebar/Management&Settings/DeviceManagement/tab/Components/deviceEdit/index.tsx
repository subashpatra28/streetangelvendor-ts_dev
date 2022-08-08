import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
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
import { AddDeviceType, Device } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  DeviceEditSchema,
  deviceValidationEditSchema,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { EditDeviceCode } from "../../../../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getDriverForProj } from "../../../../../../../redux/reducers/Management&Settings/driverManagement/driverManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: Device;
  };

const Edit = (props: Props) => {
  console.log("deviceEditProps", props);
  const handleUpdateDevice = async (values: DeviceEditSchema) => {
    try {
      props.startLoading();
      console.log("values,", values);
      await toast.promise(
        props.EditDeviceCode({
          id: props.data.id,
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
          deviceId: values.deviceId,
          driverManagementId: values.driverManagementId.id,
          organizationManagementId: values.organizationManagementId,
          projectId: values.projectId.id,
          status: values.status,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.EDIT_DEVICE_SUCCESS,
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
      console.log("error in DeviceManagement Edit api", error);
    } finally {
      await props.endLoading();
    }
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    if (modal) {
      handleDriverListForProject(props.data.organizationManagement.id);
    }
  }, [modal]);

  const handleDriverListForProject = async (projectId: number) => {
    try {
      props.startLoading();
      await toast.promise(props.getDriverForProj(projectId) as any, {
        error: {
          render(err: { data: AxiosError }) {
            // When the promise reject, data will contains the error
            return (
              err?.data?.response?.data?.message ??
              "Error while performing action. Please try again later."
            );
          },
        },
      });
    } catch (error) {
      console.log("handleDriverListForProject error ", error);
    } finally {
      props.endLoading();
    }
  };
  return (
    <>
      {/* <span  className="tableModalBtn">
        <Label className="tableModalBtnHeight"> */}
      <EditOutlinedIcon onClick={toggle} className="dropico" />
      {/* </Label>
        {buttonLabel}
      </span> */}
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Edit Device</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={deviceValidationEditSchema}
          enableReinitialize={true}
          initialValues={{
            projectId: props.data.project,
            driverManagementId: props.data.driverManagement,
            organizationManagementId: props.data.organizationManagement.id,
            vehicleRegestrationNo: props.data.vehicleRegestrationNo ?? "",
            deviceId: props.data.deviceId,
            camera1Name: props.data.camera1Name ?? "",
            camera2Name: props.data.camera2Name ?? "",
            camera3Name: props.data.camera3Name ?? "",
            camera4Name: props.data.camera4Name ?? "",
            camera5Name: props.data.camera5Name ?? "",
            insurerName: props.data.insurerName ?? "",
            policyNumber: props.data.policyNumber ?? "",
            homeDepot: props.data.homeDepot ?? "",
            fleetNumber: props.data.fleetNumber ?? "",
            description1: props.data.description1 ?? "",
            description2: props.data.description2 ?? "",
            status: props.data.status,
          }}
          onSubmit={handleUpdateDevice}
        >
          {({
            handleChange,
            handleBlur,
            setFieldValue,
            handleSubmit,
            touched,
            values,
            isValid,
            errors,
          }) => (
            <>
              <ModalBody>
                <div className="rit">
                  <div className="deviceclrhead ml-2">Select Organization</div>
                </div>
                <br />
                {/* <Row>
                  <Col md={12}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">
                        Select Organization<span className="required"> *</span>
                      </div>
                      <Select
                        placeholder="Select organization"
                        className={`
                          " borderShadow " +   ${
                            touched.organizationManagementId &&
                            errors.organizationManagementId
                          }

                        `}
                        options={props.dropdowns.orgList?.result}
                        value={values.organizationManagementId}
                        onChange={(option) =>
                          setFieldValue("organizationManagementId", option)
                        }
                        onBlur={handleBlur("organizationManagementId")}
                      />
                      {touched.organizationManagementId &&
                        errors.organizationManagementId && (
                          <div className="validate">
                            {errors.organizationManagementId === "requireSelect"
                              ? "Required"
                              : errors.organizationManagementId}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                </Row> */}
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">
                        Select Project<span className="required"> *</span>
                      </div>
                      <Select
                        className={`
                          " borderShadow " +   ${
                            touched.organizationManagementId &&
                            errors.organizationManagementId
                          }

                        `}
                        placeholder={"Select Project"}
                        options={props.projects?.result ?? []}
                        value={values.projectId}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) => {
                          setFieldValue("projectId", option);
                          handleDriverListForProject(option?.id ?? 0);
                        }}
                        onBlur={handleBlur("organizationManagementId")}
                      />
                      {touched.organizationManagementId &&
                        errors.organizationManagementId && (
                          <div className="validate">
                            {errors.organizationManagementId === "requireSelect"
                              ? "Required"
                              : errors.organizationManagementId}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">
                        Select Driver<span className="required"> *</span>
                      </div>
                      <Select
                        className={`"borderShadow " +   ${
                          touched.driverManagementId &&
                          errors.driverManagementId
                        }`}
                        options={props.drivers?.result ?? []}
                        value={values.driverManagementId}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        // @ts-expect-error
                        onChange={(option: Driver) => {
                          setFieldValue("driverManagementId", option);
                          setFieldValue(
                            "organizationManagementId",
                            option.organizationId
                          );
                          setFieldValue("driverManagementId", option);
                        }}
                        onBlur={handleBlur("driverManagementId")}
                      />
                      {touched.driverManagementId &&
                        errors.driverManagementId && (
                          <div className="validate">
                            {errors.driverManagementId === "requireSelect"
                              ? "Required"
                              : errors.driverManagementId}
                          </div>
                        )}
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
                          placeholder="Device Id"
                          autocomplete="disable"
                          type="text"
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
                        name="select"
                        value={values.insurerName}
                        placeholder="Insurer Name"
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
                        value={values.policyNumber}
                        placeholder="Policy Number"
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
                        value={values.homeDepot}
                        placeholder="Home Depot"
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
                        onBlur={handleBlur("fleetNumber")}
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
                        onBlur={handleBlur("description1")}
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
                        name="select"
                        placeholder="Description 2"
                        value={values.description2}
                        onChange={handleChange("description2")}
                        onBlur={handleBlur("description2")}
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
                    className="popbtn datewidth btnBox"
                  >
                    <>UPDATE</>
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
  dropdowns: state.dropdownList.dropdowns,
  drivers: state.driverData.drivers_proj,
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  EditDeviceCode: (data: AddDeviceType) => dispatch(EditDeviceCode(data)),
  getDriverForProj: (projectId: number) =>
    dispatch(getDriverForProj(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
