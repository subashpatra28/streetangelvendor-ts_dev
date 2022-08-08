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
import { AddProject as AddProjectType } from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  AddProjectValidationType,
  projectValidationSchema,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import { getDialCode } from "../../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { AddProjectMgmt } from "../../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import SetLogo from "./setLogo";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddProject = (props: Props) => {
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.dialCode?.dropDown) {
      await props.getDialCodeList();
    }
    props.endLoading();
  };

  const handleAddOrganization = async (values: AddProjectValidationType) => {
    try {
      props.startLoading();
      // console.log("values,", values, errors);
      await toast.promise(
        props.AddProjectCode({
          alternativeEmail: values.alternativeEmail,
          city: values.city ?? "",
          contactPersonMobile: values.contactPersonMobile, //mobileNumber
          contactPersonName: values.contactPersonName,
          contactPersonMobileCode: values.contactPersonMobileCode, //dropdown
          country: values.country ?? "",
          email: values.email,
          faxNumber: values.faxNumber,
          logo: values.logo,
          name: values.name,
          organizationId: values.organizationId,
          organizationName: values.organizationName,
          officeNumber: values.officeNumber ?? "",
          organizationAddress: values.organizationAddress ?? "",
          // password: values.password,
          postalCode: values.postalCode,
          // renewalDate: values.renewalDate,
          service: values.service ?? "",
          state: values.state ?? "",
          // userName: values.userName,
          // website: values.website,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.PROJECT_SUCCESS,
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
      console.log("error in Organization Management Add api", error);
    } finally {
      await props.endLoading();
    }
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle} className="pagebtn">
        <Label className="tableModalBtnHeight range">Add Project</Label>
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        //
        className="videoModal"
      >
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Add Project</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={projectValidationSchema}
          enableReinitialize={true}
          initialValues={{
            name: "",
            postalCode: "",
            contactPersonName: "",
            contactPersonMobile: "",
            contactPersonMobileCode: "",
            organizationId: 24,
            organizationName: "TS_DEV",
            faxNumber: "",
            website: "",
            email: "",
            alternativeEmail: "",
            logo: true,
            city: "",
            country: "",
            officeNumber: "",
            organizationAddress: "",
            service: "",
            state: "",
          }}
          onSubmit={handleAddOrganization}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            touched,
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
                          name="name"
                          placeholder="Project Name"
                          value={values.name}
                          onChange={handleChange}
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
                        type="text"
                        name="address"
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="exampleAddress"
                      >
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="exampleAddress"
                      >
                        State
                      </div>
                      <Input
                        className="mt-2"
                        autocomplete="disable"
                        type="text"
                        placeholder="State"
                        value={values.state}
                        onChange={handleChange("state")}
                        onBlur={handleBlur("state")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="formRow">
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="exampleAddress"
                      >
                        Country
                      </div>
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
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="exampleAddress"
                      >
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
                          name="postalCode"
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="services"
                      >
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="contactPersonName"
                      >
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
                  <div
                    className="modalheader"
                    // @ts-expect-error
                    for="exampleSelect"
                  >
                    Contact Person Mobile
                    <span className="required"> *</span>
                  </div>
                </Row>
                <Row className="formRow">
                  <Col md={3}>
                    <FormGroup>
                      <Select
                        placeholder="Code"
                        className={`
                          " borderShadow" + ${
                            touched.contactPersonMobileCode &&
                            errors.contactPersonMobileCode
                              ? "requireSelect"
                              : ""
                          }
                        `}
                        options={props.dropdowns.dialCode?.dropDown}
                        // value={values.contactPersonMobileCode}
                        onChange={(option) =>
                          setFieldValue(
                            "contactPersonMobileCode",
                            option?.value
                          )
                        }
                        onBlur={handleBlur("contactPersonMobileCode")}
                      />
                      {touched.contactPersonMobileCode &&
                      errors.contactPersonMobileCode ? (
                        <div className="validate">Required</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup>
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="contactPersonName"
                      >
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="contactPersonName"
                      >
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="contactPersonName"
                      >
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
                          autocomplete="disable"
                          type="website"
                          name="website"
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="contactPersonName"
                      >
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
                          autocomplete="disable"
                          type="userEmail"
                          name="email"
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
                      <div
                        className="modalheader"
                        // @ts-expect-error
                        for="Alternate Contact"
                      >
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
                    type="submit"
                    // @ts-expect-error
                    onClick={handleSubmit}
                    // onClick={() =>
                    //   console.log("values, errors", values, errors)
                    // }
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
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDialCodeList: () => dispatch(getDialCode()),
  AddProjectCode: (data: AddProjectType) => dispatch(AddProjectMgmt(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
