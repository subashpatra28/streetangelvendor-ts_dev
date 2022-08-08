import React from "react";
import { Container, CardBody, Col, Row, Card, CardTitle } from "reactstrap";
import CopyrightFooter from "../../../../../Common/CopyrightFooter";
import Score from "./Components/Score";
import FullPageLoaderModal from "../../../../../Common/FullPageLoader/FullPageLoaderModal";
import { connect } from "react-redux";
//@ts-expect-error
import Fade from "react-reveal/Fade";
import HarshEvents from "./Components/HarshEvents";
import HoursPerDay from "./Components/HoursPerDay";
import Journey from "./Components/Journey";
import Headcards from "./Components/HeadCards";
import { RootState } from "../../../../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps>;

function DriverScoreCard(props: Props) {
  return (
    <div className="dashboardMinDiv bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Fade right duration={2000}>
          <Headcards />
        </Fade>

        <div className="card-stats md-4 mb-xl-0 pb-1">
          <Row className="mt-2">
            <Col className="col-lg-6 col-12 col-xl-6 col-md-12 col-sm-12 tabAll scoreLeft">
              <Card className="driverScoreCards">
                <CardBody className="cardbody">
                  <CardTitle className="cardheader">Harsh Events</CardTitle>
                  <div className="driverScoreCardBody">
                    <HarshEvents />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-lg-6 col-12 col-xl-6 col-md-12 col-sm-12 tabAll scoreRight">
              <Card className="driverScoreCards">
                <CardBody className="cardbody">
                  <CardTitle className="cardheader">Hours Per Day</CardTitle>
                  <div className="driverScoreCardBody">
                    <HoursPerDay />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col className="col-lg-6 col-12 col-xl-6 col-md-12 col-sm-12 tabAll scoreLeft">
              <Card className="driverScoreCards">
                <CardBody className="cardbody">
                  <CardTitle className="cardheader">Score</CardTitle>
                  <div className="driverScoreCardBody">
                    <Score />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-lg-6 col-12 col-xl-6 col-md-12 col-sm-12 tabAll scoreRight">
              <Card className="driverScoreCards">
                <CardBody className="cardbody">
                  <CardTitle className="cardheader">Journey</CardTitle>
                  <div className="driverScoreCardBody">
                    <Journey />
                  </div>
                </CardBody>
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

export default connect(mapStateToProps)(DriverScoreCard);
