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
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { AddUser as AddUserType } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  AddUserValidationType,
  UsersManagementAddValidationSchema,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import { getDialCode } from "../../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { getManageRoles } from "../../../../../../../redux/reducers/Management&Settings/manageRoles/manageRoles.actions";
import { AddUsersCode } from "../../../../../../../redux/reducers/Management&Settings/usersManagement/usersManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import SelectProject from "../../../SelectProject/SelectProject";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddUser = (props: Props) => {
  console.log("props", props);
  useEffect(() => {
    apiCall();
    return () => {};
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.dialCode?.dropDown) {
      await props.getDialCodeList();
    }
    if (!props.manageRoles.result) {
      await props.getManageRoleList();
    }
    props.endLoading();
  };

  const [organizationsIds, setOrganizationsIds] = useState([]);

  const handleAddUsersManagement = async (values: AddUserValidationType) => {
    try {
      props.startLoading();
      console.log("values,", values);
      await toast.promise(
        props.AddUsersCode({
          allowAlertEmail: values.allowAlertEmail,
          allowMaintenanceEmail: values.allowMaintenanceEmail,
          allowWelcomeEmail: values.allowWelcomeEmail,
          email: values.email,
          engineer: values.engineer,
          mobile: values.mobile,
          mobileCode: values.mobileCode,
          organizationsIds: organizationsIds,
          password: values.password,
          roleId: values.role.id,
          // role: {
          //   //To be removed at acutal api implementation
          //   id: 69,
          //   name: "Test4",
          // },
          status: values.status,
          userName: values.userName,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.USERS_SUCCESS,
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

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle} className="pagebtn">
        <Label className="tableModalBtnHeight range">Add User</Label>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Add User</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={UsersManagementAddValidationSchema}
          enableReinitialize={true}
          initialValues={{
            allowAlertEmail: true,
            allowWelcomeEmail: true,
            allowMaintenanceEmail: true,
            engineer: true,
            status: true,
            email: "",
            mobile: "",
            mobileCode: "",
            organizationsIds: {},
            password: "",
            role: { name: "", id: 0 },
            userName: "",
          }}
          onSubmit={handleAddUsersManagement}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            isValid,
            touched,
            errors,
          }) => (
            <>
              <ModalBody>
                <Row>
                  <Col md={12}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Username<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (touched.userName && errors.userName
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          placeholder="UserName"
                          type="text"
                          name="userName"
                          value={values.userName}
                          onChange={handleChange("userName")}
                          onBlur={handleBlur("userName")}
                        />
                        <ErrorMessage
                          name="userName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Email Id<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (touched.email && errors.email ? " is-invalid" : "")
                          }
                          autocomplete="disable"
                          autoFill="false"
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
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Password<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.password && touched.password
                              ? " is-invalid "
                              : "") +
                            " passwordFont "
                          }
                          autocomplete="disable"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange("password")}
                          onBlur={handleBlur("password")}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="modalheader">
                    Mobile Number<span className="required"> *</span>
                  </div>
                </Row>
                <Row className="formRow">
                  <Col md={3}>
                    <FormGroup>
                      <Select
                        placeholder="Code"
                        className={`" borderShadow" + ${
                          touched.mobileCode && errors.mobileCode
                            ? "requireSelect"
                            : ""
                        }`}
                        options={props.dropdowns.dialCode?.dropDown}
                        // value={values.mobileCode}
                        name="mobileCode"
                        onChange={(option) =>
                          setFieldValue("mobileCode", option?.value)
                        }
                        onBlur={handleBlur("mobileCode")}
                      />
                      {touched.mobileCode && errors.mobileCode ? (
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
                            (errors.mobile && touched.mobile
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          name="mobile"
                          pattern="\d*"
                          maxLength={15}
                          placeholder="Digits Only"
                          value={values.mobile}
                          onChange={handleChange("mobile")}
                          onBlur={handleBlur("mobile")}
                        />
                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="modalheader mb-2">
                    Select User role<span className="required"> *</span>
                  </div>{" "}
                </Row>
                <Row>
                  <Col md={12}>
                    <Select
                      placeholder="Select User Role"
                      className={`" borderShadow" + ${
                        touched.role && errors.role ? "requireSelect" : ""
                      }`}
                      options={props.manageRoles.result}
                      // value={values.role}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id.toString()}
                      name="role"
                      onChange={(option) => setFieldValue("role", option)}
                      onBlur={handleBlur("role")}
                    />
                    {touched.role && errors.role ? (
                      <div className="validate">Required</div>
                    ) : null}
                  </Col>
                </Row>
                <br />
                <div className="modalheader">
                  <SelectProject
                    organizationsIds={organizationsIds}
                    setOrganizationsIds={(val: $TSFixMe) => {
                      console.log("val received in parent", val);
                      setOrganizationsIds(val);
                      // @ts-expect-error TS(2554): Expected 2-3 arguments, but got 1.
                      setFieldValue(val);
                    }}
                  />
                </div>
                <br />
                <Row>
                  <Col>
                    <FormGroup check>
                      <Label check className="inpucheck">
                        <Input
                          type="checkbox"
                          // @ts-expect-error
                          value={true}
                          checked={values.allowAlertEmail}
                          onChange={(e) =>
                            setFieldValue("allowAlertEmail", e.target.checked)
                          }
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
                          type="checkbox"
                          // @ts-expect-error
                          value={true}
                          checked={values.allowMaintenanceEmail}
                          onChange={(e) =>
                            setFieldValue(
                              "allowMaintenanceEmail",
                              e.target.checked
                            )
                          }
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
                          type="checkbox"
                          // @ts-expect-error
                          value={true}
                          checked={values.allowWelcomeEmail}
                          onChange={(value) =>
                            setFieldValue(
                              "allowWelcomeEmail",
                              value.target.checked
                            )
                          }
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
                    disabled={!isValid}
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
  manageRoles: state.manageRolesData.manageRoles,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDialCodeList: () => dispatch(getDialCode()),
  getManageRoleList: () => dispatch(getManageRoles()),
  AddUsersCode: (data: AddUserType) => dispatch(AddUsersCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
