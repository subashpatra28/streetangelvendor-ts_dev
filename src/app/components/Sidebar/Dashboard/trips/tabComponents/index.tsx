import React from "react";
//@ts-expect-error
import Fade from "react-reveal/Fade";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import CopyrightFooter from "../../../../Common/CopyrightFooter";
import HighEvents from "./highEvents";
import ReferBatteryVoltasGraph from "./referBatteryVoltage";
import TripsDetailButton from "./tripsDetailButton";
import TripsDetailMap from "./tripsDetailMap";

function TripsDetail() {
  return (
    <div className="dashboardMinDiv bg-gradient-info pb-1 pt-0 pt-md-8">
      <Container className="mt--7" fluid>
        <TripsDetailButton />
        <div className="card-stats md-4 mb-xl-0 pb-1">
          <Row className="mt-2">
            <Col className="col-lg-12 col-12 col-xl-12 col-md-12 col-sm-12 tabAll allPageTab">
              <Card className="driverScoreCards">
                <CardBody className="tabAll">
                  <div className="driverScoreCardBody">
                    <TripsDetailMap />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col className="col-lg-6 col-12 col-xl-6 col-md-12 col-sm-12 tabAll scoreLeft">
              <Fade left duration={3000}>
                <Card className="driverScoreCards">
                  <CardBody className="tabAll">
                    <CardTitle className="cardheader">High Events</CardTitle>
                    <div className="driverScoreCardBody">
                      <HighEvents />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
            <Col className="col-lg-6 col-12 col-xl-6 col-md-12 col-sm-12 tabAll scoreRight">
              <Fade right duration={3000}>
                <Card className="driverScoreCards">
                  <CardBody className="tabAll">
                    <CardTitle className="cardheader">
                      Refer Battery Voltas Graph
                    </CardTitle>
                    <div className="driverScoreCardBody">
                      <ReferBatteryVoltasGraph />
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

export default TripsDetail;
