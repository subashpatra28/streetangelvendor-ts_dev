import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  FormGroup,
  Form,
} from "reactstrap";
import {
  endLoading,
  startLoading,
} from "../../../../../../redux/reducers/general/general.actions";
import { connect } from "react-redux";
import {
  getDialCode,
  getOrgList,
} from "../../../../../../redux/reducers/dropdowns/dropdown.actions";
import Select from "react-select";
import { Formik, Field, ErrorMessage } from "formik";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import ASSETS from "../../../../../../assets";
import {
  supportTicket,
  supportTicketValidationAddType,
} from "../../../../../../constants";
import { AxiosError } from "axios";
import { AddSupportTicketCode } from "../../../../../../redux/reducers/Management&Settings/supportTicket/supportTicket.actions";
import { RootState } from "../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../redux/store/store";
import { TOAST_MSG } from "../../../../../../constants/toast.constants";
import { toast } from "react-toastify";
import { AddSupportTicket } from "../../../../../../../global.types";
import moment from "moment";
import { getProject } from "../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddTicket = (props: Props) => {
  const handleAddSupportTicket = async (
    values: supportTicketValidationAddType
  ) => {
    try {
      props.startLoading();
      // console.log("values,", values, errors);
      await toast.promise(
        props.AddSupportTicketCode({
          message: values.message,
          contact: values.contact,
          organizationId: {
            id: values.organizationId,
            name: values.organization,
          },
          messageStatus: values.messageStatus,
          status: values.status,
          date: moment().toISOString(),
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.SUPPORT_TICKET_SUCCESS,
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
      console.log("error in support-ticket Add api", error);
    } finally {
      await props.endLoading();
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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

  return (
    <>
      <Button onClick={toggle} className="pagebtn">
        <>Add Ticket</>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modalTop">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Add Ticket</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={supportTicket}
          enableReinitialize={true}
          initialValues={{
            firstName: "",
            lastName: "",
            contact: "",
            email: "",
            message: "",
            organization: "",
            organizationId: "",
            messageStatus: true,
            status: true,
          }}
          onSubmit={handleAddSupportTicket}
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
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">First Name</div>
                      <Field
                        className={"form-control con mt-2"}
                        autocomplete="disable"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange("firstName")}
                        onBlur={handleBlur("firstName")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Last Name</div>
                      <Field
                        className={"form-control con mt-2"}
                        autocomplete="disable"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                        onBlur={handleBlur("lastName")}
                      />
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
                            "form-control con mt-2" +
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
                  <Col md={6}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Contact<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control con mt-2" +
                            (errors.contact && touched.contact
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          pattern="\d*"
                          maxLength={15}
                          placeholder="Contact"
                          name="contact"
                          value={values.contact}
                          onChange={handleChange("contact")}
                          onBlur={handleBlur("contact")}
                        />
                        <ErrorMessage
                          name="contact"
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
                        Message<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "form-control mt-2" +
                            (errors.message && touched.message
                              ? " is-invalid "
                              : "")
                          }
                          autocomplete="disable"
                          type="text"
                          name="message"
                          placeholder="Message"
                          value={values.message}
                          onChange={handleChange("message")}
                          onBlur={handleBlur("message")}
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="invalid-feedback"
                        />
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <div className="modalheader mb-2">
                        {""}
                        Select Organization
                      </div>
                      <Select
                        placeholder="Select Organization"
                        className={`
                          "borderShadow" +
                          ${touched.organization && errors.organization} +
                          " dashboardMinDiv" +
                          " eventsFont" +
                          " borderWidt"
                        `}
                        options={props.dropdowns.orgList?.result || []}
                        // value={values.organization}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) => {
                          setFieldValue("organizationId", option?.id);
                          setFieldValue("organization", option?.name);
                        }}
                        onBlur={handleBlur("organization")}
                      />
                      {touched.organization && errors.organization && (
                        <div className="validate">
                          {errors.organization === "requireSelect"
                            ? "Required"
                            : errors.organization}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div className="modalheader">Message Status</div>
                  </Col>
                  <Col md={6}>
                    <RadioGroup
                      onChange={(e) =>
                        setFieldValue(
                          "messageStatus",
                          e.target.value === "true"
                        )
                      }
                      className="radioStatus"
                      onBlur={handleBlur("messageStatus")}
                      aria-label="messageStatus"
                      defaultValue={values.messageStatus}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value={true}
                        checked={values.messageStatus}
                        control={<Radio />}
                        label="Active"
                      />
                      <FormControlLabel
                        value={false}
                        checked={!values.messageStatus}
                        control={<Radio />}
                        label="Deactive"
                      />
                    </RadioGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
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
                    type="submit"
                    // @ts-expect-error
                    onClick={handleSubmit}
                    className="popbtn datewidth btnBox"
                  >
                    <>SUBMIT</>
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
  getOrgList: () => dispatch(getOrgList()),
  getDialCodeList: () => dispatch(getDialCode()),
  getProjectList: () => dispatch(getProject()),
  AddSupportTicketCode: (data: AddSupportTicket) =>
    dispatch(AddSupportTicketCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket);
