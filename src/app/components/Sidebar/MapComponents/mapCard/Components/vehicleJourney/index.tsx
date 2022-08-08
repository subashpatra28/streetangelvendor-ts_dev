import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Col, Input, Row } from "reactstrap";
import { eventsVideosValidationSchema } from "../../../../../../constants";
import { getOrgList } from "../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getProject } from "../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../redux/store/store";

const { RangePicker } = DatePicker;

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function VehicleJourney(props: Props) {
  console.log("vehicleJourneyProps", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.orgList?.result) {
      await props.getOrgList();
    }
    if (!props.devices?.result) {
      await props.getDeviceList();
    }
    if (!props.projects?.result) {
      await props.getProjectList();
    }
    props.endLoading();
  };
  return (
    <Row className="table-fixed">
      <Formik
        validationSchema={eventsVideosValidationSchema}
        enableReinitialize={true}
        initialValues={{
          vehicleReg: {},
          organization: {},
          project: {},
          dateTimeYear: "",
        }}
        onSubmit={() => {}}
      >
        {({ handleBlur, setFieldValue }) => (
          <>
            <div
              className="modulcar mapCard driverScoreCardBody "
              style={{ alignItems: "flex-start" }}
            >
              <Col xl={4} md={4} sm={4} className="mapsDropLeft">
                <Select
                  className=" eventsFont hoverDrop hoverDrop"
                  menuPortalTarget={document.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  placeholder="Organization"
                  options={props.dropdowns.orgList?.result || []}
                  // value={""}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id.toString()}
                  onChange={(option) => setFieldValue("organization", option)}
                  onBlur={handleBlur("organization")}
                />
              </Col>
              <Col xl={4} md={4} sm={4} className="mapsDrop">
                <Select
                  menuPortalTarget={document.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  className=" eventsFont hoverDrop hoverDrop"
                  placeholder="Project"
                  options={props.projects?.result ?? []}
                  // value={""}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id.toString()}
                  onChange={(option) => setFieldValue("project", option)}
                  onBlur={handleBlur("project")}
                />
              </Col>
              <Col xl={4} md={4} sm={4} className="mapsDropRight">
                <Select
                  menuPortalTarget={document.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  className=" eventsFont hoverDrop hoverDrop"
                  placeholder="Vehicle Reg#"
                  options={props.devices?.result ?? []}
                  // value={""}
                  getOptionLabel={(option) => option.vehicleRegestrationNo}
                  getOptionValue={(option) => option.id.toString()}
                  onChange={(option) => setFieldValue("Vehicle Reg", option)}
                  onBlur={handleBlur("Vehicle Reg")}
                />
              </Col>
              <Col xl={5} md={5} sm={5} className="mapsDropLeft mt-2">
                <RangePicker
                  className="datewidth w-100"
                  showTime={{ format: "HH:mm:ss" }}
                  format="DD-MM-YYYY HH:mm:ss"
                />
              </Col>
              <Col xl={4} md={4} sm={4} className="mapsDrop mt-2">
                <Input
                  autocomplete="disable"
                  placeholder="2"
                  style={{ width: "100%", height: "32px" }}
                />
                <span className="mapspan">
                  * Accuracy is in seconds and it is interval between two GPS
                  location.
                </span>
              </Col>
              <Col xl={3} md={3} sm={3} className="mapsDropRight mt-2">
                <Button className="pagebtn" block>
                  Filter
                </Button>
              </Col>
            </div>
          </>
        )}
      </Formik>
    </Row>
  );
}

//export default VehicleJourney;
const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  projects: state.projectData.projects,
  devices: state.devicesData.devices,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getProjectList: () => dispatch(getProject()),
  getDeviceList: () => dispatch(getDevices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleJourney);
