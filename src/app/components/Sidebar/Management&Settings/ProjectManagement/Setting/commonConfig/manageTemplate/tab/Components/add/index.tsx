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
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { toast } from "react-toastify";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IMEINumber from "../imeiNumber";
import CustomInput from "../../../../../../../../../Common/CustomInput/index";
import {
  client,
  commonSchema,
  CommonConfigurationAddValidationType,
} from "../../../../../../../../../../constants";
import ASSETS from "../../../../../../../../../../assets";
import { connect } from "react-redux";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import { AddCommonConfigurationCode } from "../../../../../../../../../../redux/reducers/Management&Settings/commonConfiguration/commonConfiguration.actions";
import { getOrgList } from "../../../../../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../../../../redux/reducers/general/general.actions";
import { TOAST_MSG } from "../../../../../../../../../../constants/toast.constants";
import { RootState } from "../../../../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../../../../redux/store/store";
import { AxiosError } from "axios";
import { AddCommonConfiguration } from "../../../../../../../../../../../global.types";
import moment from "moment";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AssignDevices = (props: Props) => {
  console.log("assignDevices", props);
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

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleAddConfiguration = async (
    values: CommonConfigurationAddValidationType
  ) => {
    try {
      props.startLoading();
      await toast.promise(
        props.AddCommonConfigurationCode({
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
          status: values.status,
          createOn: moment().toISOString(),
        }) as any,
        {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.COMMON_CONFIGURATION_SUCCESS,
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
      console.log("error in configuration Add api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <Button onClick={toggle} className="commonBut">
        <Label className="tableModalBtnHeight">Assign Devices</Label>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <Formik
          validationSchema={commonSchema}
          enableReinitialize={true}
          initialValues={{
            status: true,
            organization: {
              name: "",
              id: 0,
            },
            organizationTo: {
              name: "",
              id: 0,
            },
            organizationFrom: {
              name: "",
              id: 0,
            },
          }}
          onSubmit={handleAddConfiguration}
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
                <h5 className="modlabel modheadcont">Assign Devices</h5>
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
                      placeholder="Organization To"
                      options={props.dropdowns.orgList?.result || []}
                      // value={""}
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
                      placeholder="Organization From"
                      options={props.dropdowns.orgList?.result || []}
                      // value={""}
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
                        Select Configuration
                      </div>
                      <Select
                        className="dashboardMinDiv eventsBottom eventsFont"
                        placeholder="Configuration"
                        options={props.dropdowns.orgList?.result || []}
                        // value={""}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id.toString()}
                        onChange={(option) => {
                          setFieldValue("organization", option);
                        }}
                        onBlur={handleBlur("organization")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <div className="modalheader">Status</div>
                  </Col>
                  <Col md={6}>
                    <RadioGroup
                      onChange={(e) =>
                        setFieldValue(
                          "status",
                          e.target.value === "true" ? true : false
                        )
                      }
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
                    <>Save</>
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
  AddCommonConfigurationCode: (data: AddCommonConfiguration) =>
    dispatch(AddCommonConfigurationCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssignDevices);
