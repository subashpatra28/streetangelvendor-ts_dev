import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "cdbreact";
import { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import EventReportTab from "./tab";

import { Formik } from "formik";
import { CSVLink } from "react-csv";
import {
  eventReportDownloadColumns,
  eventsVideosValidationSchema,
} from "../../../../constants";
import { getOrgList } from "../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import { getProject } from "../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function EventReport(props: Props) {
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
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-0">
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
                            <>Event Report</>
                          </div>
                        </Col>
                        <Col sm={12} md={6} className="pageEnd">
                          {props.eventReports &&
                          props.eventReports.result &&
                          props.eventReports.result.length ? (
                            <CSVLink
                              className="pagebtn pagebtnexcept"
                              filename={"EventReport-file.csv"}
                              data={props.eventReports.result}
                              headers={eventReportDownloadColumns}
                            >
                              <span className="download_text">Download</span>
                            </CSVLink>
                          ) : null}
                        </Col>
                      </Row>
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
                              onChange={(option) =>
                                setFieldValue("organization", option)
                              }
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
                              onChange={(option) =>
                                setFieldValue("project", option)
                              }
                              onBlur={handleBlur("project")}
                            />
                          </Col>
                          <Col xs={12} md={4}>
                            <Select
                              className="dashboardMinDiv eventsBottom eventsFont borderWidt"
                              placeholder="Vehicle Reg#"
                              options={props.devices?.result ?? []}
                              // value={""}
                              getOptionLabel={(option) =>
                                option.vehicleRegestrationNo
                              }
                              getOptionValue={(option) => option.id.toString()}
                              onChange={(option) =>
                                setFieldValue("Vehicle Reg", option)
                              }
                              onBlur={handleBlur("Vehicle Reg")}
                            />
                          </Col>
                          <Col xs={12} md={4}>
                            <DatePicker className="datewidth eventsBottom eventsdate" />
                          </Col>
                          <Col xs={12} md={4}>
                            <Button
                              block
                              className="datewidth formBtn datewidthmarglft eventsBottom"
                            >
                              Show Data
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <CardBody className="tabAll">
                      <EventReportTab />
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
  eventReports: state.dataStore.eventReports,
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

export default connect(mapStateToProps, mapDispatchToProps)(EventReport);
