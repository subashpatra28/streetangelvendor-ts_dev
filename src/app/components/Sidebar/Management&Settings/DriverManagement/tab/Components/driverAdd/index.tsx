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
} from "reactstrap";
import ASSETS from "../../../../../../../assets";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { connect } from "react-redux";
import {
  getDialCode,
  getOrgList,
} from "../../../../../../../redux/reducers/dropdowns/dropdown.actions";
import { AddDriverCode } from "../../../../../../../redux/reducers/Management&Settings/driverManagement/driverManagement.actions";
import Select from "react-select";
import * as Yup from "yup";
import Radio from "@mui/material/Radio";
import { AxiosError } from "axios";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  driverValidationAddSchema,
  DriverAddSchemaType,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import { toast } from "react-toastify";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { AddDriver as AddDriverType } from "../../../../../../../../global.types";
import { getProject } from "../../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddDriver = (props: Props) => {
  console.log(">>>>>driver>>.", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.dialCode?.dropDown) {
      await props.getDialCodeList();
    }
    if (!props.dropdowns.orgList.result) {
      await props.getOrgList();
    }
    if (!props.projects.result) {
      await props.getProjectList();
    }
    props.endLoading();
  };

  const handleAddDriver = async (values: DriverAddSchemaType) => {
    try {
      props.startLoading();
      // console.log("values,", values, errors);
      await toast.promise(
        props.AddDriverCode({
          defaultDriver: true,
          email: values.email,
          emergencyContact: values.emergencyContact,
          emergencyContactCode: values.emergencyContactCode,
          mobileNo: values.mobileNo ?? "",
          mobileNoCode: values.mobileNoCode,
          name: values.dName,
          countryName: values.country ?? "",
          organizationId: 1,
          projectId: values.project.id,
          status: values.status,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.DRIVER_SUCCESS,
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
      console.log("error in DriverManagement Add api", error);
    } finally {
      await props.endLoading();
    }
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className="pagebtn" onClick={toggle}>
        <Label className="tableModalBtnHeight range">Add Driver</Label>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <div className="modlabel modheadcont">Add Driver</div>
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={driverValidationAddSchema}
          enableReinitialize={true}
          initialValues={{
            dName: "",
            mobileNo: "",
            email: "",
            emergencyContact: "",
            // organization: "",
            project: {
              id: 0,
              name: "",
            },
            status: true,
            country: "",
            emergencyContactCode: "",

            mobileNoCode: "",
          }}
          onSubmit={handleAddDriver}
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
                    <FormGroup>
                      <div className="modalheader mb-2">
                        Select Project
                        <span className="required"> *</span>
                      </div>
                      <Select
                        placeholder="Select Project"
                        className={`
                          ${touched.project && errors.project} +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt" + " borderShadow"
                        `}
                        options={props.projects.result ?? []}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        // value={values.project}
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
                        Driver Name
                        <span className="required"> *</span>
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
                    <FormGroup>
                      <Select
                        className={`
                          ${touched.mobileNoCode && errors.mobileNoCode} +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt" 
                        `}
                        placeholder={"Code"}
                        options={props.dropdowns.dialCode?.dropDown ?? []}
                        // value={values.mobileNoCode}
                        onChange={(option) =>
                          setFieldValue("mobileNoCode", option?.value)
                        }
                        onBlur={handleBlur("mobileNoCode")}
                      />
                      {touched.mobileNoCode && errors.mobileNoCode && (
                        <div className="validate">
                          {errors.mobileNoCode === "requireSelect"
                            ? "Required"
                            : errors.mobileNoCode}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.mobileNo && touched.mobileNo
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          pattern="\d*"
                          maxLength={15}
                          name="mobileNo"
                          value={values.mobileNo}
                          placeholder="Emergency Contact"
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
                    <FormGroup>
                      <Select
                        className={`
                          ${
                            touched.emergencyContactCode &&
                            errors.emergencyContactCode
                          } +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt" + " borderShadow"
                        `}
                        placeholder={"Code"}
                        options={props.dropdowns.dialCode?.dropDown ?? []}
                        // value={values.emergencyContactCode}
                        onChange={(option) =>
                          setFieldValue("emergencyContactCode", option?.value)
                        }
                        onBlur={handleBlur("emergencyContactCode")}
                      />
                      {touched.emergencyContactCode &&
                        errors.emergencyContactCode && (
                          <div className="validate">
                            {errors.emergencyContactCode === "requireSelect"
                              ? "Required"
                              : errors.emergencyContactCode}
                          </div>
                        )}
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
                          placeholder="Emergency Contact"
                          pattern="\d*"
                          maxLength={15}
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
                        {" "}
                        Email Id
                        <span className="required"> *</span>
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
                          placeholder="Email Id"
                          type="userEmail"
                          name="email"
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
                    <div className="modalheader d-flex">
                      {" "}
                      Status
                      <span className="required ml-1"> *</span>
                    </div>
                  </Col>
                  <Col md={6} className="d-flex">
                    <RadioGroup
                      onChange={(e) =>
                        setFieldValue("status", e.target.checked)
                      }
                      onBlur={handleBlur("status")}
                      aria-label="status"
                      className="radioStatus"
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
                {" "}
                <div className="footwidth">
                  <Button
                    className="popbtn datewidth btnBox"
                    // disabled={!isValid}
                    // @ts-expect-error
                    onClick={handleSubmit}
                  >
                    <>ADD</>
                  </Button>
                </div>
                <div className="divider" />{" "}
                <div className="footwidth">
                  <Button className="popbtn datewidth btnBox" onClick={toggle}>
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
  getOrgList: () => dispatch(getOrgList()),
  getDialCodeList: () => dispatch(getDialCode()),
  getProjectList: () => dispatch(getProject()),
  AddDriverCode: (data: AddDriverType) => dispatch(AddDriverCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDriver);
