import { Formik } from "formik";
import { useEffect } from "react";
import { CSVLink } from "react-csv";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  organizationReportDownloadColumns,
  organizationReportValidationSchema,
} from "../../../../constants";
import { getOrgList } from "../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { getProject } from "../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import OrganizationReportTab from "./tab";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function OrganizationReport(props: Props) {
  console.log("organizationReportProps", props);
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
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-0">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
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
                    <div className="mb-4">
                      <Row className="mb-4">
                        <Col sm={12} md={6} className="tripsname">
                          <div className="tabpage">
                            <>Organization Report</>
                          </div>
                        </Col>
                        <Col sm={12} md={6} className="pageEnd">
                          {props.organizationReports &&
                          props.organizationReports.result &&
                          props.organizationReports.result.length ? (
                            <CSVLink
                              className="pagebtn pagebtnexcept"
                              filename={"OrganizationReports-file.csv"}
                              data={props.organizationReports.result}
                              headers={organizationReportDownloadColumns}
                            >
                              <span className="download_text">Download</span>
                            </CSVLink>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="exceptautocompletehead row orgTop mapsvehicleBottom">
                            <Col xl={4} md={4} sm={4} className="mapsDropLeft">
                              <Select
                                className="dashboardMinDiv eventsFont "
                                menuPortalTarget={document.body}
                                styles={{
                                  menuPortal: (base) => ({
                                    ...base,
                                    zIndex: 9999,
                                  }),
                                }}
                                placeholder="Organization"
                                options={props.dropdowns.orgList?.result || []}
                                // value={""}
                                getOptionLabel={(option) => option.name}
                                getOptionValue={(option) =>
                                  option.id.toString()
                                }
                                onChange={(option) =>
                                  setFieldValue("organization", option)
                                }
                                onBlur={handleBlur("organization")}
                              />
                            </Col>
                            <Col xl={4} md={4} sm={4} className="mapsDrop">
                              <Select
                                className="dashboardMinDiv eventsFont "
                                menuPortalTarget={document.body}
                                styles={{
                                  menuPortal: (base) => ({
                                    ...base,
                                    zIndex: 9999,
                                  }),
                                }}
                                placeholder="Project"
                                options={props.projects?.result || []}
                                // value={""}
                                getOptionLabel={(option) => option.name}
                                getOptionValue={(option) =>
                                  option.id.toString()
                                }
                                onChange={(option) =>
                                  setFieldValue("project", option)
                                }
                                onBlur={handleBlur("project")}
                              />
                            </Col>
                            <Col xl={4} md={4} sm={4} className="mapsDropRight">
                              <Button className="pagefrmbtn" block>
                                Show Data
                              </Button>
                            </Col>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <CardBody className="tabAll">
                      <OrganizationReportTab />
                    </CardBody>
                  </>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
        <CopyrightFooter />
      </Container>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  organizationReports: state.dataStore.organizationReports,
  isLoading: state.generalSlice.isLoading,
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),

  // getDeviceList: () => dispatch(getDevices()),
  getProjectList: () => dispatch(getProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationReport);
