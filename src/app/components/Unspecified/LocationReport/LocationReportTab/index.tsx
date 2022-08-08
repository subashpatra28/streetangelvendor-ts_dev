import "antd/dist/antd.css";
import { Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, CardBody, Col, Row } from "reactstrap";
import { eventsVideosValidationSchema } from "../../../../constants";
import { getOrgList } from "../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getProject } from "../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import LocationReportDataTable from "../LocationReportTab/LocationReportTab";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LocationReportData(props: Props) {
  console.log("highProps", props);
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
          <div className="autocompletehead">
            <Row>
              <Col xs={12} md={6}>
                <Select
                  className="dashboardMinDiv eventsBottom eventsFont borderWidt"
                  placeholder="Organization"
                  options={props.dropdowns.orgList?.result || []}
                  // value={""}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id.toString()}
                  onChange={(option) => setFieldValue("organization", option)}
                  onBlur={handleBlur("organization")}
                />
              </Col>
              <Col xs={12} md={6}>
                <Select
                  className="dashboardMinDiv eventsBottom eventsFont borderWidt"
                  placeholder="Project"
                  options={props.projects?.result ?? []}
                  // value={""}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id.toString()}
                  onChange={(option) => setFieldValue("project", option)}
                  onBlur={handleBlur("project")}
                />
              </Col>
              <Col xs={12} md={4}>
                <Select
                  className="dashboardMinDiv eventsBottom eventsFont borderWidt"
                  placeholder="Vehicle Reg#"
                  options={props.devices?.result ?? []}
                  //  // value={""}
                  getOptionLabel={(option) => option.vehicleRegestrationNo}
                  getOptionValue={(option) => option.deviceId.toString()}
                  onChange={(option) => setFieldValue("Vehicle Reg", option)}
                  onBlur={handleBlur("Vehicle Reg")}
                />
              </Col>
              <Col xs={12} md={4}>
                <Button
                  block
                  className="datewidth formBtn datewidthmarglft eventsBottom"
                >
                  Show Data
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button
                  block
                  className="datewidth formBtn datewidthmarglft eventsBottom"
                >
                  Download
                </Button>
              </Col>
            </Row>
          </div>
          <CardBody className="tabAll mt-4">
            <LocationReportDataTable />
          </CardBody>
        </>
      )}
    </Formik>
  );
}

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  isLoading: state.generalSlice.isLoading,
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationReportData);
