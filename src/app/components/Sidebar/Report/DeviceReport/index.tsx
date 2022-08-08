import { useEffect } from "react";
// import Paper from "@material-ui/core/Paper";
import { Formik } from "formik";
import { CSVLink } from "react-csv";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  deviceReportsDownloadColumns,
  eventsVideosValidationSchema,
} from "../../../../constants";
import { getOrgList } from "../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import DeviceReportTab from "./tab";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import { getProject } from "../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function DeviceReport(props: Props) {
  console.log("deviceReportProps", props);
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
    if (!props.projects.result) {
      await props.getProjectList();
    }
    props.endLoading();
  };

  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-6">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
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
                    <div className="mb-4">
                      <Row className="mb-4">
                        <Col sm={12} md={6} className="tripsname">
                          <div className="tabpage">
                            <>Device Report</>
                          </div>
                        </Col>
                        <Col sm={12} md={6} className="pageEnd">
                          {props.deviceReports &&
                          props.deviceReports.result &&
                          props.deviceReports.result.length ? (
                            <CSVLink
                              className="pagebtn pagebtnexcept"
                              filename={"DeviceReports-file.csv"}
                              data={props.deviceReports.result}
                              headers={deviceReportsDownloadColumns}
                            >
                              <span className="download_text">Download</span>
                            </CSVLink>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="exceptautocompletehead row orgTop mapsvehicleBottom">
                            <Col xs={3} md={3}>
                              <Select
                                className="dashboardMinDiv eventsFont dataForm"
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
                            <Col xs={3} md={3}>
                              <Select
                                className="dashboardMinDiv eventsFont"
                                placeholder="Project"
                                options={props.projects?.result ?? []}
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
                            <Col xs={3} md={3}>
                              <Select
                                className="dashboardMinDiv eventsFont"
                                placeholder="Vehicle Reg#"
                                options={props.devices?.result ?? []}
                                // value={""}
                                getOptionLabel={(option) =>
                                  option.vehicleRegestrationNo
                                }
                                getOptionValue={(option) =>
                                  option.id.toString()
                                }
                                onChange={(option) =>
                                  setFieldValue("Vehicle Reg", option)
                                }
                                onBlur={handleBlur("Vehicle Reg")}
                              />
                            </Col>
                            <Col xs={3} md={3}>
                              <Button className="pagefrmbtn" block>
                                Show Data
                              </Button>
                            </Col>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <CardBody className="tabAll">
                      <DeviceReportTab />
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
  deviceReports: state.dataStore.deviceReports,
  devices: state.devicesData.devices,
  isLoading: state.generalSlice.isLoading,
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getProjectList: () => dispatch(getProject()),
  getDeviceList: () => dispatch(getDevices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceReport);
