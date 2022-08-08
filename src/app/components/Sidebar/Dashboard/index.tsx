import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import CopyrightFooter from "../../Common/CopyrightFooter";
import DashboardButton from "./dashboardButton";
import HighEvents from "./highEvents";
import ProjectSplit from "./projectSplit";
import Top10Drivers from "./top10Drivers";
import Trips from "./trips";
import VehicleEvent from "./trips/tabComponents/vehicleEvent";
// import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import {
  getDialCode,
  getOrgList,
} from "../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../redux/reducers/general/general.actions";
import RequestedVideo from "../Events&Videos/RequestedVideo/tab";
//@ts-expect-error
import Fade from "react-reveal/Fade";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import { getProject } from "../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { AppDispatch } from "../../../redux/store/store";
import { RootState } from "../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Dashboard(props: Props) {
  const [selected, setSelected] = useState("change1");
  const [vehicleSelected, setVehicleSelected] = useState("change1");
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getOrgList();
      await props.getDialCodeList();
      await props.getProjectList();
    } catch (error) {
      console.log("error in dashboard api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <div className="dashboardMinDiv bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <div className="card-stats md-4 mb-xl-0 pb-1">
          <Row>
            <Col sm={12} md={6} className="headwelcome headicon">
              <>Welcome, Hayashi</>
            </Col>
            <Col className="tabAll">
              <div className="app-actions">
                <button
                  type="button"
                  className={
                    selected === "change1" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change1")}
                  // active={selected === "change1"}
                >
                  7 Days
                </button>
                <button
                  type="button"
                  className={
                    selected === "change2" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change2")}
                  // active={selected === "change2"}
                >
                  15 Days
                </button>
                <button
                  type="button"
                  className={
                    selected === "change3" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change3")}
                  // active={selected === "change3"}
                >
                  30 Days
                </button>
              </div>
            </Col>
          </Row>

          <DashboardButton />

          <Fade right duration={2000}>
            <Row className="mt-2">
              <Col xl="12">
                <Card className="card-stats md-4 mb-xl-0 shadowCard">
                  {/* <Paper elevation={6}> */}
                  <CardBody className="cardbodyheader">
                    High Events
                    <HighEvents />
                  </CardBody>
                  {/* </Paper> */}
                </Card>
              </Col>
            </Row>
          </Fade>

          <Fade right duration={2000}>
            <Row className="mt-2">
              <Col xl="12">
                <Card className="card-stats mb-4 mb-xl-0 shadowCard">
                  {/* <Paper elevation={6}> */}
                  <CardBody className="cardbodyheader">
                    Requested Video
                    <RequestedVideo />
                  </CardBody>
                  {/* </Paper> */}
                </Card>
              </Col>
            </Row>
          </Fade>

          <Fade right duration={2000}>
            <Row className="mt-2">
              <Col xl="12">
                <Card className="card-stats md-4 mb-xl-0 shadowCard">
                  {/* <Paper elevation={6}> */}
                  <CardBody className="cardbodyheader">
                    Trips
                    <Trips />
                  </CardBody>
                  {/* </Paper> */}
                </Card>
              </Col>
            </Row>
          </Fade>

          <Fade left duration={2000}>
            <Row className="mt-2">
              <Col xl="12">
                <Card className="card-stats md-4 mb-xl-0 shadowCard">
                  <CardBody className="cardBodycolor">
                    <CardTitle className="cardheader1">
                      Vehicle Event Exception Summary
                    </CardTitle>
                    <Col className="mt-2 tripsname tabAll" sm={12} md={6}>
                      <div className="app-actions">
                        <button
                          type="button"
                          className={
                            vehicleSelected === "change1"
                              ? "change1 active"
                              : "change1"
                          }
                          onClick={() => setVehicleSelected("change1")}
                          // active={selected === "change1"}
                        >
                          Trips
                        </button>
                        <button
                          type="button"
                          className={
                            vehicleSelected === "change2"
                              ? "change1 active"
                              : "change1"
                          }
                          onClick={() => setVehicleSelected("change2")}
                          // active={selected === "change2"}
                        >
                          Distance
                        </button>
                        <button
                          type="button"
                          className={
                            vehicleSelected === "change3"
                              ? "change1 active"
                              : "change1"
                          }
                          onClick={() => setVehicleSelected("change3")}
                          // active={selected === "change3"}
                        >
                          High Events
                        </button>
                      </div>
                    </Col>
                    <VehicleEvent />
                  </CardBody>
                  {/* </Paper> */}
                </Card>
              </Col>
            </Row>
          </Fade>

          <Row className="mt-2">
            <Col className="col-lg-5 col-12 scoreLeft">
              <Fade right duration={2000}>
                <Card className="cardshadow">
                  <CardBody className="mb-2 cardBodyheight">
                    <CardTitle className="cardheader1">Project Split</CardTitle>
                    <div className="cardTitlediv">
                      <ProjectSplit />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
            <Col className="col-lg-7 col-12 scoreRight">
              <Fade left duration={2000}>
                <Card className="carddisplay">
                  <CardBody className="mb-2 cardBodywidth">
                    <div className="cardheader1">Top 10 Drivers</div>
                    <div className="cardheaderDiv">
                      <Top10Drivers />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>
          <CopyrightFooter />
        </div>
      </Container>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  state,
  isLoading: state.generalSlice.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getDialCodeList: () => dispatch(getDialCode()),
  getProjectList: () => dispatch(getProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
