import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
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
  EditManageRolesCodeData,
  Permission,
  Role,
} from "../../../../../../../../global.types";
import ASSETS from "../../../../../../../assets";
import {
  ManageRoleEditValidationSchemaType,
  manageRolesEditValidationSchema,
} from "../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import {
  EditManageRolesCode,
  getManageRoles,
} from "../../../../../../../redux/reducers/Management&Settings/manageRoles/manageRoles.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { sortByKey } from "../../../../../../../services/common.functions.services";
import ToggleButton from "../../../../../../Common/ToggleButton";
import PermissionsTable from "../../../PermissionsTable";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: Role;
  };
const EditRole = (props: Props) => {
  console.log("EditRole props", props);
  const [modal, setModal] = useState(false);
  const [permissionsObj, setPermissionsObj] = useState<{
    [key: number]: Permission;
  }>({});

  const handleUpdateManageRoles = async (
    values: ManageRoleEditValidationSchemaType
  ) => {
    try {
      props.startLoading();

      await toast.promise(
        props.EditManageRolesCode({
          id: props.data.id,
          description: values.description ?? "",
          name: values.name,
          permissions: Object.values(permissionsObj),
          status: values.status,
          engineer: values.engineer,
          liveStreaming: values.liveStreaming,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.EDIT_MANAGE_ROLES_SUCCESS,
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
      console.log("error in EditRole api", error);
    } finally {
      await props.endLoading();
    }
  };
  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (modal) {
      let temp: { [key: number]: Permission } = {};
      props.data.rolePermission.map((each) => (temp[each.permissionId] = each));
      setPermissionsObj(temp);
    }

    return () => {
      setPermissionsObj({});
    };
  }, [modal]);

  return (
    <>
      {/* <span className="tableModalBtn"> */}
      {/* <Label className="tableModalBtnHeight"> */}
      <EditOutlinedIcon onClick={toggle} className="dropico" />
      {/* </Label> */}
      {/* {buttonLabel}
    </span> */}
      <Modal isOpen={modal} toggle={toggle} className="modalTop">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Edit Role</h5>{" "}
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <Formik
          validationSchema={manageRolesEditValidationSchema}
          enableReinitialize={true}
          initialValues={{
            description: props.data.description ?? "",
            engineer: props.data.engineer ?? false,
            liveStreaming: props.data.liveStreaming,
            name: props.data.name ?? "",
            status: props.data.status,
            permissions: props.data.rolePermission.length
              ? sortByKey(props.data.rolePermission, "permissionId", "asc")
              : [],
          }}
          onSubmit={handleUpdateManageRoles}
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
                        Name<span className="required"> *</span>
                      </div>
                      <Form>
                        <Field
                          className={
                            "range " +
                            "form-control mt-2" +
                            (errors.name && touched.name ? " is-invalid " : "")
                          }
                          autocomplete="disable"
                          type="text"
                          name="text"
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
                        autocomplete="disable"
                        type="textarea"
                        name="select"
                        className="range mt-2"
                        placeholder="Description"
                        value={values.description}
                        onChange={handleChange("description")}
                        // onClick= {() => console.log("click", values)}
                        onBlur={handleBlur("description")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4} className="d-flex align-items-center">
                    <div className="modalheader mt-3">Live Streaming</div>
                    <ToggleButton
                      type="radio"
                      value={true}
                      checked={values.liveStreaming}
                      onClick={(value: boolean) =>
                        setFieldValue("liveStreaming", value)
                      }
                    />
                  </Col>
                </Row>
                <br />
                {/* <PermissionsTable
                  className={errors.permissions + "mt-2"}
                  permissions={values.permissions}
                  setPermissions={(val: $TSFixMe) => {
                    console.log(
                      "EditRoleTab val received in parent",
                      val,
                      values.permissions
                    );
                    let tmpValues = [...values.permissions];
                    for (let i = 0; i < tmpValues.length; i++) {
                      if (tmpValues[i].permissionId === val.permissionId) {
                        tmpValues[i] = val;
                        break;
                      }
                    }
                    setFieldValue("permissions", tmpValues);
                    // setPermissions(val);
                  }}
                /> */}
                <PermissionsTable
                  disabled={false}
                  className={errors.permissions + " mt-2"}
                  permissions={permissionsObj}
                  setPermissions={(val: { [key: number]: Permission }) => {
                    setFieldValue("permissions", Object.values(val));
                    setPermissionsObj(val);
                  }}
                />
                <br />
                <Row>
                  <Col md={2}>
                    <Label className="modlabel modinpulabel">Status</Label>
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
                    className="popbtn datewidth btnBox"
                    type="submit"
                    // disabled={!isValid}
                    // @ts-expect-error
                    onClick={handleSubmit}
                  >
                    <>UPDATE</>
                  </Button>
                </div>
                <div className="divider" />
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
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),

  EditManageRolesCode: (data: EditManageRolesCodeData) =>
    dispatch(EditManageRolesCode(data)),

  getManageRoles: () => dispatch(getManageRoles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRole);
