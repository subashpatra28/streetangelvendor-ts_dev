import { Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Col, Row } from "reactstrap";
import { getOrgList } from "../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../redux/reducers/general/general.actions";

import { eventsVideosValidationSchema } from "../../../../../../constants";
import { getDevices } from "../../../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getProject } from "../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { AppDispatch } from "../../../../../../redux/store/store";
import { RootState } from "../../../../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LiveTracking(props: Props) {
  console.log("liveTrackingProps", props);
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
    <Row>
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
          <div className="modulcar mapCard driverScoreCardBody">
            <Col xl={3} md={3} sm={6} className="mapsDropLeft">
              <Select
                className="dashboardMinDiv eventsFont hoverDrop"
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

            <Col xl={3} md={3} sm={6} className="mapsDrop">
              <Select
                className="dashboardMinDiv eventsFont hoverDrop"
                menuPortalTarget={document.body}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                placeholder="Project"
                options={props.projects?.result ?? []}
                // value={""}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id.toString()}
                onChange={(option) => setFieldValue("project", option)}
                onBlur={handleBlur("project")}
              />
            </Col>

            <Col xl={3} md={3} sm={6} className="mapsDropRight">
              <Select
                className="dashboardMinDiv eventsFont hoverDrop"
                menuPortalTarget={document.body}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                placeholder="Vehicle Reg#"
                options={props.devices?.result ?? []}
                // value={""}
                getOptionLabel={(option) => option.vehicleRegestrationNo}
                getOptionValue={(option) => option.id.toString()}
                onChange={(option) => setFieldValue("Vehicle Reg", option)}
                onBlur={handleBlur("Vehicle Reg")}
              />
            </Col>
            <Col xl={3} md={3} sm={6} className="mapsDropRight">
              <Button className="pagebtn" block>
                Filter
              </Button>
            </Col>
          </div>
        )}
      </Formik>
    </Row>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LiveTracking);
