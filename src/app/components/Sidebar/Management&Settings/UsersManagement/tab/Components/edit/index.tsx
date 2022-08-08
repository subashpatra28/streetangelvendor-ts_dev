import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
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
import { AddUserType, CTAdminUser } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  EditUserValidationType,
  UsersManagementEditValidationSchema,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { EditUsersCode } from "../../../../../../../redux/reducers/Management&Settings/usersManagement/usersManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import SelectProject from "../../../SelectProject/SelectProject";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { data: CTAdminUser };
const Edit = (props: Props) => {
  console.log("Usersprops", props);
  const [organizationsIds, setOrganizationsIds] = useState<number[]>([]);
  useEffect(() => {
    setOrganizationsIds(
      props?.data?.organizationsId.split(",").map((each) => parseInt(each))
    );
  }, [props.data]);
  const handleUpdateCtAdmin = async (values: EditUserValidationType) => {
    try {
      props.startLoading();
      // var organizationsIds = [];
      // Object.keys(values.organizationsIds).map((eachPermission) =>
      //   organizationsIds.push({ ...values.organizationsIds[eachPermission] })
      // );
      // console.log("values,", values, errors);
      // let organizationsIds = [];
      // Object.keys(values.organizationsIds).forEach((eachId) =>
      //   organizationsIds.push({ ...values.organizationsIds[eachId] })
      // );
      await toast.promise(
        props.EditUsersCode({
          id: props.data.id,
          allowAlertEmail: values.allowAlertEmail,
          allowMaintenanceEmail: values.allowMaintenanceEmail,
          allowWelcomeEmail: values.allowWelcomeEmail,
          email: values.email,
          engineer: values.engineer,
          mobile: values.mobile,
          mobileCode: values.mobileCode.value,
          organizationsIds: values.organizationsIds,
          password: values.password,
          roleId: values.role.id,
          status: values.status,
          userName: values.userName,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.EDIT_USERS_SUCCESS,
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
      console.log("error in CtAdmin Edit api", error);
    } finally {
      await props.endLoading();
    }
  };
  // var dat = props.data.organizationsId;
  // let tex = dat.split(",");
  // let te = tex.join(",");
  // let da = JSON.parse(te);
  //  var con = [];
  //  con.push(te);
  // let userda = JSON.parse(con);
  // console.log("tex", tex, "te", te);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      {/* <div className="modalheader"> */}
      {/* <span onClick={toggle} className="tableModalBtn">
      <Label className="tableModalBtnHeight"> */}
      <EditOutlinedIcon onClick={toggle} className="dropico" />
      {/* </Label>
      {buttonLabel}
    </span> */}
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Edit User</h5>
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={UsersManagementEditValidationSchema}
          enableReinitialize={true}
          initialValues={{
            allowAlertEmail: props.data.allowAlertEmail,
            allowWelcomeEmail: props.data.allowWelcomeEmail,
            allowMaintenanceEmail: props.data.allowMaintenanceEmail,
            engineer: props.data.engineer,
            userName: props.data.userName ?? "",
            status: props.data.status,
            email: props.data.email ?? "",
            mobile: props.data.mobile ?? "",
            mobileCode: {
              label: props.data.mobileCode,
              value: props.data.mobileCode,
            },
            organizationsIds: props.data.organizationsId.split(","),
            password: props.data.password ?? "",
            role: props.data.role,
          }}
          onSubmit={handleUpdateCtAdmin}
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
                          type="text"
                          name="userName"
                          placeholder="UserName"
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
                          placeholder="Password"
                          name="password"
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
                    <FormGroup className="dropinput">
                      <Select
                        className={`" borderShadow " + ${
                          touched.mobileCode && errors.mobileCode
                        }`}
                        placeholder={"Country Code"}
                        options={props.dropdowns.dialCode?.dropDown}
                        value={values.mobileCode}
                        name="mobileCode"
                        onChange={(option) =>
                          setFieldValue("mobileCode", option)
                        }
                        onBlur={handleBlur("mobileCode")}
                      />
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
                          pattern="\d*"
                          maxLength={15}
                          placeholder="Digits only"
                          name="mobile"
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
                      className={`" borderShadow" + ${
                        touched.role && errors.role
                      }`}
                      placeholder={"Select User Role"}
                      options={props.manageRoles.result}
                      value={values.role}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id.toString()}
                      onChange={(option) => setFieldValue("role", option)}
                      onBlur={handleBlur("role")}
                      name="role"
                    />
                    {touched.role && errors.role && (
                      <div className="validate">
                        {errors.role === "requireSelect"
                          ? "Required"
                          : errors.role}
                      </div>
                    )}
                  </Col>
                </Row>
                <br />
                <div className="modalheader">
                  <SelectProject
                    organizationsIds={organizationsIds}
                    setOrganizationsIds={(val) => {
                      setOrganizationsIds(val);
                    }}
                    // setOrganizationsIds={(val: $TSFixMe) => {
                    //   setOrganizationsIds(val);
                    // console.log(
                    //   "EditCtAdmin",
                    //   val,
                    //   "values",
                    //   values.organizationsIds
                    // );
                    // let temp = [...values.organizationsIds];
                    // temp.indexOf(val) > -1
                    //   ? temp.splice(temp.indexOf(val), 1)
                    //   : temp.push(val);
                    // setFieldValue(val);
                    // console.log("parentTemp", val);
                    // }}
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
                          onChange={(e) =>
                            setFieldValue("allowWelcomeEmail", e.target.checked)
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
                  <Col md={8}>
                    <RadioGroup
                      onChange={(e) => {
                        setFieldValue("status", e.target.checked);
                      }}
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
      {/* </div> */}
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
  EditUsersCode: (data: AddUserType) => dispatch(EditUsersCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
