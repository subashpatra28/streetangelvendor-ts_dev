import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { AxiosError } from "axios";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { CommonConfiguration } from "../../../../../../../../../../../global.types";
import ASSETS from "../../../../../../../../../../assets";
import {
  CommonConfigurationAddValidationType,
  commonSchema,
} from "../../../../../../../../../../constants";
import { TOAST_MSG } from "../../../../../../../../../../constants/toast.constants";
import { getOrgList } from "../../../../../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../../../../redux/reducers/general/general.actions";
import {
  EditCommonConfigurationCode,
  getCommonConfigurations,
} from "../../../../../../../../../../redux/reducers/Management&Settings/commonConfiguration/commonConfiguration.actions";
import { RootState } from "../../../../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../../../../redux/store/store";
import CustomInput from "../../../../../../../../../Common/CustomInput";
import IMEINumber from "../imeiNumber";
import { AddCommonConfiguration } from "../../../../../../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: CommonConfiguration;
  };

const Edit = (props: Props) => {
  console.log("Edit", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.orgList.result) {
      await props.getOrgList();
    }
    props.endLoading();
  };
  const EditCommonConfig = async (
    values: CommonConfigurationAddValidationType
  ) => {
    console.log("values", values);
    try {
      props.startLoading();
      await toast.promise(
        props.EditCommonConfigurationCode({
          id: props.data.id,
          organization: {
            id: values.organization.id,
            name: values.organization.name,
          },
          organizationTo: {
            id: values.organizationTo.id,
            name: values.organizationTo.name,
          },
          organizationFrom: {
            id: values.organizationFrom.id,
            name: values.organizationFrom.name,
          },
          createOn: props.data.createOn,
          status: values.status,
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.EDIT_COMMON_CONFIGURATION_SUCCESS,
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
      await props.getCommonConfigurations();
      toggle();
    } catch (error) {
      console.log("error in DriverEdit api", error);
    } finally {
      await props.endLoading();
    }
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <EditOutlinedIcon onClick={toggle} className="dropico" />

      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <Formik
          validationSchema={commonSchema}
          enableReinitialize={true}
          initialValues={{
            organization: {
              id: props.data.organization.id,
              name: props.data.organization.name,
            },
            organizationTo: {
              id: props.data.organizationTo.id,
              name: props.data.organizationTo.name,
            },
            organizationFrom: {
              id: props.data.organizationFrom.id,
              name: props.data.organizationFrom.name,
            },
            createOn: props.data.createOn,
            status: props.data.status,
          }}
          onSubmit={EditCommonConfig}
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
              <ModalHeader className="mod">
                <h5 className="modlabel modheadcont">Edit Devices</h5>
                <button className="mult" onClick={toggle}>
                  <img src={ASSETS.MULTIPLY} alt="multiply" />
                </button>
              </ModalHeader>
              <ModalBody>
                <div className="modalheader">File Upload</div>
                <Row>
                  <Col xs={12} md={8} className="mt-2">
                    <CustomInput />
                  </Col>
                  <Col md={4}>
                    <Button className="range modalbtn dashboardMinDiv popimptbtn ">
                      Upload
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <IMEINumber />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6} className="dropinput dropHid">
                    <div className="modalheader">Organization To</div>
                    <Select
                      className="dashboardMinDiv eventsBottom eventsFont hoverDrop mt-2"
                      placeholder="Organization"
                      options={props.dropdowns.orgList?.result || []}
                      value={values.organizationTo}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id.toString()}
                      onChange={(option) =>
                        setFieldValue("organizationTo", option)
                      }
                      onBlur={handleBlur("organizationTo")}
                    />
                  </Col>
                  <Col md={6} className="dropinput dropHid">
                    <div className="modalheader">Organization From</div>
                    <Select
                      className="dashboardMinDiv eventsBottom eventsFont hoverDrop mt-2"
                      placeholder="Organization"
                      options={props.dropdowns.orgList?.result || []}
                      value={values.organizationFrom}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id.toString()}
                      onChange={(option) =>
                        setFieldValue("organizationFrom", option)
                      }
                      onBlur={handleBlur("organizationFrom")}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6} className="dropinput">
                    <FormGroup>
                      <div className="modalheader mb-2">
                        Select Configuration<span className="required"> *</span>
                      </div>
                      <Select
                        className={`
                         " borderShadow" +
                         ${touched.organization && errors.organization} +
                         " dashboardMinDiv" +
                         " eventsFont" +
                         " borderWidt"
                       `}
                        placeholder="Configuration"
                        options={props.dropdowns.orgList?.result || []}
                        value={values.organization}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) => {
                          setFieldValue("organization", option);
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
                  <Col md={2}>
                    <Label className="modlabel modinpulabel">Status</Label>
                  </Col>
                  <Col md={8}>
                    <RadioGroup
                      onChange={(e) => {
                        setFieldValue(
                          "status",
                          e.target.value === "true" ? true : false
                        );
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
                    // disabled={!isValid}
                    // @ts-expect-error
                    onClick={handleSubmit}
                    className="popbtn datewidth btnBox"
                  >
                    <>Update</>
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
  getOrgList: () => dispatch(getOrgList()),
  getCommonConfigurations: () => dispatch(getCommonConfigurations()),
  EditCommonConfigurationCode: (data: AddCommonConfiguration) =>
    dispatch(EditCommonConfigurationCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
