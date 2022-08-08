import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { connect } from "react-redux";
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
import {
  AddManageRolesCodeData,
  ResourceRole,
} from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  ManageRoleAddValidationSchemaType,
  manageRolesAddValidationSchema,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { AddManageRolesCode } from "../../../../../../../redux/reducers/Management&Settings/manageRoles/manageRoles.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import ToggleButton from "../../../../../../Common/ToggleButton";
import PermissionsTable from "../../../PermissionsTable";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddRole = (props: Props) => {
  console.log("addProps", props);
  const [modal, setModal] = useState(false);
  const [permissions, setPermissions] = useState({});
  const toggle = () => setModal(!modal);

  const handleAddManageRoles = async (
    values: ManageRoleAddValidationSchemaType
  ) => {
    try {
      props.startLoading();
      console.log("values,", values);

      await toast.promise(
        props.AddManageRolesCode({
          permissions: Object.values(values.permissions),
          description: values.description ?? "",
          liveStreaming: values.liveStreaming,
          name: values.name,
          status: values.status,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.ADD_ROLE_SUCCESS,
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
      console.log("error in ManageRole Add api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <Button onClick={toggle} className="pagebtn">
        <Label className="tableModalBtnHeight range">Add Role</Label>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modalTop">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Add Role</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={manageRolesAddValidationSchema}
          enableReinitialize={true}
          initialValues={{
            status: true,
            liveStreaming: true,
            name: "",
            engineer: true,
            permissions: {},
            description: "",
          }}
          onSubmit={handleAddManageRoles}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            touched,
            values,
            isValid,
            errors,
          }) => (
            <>
              <ModalBody>
                <Row>
                  <Col md={12}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">
                        Name<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "range " +
                            "form-control mt-2" +
                            (errors.name && touched.name ? " is-invalid " : "")
                          }
                          autoComplete="disable"
                          type="text"
                          name="name"
                          placeholder="Role Name"
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
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup className="dropinput">
                      <div className="modalheader">Description</div>
                      <Input
                        autoComplete="disable"
                        className="range mt-2"
                        placeholder="Description"
                        type="textarea"
                        value={values.description}
                        onChange={handleChange("description")}
                        onBlur={handleBlur("description")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="d-flex align-items-center">
                    <div className="modalheader mt-3">Live Streaming</div>
                    <ToggleButton
                      checked={values.liveStreaming}
                      onClick={(value: boolean) =>
                        setFieldValue("liveStreaming", value)
                      }
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12} className="mt-2">
                    <PermissionsTable
                      disabled={false}
                      className={errors.permissions}
                      permissions={values.permissions}
                      setPermissions={(val: { [key: number]: ResourceRole }) =>
                        setFieldValue("permissions", val)
                      }
                    />
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
                    // disabled={!isValid}
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
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  AddManageRolesCode: (data: AddManageRolesCodeData) =>
    dispatch(AddManageRolesCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRole);
