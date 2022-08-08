import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
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
import { AddDriver, Driver } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  driverValidationEditSchema,
  DriverValidationEditType,
} from "../../../../../../../constants";
import { AxiosError } from "axios";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import {
  EditDriverCode,
  getDriver,
} from "../../../../../../../redux/reducers/Management&Settings/driverManagement/driverManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: Driver;
  };
const Edit = (props: Props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleUpdateDriver = async (values: DriverValidationEditType) => {
    try {
      props.startLoading();
      console.log("values,", values);
      await toast.promise(
        props.EditDriverCode({
          id: props.data.id,
          email: values.email,
          emergencyContact: values.emergencyContact,
          emergencyContactCode: values.emergencyContactCode.value,
          mobileNo: values.mobileNo,
          mobileNoCode: values.mobileNoCode.value,
          name: values.dName,
          countryName: values.country ?? "",
          organizationId: values.organization.id,
          projectId: values.project.id,
          status: values.status,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.EDIT_DRIVER_SUCCESS,
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
      console.log("error in DriverEdit api", error);
    } finally {
      await props.endLoading();
    }
    // setTimeout(() => {
    //   props.endLoading();
    //   toggle();
    // }, 5000);
  };

  return (
    <>
      <span onClick={toggle} className="tableModalBtn">
        <Label className="tableModalBtnHeight">
          <EditOutlinedIcon className="dropico" />
        </Label>
      </span>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont"> Edit Driver</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={driverValidationEditSchema}
          enableReinitialize={true}
          initialValues={{
            dName: props.data.name ?? "",
            mobileNo: props.data.mobileNo ?? "",
            email: props.data.email ?? "",
            emergencyContact: props.data.emergencyContact ?? "",
            organization: props.data.organizationManagement,
            // organization: props.data.organizationManagement && props.data.organizationManagement.name && props.data.organizationManagement.id ? {label: props.data.organizationManagement.name, value: props.data.organizationManagement.id} : props.data.orgId ? {label: props.data.orgId, value: props.data.orgId} : "",
            project: props.data.project,
            status: props.data.status,
            country: props.data.countryName ?? "",
            emergencyContactCode: {
              label: props.data.emergencyContactCode,
              value: props.data.emergencyContactCode,
            },
            mobileNoCode: {
              label: props.data.mobileNoCode,
              value: props.data.mobileNoCode,
            },
          }}
          onSubmit={handleUpdateDriver}
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
              <ModalBody>
                <Row>
                  <Col md={12}>
                    <FormGroup className="dropinput">
                      <div className="modalheader mb-2">
                        Select Project<span className="required"> *</span>
                      </div>
                      <Select
                        className={`
                          " borderShadow" +
                          ${touched.project && errors.project} +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt"
                        `}
                        placeholder={"Select Project"}
                        options={props.projects.result ?? []}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        value={values.project}
                        onChange={(option) => setFieldValue("project", option)}
                        onBlur={handleBlur("project")}
                      />
                      {touched.project && errors.project && (
                        <div className="validate">
                          {errors.project === "requireSelect"
                            ? "Required"
                            : errors.project}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Driver Name<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.dName && touched.dName
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          placeholder="Driver Name"
                          type="text"
                          name="dName"
                          value={values.dName}
                          onChange={handleChange("dName")}
                          onBlur={handleBlur("dName")}
                        />
                        <ErrorMessage
                          name="dName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Country</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        placeholder="Country"
                        value={values.country}
                        onChange={handleChange("country")}
                        onBlur={handleBlur("country")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="modalheader mb-1">
                    Mobile Number<span className="required"> *</span>
                  </div>
                </Row>
                <Row className="formRow">
                  <Col md={3}>
                    <FormGroup className="dropinput">
                      <Select
                        className={`
                          ${touched.mobileNoCode && errors.mobileNoCode} +
                          " borderShadow " +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt"
                        `}
                        placeholder={"Country Code"}
                        options={props.dropdowns.dialCode?.dropDown}
                        value={values.mobileNoCode}
                        onChange={(option) =>
                          setFieldValue("mobileNoCode", option)
                        }
                        onBlur={handleBlur("mobileNoCode")}
                      />
                      {touched.mobileNoCode && errors.mobileNoCode ? (
                        <div className="validate">Required</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup className="dropinput">
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.mobileNo && touched.mobileNo
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          placeholder="Emergency Contact"
                          pattern="\d*"
                          maxLength={15}
                          name="mobileNo"
                          value={values.mobileNo}
                          onChange={handleChange("mobileNo")}
                          onBlur={handleBlur("mobileNo")}
                        />
                        <ErrorMessage
                          name="mobileNo"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="modalheader mb-1">
                    Emergency Contact 2<span className="required"> *</span>
                  </div>
                </Row>
                <Row className="formRow">
                  <Col md={3}>
                    <FormGroup className="dropinput">
                      <Select
                        className={`
                          ${
                            touched.emergencyContactCode &&
                            errors.emergencyContactCode
                          }
                          " borderShadow " +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt"
                        `}
                        placeholder={"Country Code"}
                        options={props.dropdowns.dialCode?.dropDown}
                        value={values.emergencyContactCode}
                        onChange={(option) =>
                          setFieldValue("emergencyContactCode", option)
                        }
                        onBlur={handleBlur("emergencyContactCode")}
                      />
                      {touched.emergencyContactCode &&
                      errors.emergencyContactCode ? (
                        <div className="validate">Required</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup className="dropinput">
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.emergencyContact && touched.emergencyContact
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          pattern="\d*"
                          maxLength={15}
                          placeholder="Emergency Contact"
                          name="emergencyContact"
                          value={values.emergencyContact}
                          onChange={handleChange("emergencyContact")}
                          onBlur={handleBlur("emergencyContact")}
                        />
                        <ErrorMessage
                          name="emergencyContact"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Email Id<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.email && touched.email
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          type="userEmail"
                          name="email"
                          placeholder="Email Id"
                          value={values.email}
                          onChange={handleChange("email")}
                          onBlur={handleBlur("email")}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <div className="modalheader">Status</div>
                  </Col>
                  <Col md={8}>
                    <RadioGroup
                      onChange={(e) => {
                        setFieldValue("status", e.target.checked);
                      }}
                      className="radioStatus"
                      onBlur={handleBlur("status")}
                      aria-label="status"
                      defaultValue={true}
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
                    type="submit"
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
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  EditDriverCode: (data: Omit<AddDriver, "defaultDriver"> & { id: number }) =>
    dispatch(EditDriverCode(data)),
  getDriver: () => dispatch(getDriver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
