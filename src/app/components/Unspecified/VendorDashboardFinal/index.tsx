import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import CopyrightFooter from "../../Common/CopyrightFooter";
import { connect } from "react-redux";
import {
  endLoading,
  startLoading,
} from "../../../redux/reducers/general/general.actions";
import {
  getDialCode,
  getOrgList,
} from "../../../redux/reducers/dropdowns/dropdown.actions";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import DashboardButtonFinal from "./DashBoardButtons";
import HighEventsTab from "./HignEventTab";
import VehicleEvent from "./trips/tabComponents/vehicleEvent";
import Top10Drivers from "./top10Drivers";
import ProjectSplit from "./projectSplit";
import Trips from "./trips";
import { getProject } from "../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { AppDispatch } from "../../../redux/store/store";
import { RootState } from "../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function VendorDashBoardFinal(props: Props) {
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
      console.log("error in vendor-dashboard api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <div className="dashboardMinDiv bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <div className="card-stats md-4 mb-xl-0 pb-1">
          <Row style={{ marginRight: "0px" }}>
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
                >
                  7 Days
                </button>
                <button
                  type="button"
                  className={
                    selected === "change2" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change2")}
                >
                  15 Days
                </button>
                <button
                  type="button"
                  className={
                    selected === "change3" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change3")}
                >
                  30 Days
                </button>
              </div>
            </Col>
          </Row>
          <Row className="mt-3" style={{ marginRight: "0px" }}>
            <Col>
              <DashboardButtonFinal />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xl="12">
              <Card className="card-stats md-4 mb-xl-0 shadowCard">
                {/* <Paper elevation={6}> */}
                <CardBody className="cardbodyheader">
                  High Events
                  <HighEventsTab />
                </CardBody>
                {/* </Paper> */}
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xl="12">
              <Card className="card-stats md-4 mb-xl-0 shadowCard">
                <CardBody className="cardBodycolor">
                  <CardTitle className="cardheader1">
                    Top Devices with more trips & high distance travel Summary
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
          <Row className="mt-2 justify-content-start align-items-start">
            <Col className="col-lg-7 col-12 scoreRight">
              {/* <Fade left duration={2000}> */}
              <Card className="carddisplay">
                <CardBody className="mb-2 cardBodywidth">
                  <div className="cardheader1">
                    Top 10 Devices having more Out Of Range Videos
                  </div>
                  <div className="cardheaderDiv">
                    <Top10Drivers />
                  </div>
                </CardBody>
              </Card>
              {/* </Fade> */}
            </Col>
            <Col className="col-lg-5 col-12 scoreLeft">
              {/* <Fade right duration={2000}> */}
              <Card className="cardshadow">
                <CardBody className="mb-2" style={{ height: "750px" }}>
                  <CardTitle className="cardheader1">
                    Projectwise Devices
                  </CardTitle>
                  <div className="cardTitlediv">
                    <ProjectSplit />
                    <ProjectSplit />
                  </div>
                </CardBody>
              </Card>
              {/* </Fade> */}
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="col-12 scoreRight">
              {/* <Fade left duration={2000}> */}
              <Card className="carddisplay">
                <CardBody className="mb-2 cardBodywidth">
                  <div className="cardheader1">
                    Top 10 Drivers with more Trips, Distance Travel & Less High
                    Events
                  </div>
                  <div className="cardheaderDiv">
                    <Top10Drivers />
                  </div>
                </CardBody>
              </Card>
              {/* </Fade> */}
            </Col>
          </Row>
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
          <CopyrightFooter />
        </div>
      </Container>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  isLoading: state.generalSlice.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getDialCodeList: () => dispatch(getDialCode()),
  getProjectList: () => dispatch(getProject()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VendorDashBoardFinal);
