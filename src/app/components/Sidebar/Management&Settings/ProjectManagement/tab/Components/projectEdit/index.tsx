import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { AxiosError } from "axios";
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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { ProjectMgMtType } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  projectEditValidationSchema,
  ProjectEditValidationType,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { EditProjectMgmt } from "../../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import SetLogo from "./setLogo";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: ProjectMgMtType;
  };

const Edit = (props: Props) => {
  console.log("editProps", props);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleUpdateOrganization = async (
    values: ProjectEditValidationType
  ) => {
    try {
      props.startLoading();
      await toast.promise(
        props.EditProjectCode({
          id: props.data.id,
          name: values.name,
          // userName: values.userName,
          // password: values.password,
          postalCode: values.postalCode,
          contactPersonName: values.contactPersonName,
          contactPersonMobile: values.contactPersonMobile,
          contactPersonMobileCode: values.contactPersonMobileCode.value,
          faxNumber: values.faxNumber ?? "",
          website: values.website,
          email: values.email,
          alternativeEmail: values.alternativeEmail ?? "",
          // renewalDate: values.renewalDate,
          logo: values.logo,
          city: values.city ?? "",
          country: values.country ?? "",
          officeNumber: values.officeNumber ?? "",
          organizationId: values.organizationId,
          organizationName: values.organizationName,
          organizationAddress: values.organizationAddress ?? "",
          service: values.service ?? "",
          state: values.state ?? "",
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.EDIT_PROJECT_SUCCESS,
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
      console.log("error in Organization edit api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      {/* <span onClick={toggle} className="tableModalBtn">
        <Label className="tableModalBtnHeight"> */}
      <EditOutlinedIcon onClick={toggle} className="dropico" />
      {/* </Label>
        {buttonLabel}
      </span> */}
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Edit Project</h5>{" "}
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={projectEditValidationSchema}
          enableReinitialize={true}
          initialValues={{
            name: props.data.name ?? "",
            // userName: props.data.userName,
            // password: props.data.password,
            postalCode: props.data.postalCode ?? "",
            contactPersonName: props.data.contactPersonName ?? "",
            contactPersonMobile: props.data.contactPersonMobile ?? "",
            contactPersonMobileCode: {
              label: props.data.contactPersonMobileCode,
              value: props.data.contactPersonMobileCode,
            },
            faxNumber: props.data.faxNumber ?? "",
            website: props.data.website ?? "",
            email: props.data.email ?? "",
            alternativeEmail: props.data.alternativeEmail ?? "",
            // renewalDate: props.data.renewalDate,
            organizationId: props.data.organizationId,
            organizationName: props.data.organizationName,
            logo: props.data.logo,
            city: props.data.city ?? "",
            country: props.data.country ?? "",
            officeNumber: props.data.officeNumber ?? "",
            organizationAddress: props.data.organizationAddress ?? "",
            service: props.data.service ?? "",
            state: props.data.state ?? "",
          }}
          onSubmit={handleUpdateOrganization}
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
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Project Name<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          autocomplete="disable"
                          type="text"
                          className={
                            "form-control mt-2" +
                            (errors.name && touched.name ? " is-invalid " : "")
                          }
                          placeholder="Project Name"
                          value={values.name}
                          onChange={handleChange("name")}
                          onBlur={handleBlur("name")}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Project Address</div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        placeholder="Project Address"
                        value={values.organizationAddress}
                        onChange={handleChange("organizationAddress")}
                        onBlur={handleBlur("organizationAddress")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                      <div className="modalheader" for="exampleAddress">
                        City
                      </div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        placeholder="City"
                        value={values.city}
                        onChange={handleChange("city")}
                        onBlur={handleBlur("city")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                      <div className="modalheader" for="exampleAddress">
                        State
                      </div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        value={values.state}
                        onChange={handleChange("state")}
                        onBlur={handleBlur("state")}
                        placeholder="State"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                      <div className="modalheader" for="exampleAddress">
                        Country
                      </div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        value={values.country}
                        onChange={handleChange("country")}
                        onBlur={handleBlur("country")}
                        placeholder="Country"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; className:... Remove this comment to see the full error message */}
                      <div className="modalheader" for="exampleAddress">
                        Postal Code<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          autocomplete="disable"
                          className={
                            "form-control mt-2" +
                            (errors.postalCode && touched.postalCode
                              ? " is-invalid "
                              : "")
                          }
                          pattern="\d*"
                          maxLength="10"
                          placeholder="Postal Code"
                          value={values.postalCode}
                          onChange={handleChange("postalCode")}
                          onBlur={handleBlur("postalCode")}
                        />
                        <ErrorMessage
                          name="postalCode"
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
                      {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                      <div className="modalheader" for="services">
                        Services
                      </div>
                      <Input
                        className="mt-2"
                        type="text"
                        autocomplete="disable"
                        placeholder="Services"
                        value={values.service}
                        onChange={handleChange("service")}
                        onBlur={handleBlur("service")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; className:... Remove this comment to see the full error message */}
                      <div className="modalheader" for="contactPersonName">
                        Contact Person Name<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          autocomplete="disable"
                          className={
                            "form-control mt-2" +
                            (errors.contactPersonName &&
                            touched.contactPersonName
                              ? " is-invalid "
                              : "")
                          }
                          type="text"
                          name="contactPersonName"
                          placeholder="Contact Person Name"
                          value={values.contactPersonName}
                          onChange={handleChange("contactPersonName")}
                          onBlur={handleBlur("contactPersonName")}
                        />
                        <ErrorMessage
                          name="contactPersonName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  {/* @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; className:... Remove this comment to see the full error message */}
                  <div className="modalheader" for="exampleSelect">
                    Contact Person Mobile<span className="required"> *</span>
                  </div>
                </Row>
                <Row className="formRow">
                  <Col md={3}>
                    <FormGroup className="dropinput">
                      <Select
                        className={`
                          " borderShadow" +   ${
                            touched.contactPersonMobileCode &&
                            errors.contactPersonMobileCode
                              ? "requireSelect"
                              : ""
                          }
                        `}
                        options={props.dropdowns.dialCode?.dropDown}
                        placeholder={"Country Code"}
                        name="contactPersonMobileCode"
                        value={values.contactPersonMobileCode}
                        onChange={(option) =>
                          setFieldValue("contactPersonMobileCode", option)
                        }
                        onBlur={handleBlur("contactPersonMobileCode")}
                      />
                      {touched.contactPersonMobileCode &&
                        errors.contactPersonMobileCode && (
                          <div className="validate">
                            {errors.contactPersonMobileCode === "requireSelect"
                              ? "Required"
                              : errors.contactPersonMobileCode}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup className="dropinput">
                      <Form>
                        <Field
                          autocomplete="disable"
                          className={
                            "form-control mt-2" +
                            (errors.contactPersonMobile &&
                            touched.contactPersonMobile
                              ? " is-invalid "
                              : "")
                          }
                          pattern="\d*"
                          maxLength={15}
                          name="contactPersonMobile"
                          placeholder="Contact Person Mobile"
                          value={values.contactPersonMobile}
                          onChange={handleChange("contactPersonMobile")}
                          onBlur={handleBlur("contactPersonMobile")}
                        />
                        <ErrorMessage
                          name="contactPersonMobile"
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
                      {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; for: ... Remove this comment to see the full error message */}
                      <div className="modalheader" for="contactPersonName">
                        Office No
                      </div>
                      <Form>
                        <Field
                          autocomplete="disable"
                          className={
                            "form-control mt-2" +
                            (errors.officeNumber && touched.officeNumber
                              ? " is-invalid "
                              : "")
                          }
                          pattern="\d*"
                          maxLength={15}
                          name="officeNumber"
                          placeholder="Office Number"
                          value={values.officeNumber}
                          onChange={handleChange("officeNumber")}
                          onBlur={handleBlur("officeNumber")}
                        />
                        <ErrorMessage
                          name="officeNumber"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; className:... Remove this comment to see the full error message */}
                      <div className="modalheader" for="contactPersonName">
                        Fax No<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          autocomplete="disable"
                          className={
                            "form-control mt-2" +
                            (errors.faxNumber && touched.faxNumber
                              ? " is-invalid "
                              : "")
                          }
                          pattern="\d*"
                          maxLength={15}
                          name="faxNumber"
                          placeholder="Fax No"
                          value={values.faxNumber}
                          onChange={handleChange("faxNumber")}
                          onBlur={handleBlur("faxNumber")}
                        />
                        <ErrorMessage
                          name="faxNumber"
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
                      {/* @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; className:... Remove this comment to see the full error message */}
                      <div className="modalheader" for="contactPersonName">
                        Website<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.website && touched.website
                              ? " is-invalid "
                              : "")
                          }
                          type="text"
                          autocomplete="disable"
                          placeholder="Website"
                          value={values.website}
                          onChange={handleChange("website")}
                          onBlur={handleBlur("website")}
                        />
                        <ErrorMessage
                          name="website"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; className:... Remove this comment to see the full error message */}
                      <div className="modalheader" for="contactPersonName">
                        Email<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.email && touched.email
                              ? " is-invalid "
                              : "")
                          }
                          type="userEmail"
                          name="email"
                          autocomplete="disable"
                          placeholder="Email"
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
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      {/* @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; className:... Remove this comment to see the full error message */}
                      <div className="modalheader" for="Alternate Contact">
                        Alternate Email Id<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.alternativeEmail && touched.alternativeEmail
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          type="userEmail"
                          name="alternativeEmail"
                          placeholder="Alternate Email Id"
                          value={values.alternativeEmail}
                          onChange={handleChange("alternativeEmail")}
                          onBlur={handleBlur("alternativeEmail")}
                        />
                        <ErrorMessage
                          name="alternativeEmail"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <SetLogo />
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter className="footer-width">
                <div className="footwidth">
                  <Button
                    // @ts-expect-error
                    onClick={handleSubmit}
                    // onClick={() =>
                    //   console.log("values, errors", values, errors)
                    // }
                    type="submit"
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
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  EditProjectCode: (data: ProjectMgMtType) => dispatch(EditProjectMgmt(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
