import { DatePicker } from "antd";
import "antd/dist/antd.css";
// import SingularReportTable from "../LocationReportTab/LocationReportTab";
import { Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
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
import SingularReportTab from "./singularReportTab";
// import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function SingularReport(props: Props) {
  console.log("singular", props);
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
              <Col md={4}>
                <DatePicker className="dashboardMinDiv eventsBottom eventsFont borderWidt" />
              </Col>
              <Col md={4}>
                <Button
                  block
                  className="datewidth formBtn datewidthmarglft eventsBottom"
                >
                  Show Data
                </Button>
              </Col>
              <Col md={4}>
                <Button
                  block
                  className="datewidth formBtn datewidthmarglft eventsBottom"
                >
                  Download
                </Button>
              </Col>
              <br />
              <span className="text-center deviceId-span">
                Device ID : 357066062377528
              </span>
              <p className="text-center singular_note">
                *Note: Data is available in default interval of 30 seconds.
              </p>
            </Row>
          </div>
          <CardBody className="tabAll mt-4">
            <SingularReportTab />
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

export default connect(mapStateToProps, mapDispatchToProps)(SingularReport);
