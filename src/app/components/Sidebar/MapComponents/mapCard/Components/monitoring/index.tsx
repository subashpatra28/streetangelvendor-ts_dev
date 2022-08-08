import { Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Col, Row } from "reactstrap";
import { organizationReportValidationSchema } from "../../../../../../constants";
import { getOrgList } from "../../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../redux/reducers/general/general.actions";
import { getProject } from "../../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Monitoring(props: Props) {
  console.log("monitoringProps", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.orgList?.result) {
      await props.getOrgList();
    }
    if (!props.projects?.result) {
      await props.getProjectList();
    }
    props.endLoading();
  };
  return (
    <Row>
      <>
        <Formik
          validationSchema={organizationReportValidationSchema}
          enableReinitialize={true}
          initialValues={{
            organization: {},
            project: {},
            dateTimeYear: "",
          }}
          onSubmit={() => {}}
        >
          {({ handleBlur, setFieldValue }) => (
            <div className="modulcar mapCard driverScoreCardBody">
              <Col xl={4} md={4} sm={4} className="mapsDropLeft">
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
              <Col xl={4} md={4} sm={4} className="mapsDrop">
                <Select
                  className="dashboardMinDiv eventsFont hoverDrop"
                  menuPortalTarget={document.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  placeholder="Project"
                  options={props.projects?.result || []}
                  // value={""}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id.toString()}
                  onChange={(option) => setFieldValue("project", option)}
                  onBlur={handleBlur("project")}
                />
              </Col>
              <Col xl={4} md={4} sm={4} className="mapsDropRight">
                <Button block className="datewidth pagebtn datewidthmarglft ">
                  Filter
                </Button>
              </Col>
            </div>
          )}
        </Formik>
      </>
    </Row>
  );
}

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),

  // getDeviceList: () => dispatch(getDevices()),
  getProjectList: () => dispatch(getProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Monitoring);
