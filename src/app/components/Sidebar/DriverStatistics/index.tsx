import { Formik } from "formik";
import { useEffect } from "react";
import { CSVLink } from "react-csv";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Card, Col, Container, Row } from "reactstrap";
import {
  driverStatisticsDownloadColumns,
  eventsVideosValidationSchema,
} from "../../../constants";
import { getOrgList } from "../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../redux/reducers/general/general.actions";
import { getDriver } from "../../../redux/reducers/Management&Settings/driverManagement/driverManagement.actions";
import { getProject } from "../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../redux/store/store";
import CopyrightFooter from "../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import DriverStatisticsTab from "./tab";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function DriverStatistics(props: Props) {
  console.log("driverStatisticsProps", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.orgList?.result) {
      await props.getOrgList();
    }
    if (!props.drivers?.result) {
      await props.getDriverList();
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
        <Formik
          validationSchema={eventsVideosValidationSchema}
          enableReinitialize={true}
          initialValues={{
            organization: {},
            project: {},
            driverManagementId: {},
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
              <Row className="mt-0">
                <Col>
                  <div className="card-stats md-4 mb-xl-0 ">
                    <Row>
                      <Col>
                        <div className="divborder">
                          <Col xs={12} md={3}>
                            <Select
                              className="dashboardMinDiv eventsFont"
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
                          <Col xs={12} md={3}>
                            <Select
                              className="dashboardMinDiv eventsFont"
                              placeholder="Projects"
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
                          <Col xs={12} md={3}>
                            <Select
                              className="dashboardMinDiv eventsFont"
                              placeholder="Driver Name"
                              options={props.drivers?.result ?? []}
                              // value={""}
                              getOptionLabel={(option) => option.name}
                              getOptionValue={(option) => option.id.toString()}
                              onChange={(option) =>
                                setFieldValue("driverManagementId", option)
                              }
                              onBlur={handleBlur("driverManagementId")}
                            />
                          </Col>
                          <Col xs={12} md={3}>
                            <Button
                              className="pagebtn eventsdate buttonShowData"
                              block
                            >
                              Show Data
                            </Button>
                          </Col>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="card-stats md-4 mb-xl-0 cardcolor">
                    <div className="cardmargin">
                      <Row className="mb-4">
                        <Col sm={12} md={6} className="tripsname">
                          <div className="modlabel modheadcont">
                            <>Driver Statistics</>
                          </div>
                        </Col>
                        <Col sm={12} md={6} className="pageEnd">
                          {props.driverStatistics &&
                          props.driverStatistics.result &&
                          props.driverStatistics.result.length ? (
                            <CSVLink
                              className="pagebtn pagebtnexcept"
                              filename={"HignEvent-file.csv"}
                              data={props.driverStatistics.result}
                              headers={driverStatisticsDownloadColumns}
                            >
                              <span className="download_text">Download</span>
                            </CSVLink>
                          ) : null}
                        </Col>
                      </Row>
                      <DriverStatisticsTab />
                    </div>
                  </Card>
                </Col>
              </Row>
              <CopyrightFooter />
            </>
          )}
        </Formik>
      </Container>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  driverStatistics: state.dataStore.driverStatistics,
  isLoading: state.generalSlice.isLoading,
  drivers: state.driverData.drivers,
  projects: state.projectData.projects,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getProjectList: () => dispatch(getProject()),
  getDriverList: () => dispatch(getDriver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverStatistics);
