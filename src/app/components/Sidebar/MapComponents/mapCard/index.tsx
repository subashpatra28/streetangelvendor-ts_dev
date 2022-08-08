import { useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import Monitoring from "./Components/monitoring";
import LiveTracking from "./Components/liveTracking";
import VehicleJourney from "./Components/vehicleJourney";

function MapCard() {
  const [Selected, setSelected] = useState("Monitoring");

  return (
    <Row className="mt-0">
      <Col>
        <Card className="card-stats md-4 mb-xl-0 devi">
          <CardBody>
            <Row>
              <Col>
                <div className="HeaderLeft mapcardbtn">
                  <button
                    className={
                      Selected === "Monitoring"
                        ? "maptoggle active"
                        : "maptoggle"
                    }
                    onClick={() => setSelected("Monitoring")}
                  >
                    Monitoring
                  </button>
                  <button
                    className={
                      Selected === "LiveTracking"
                        ? "maptoggle active"
                        : "maptoggle"
                    }
                    onClick={() => setSelected("LiveTracking")}
                  >
                    Live Tracking
                  </button>
                  <button
                    className={
                      Selected === "VehicleJourney"
                        ? "maptoggle active"
                        : "maptoggle"
                    }
                    onClick={() => setSelected("VehicleJourney")}
                  >
                    Vehicle Journey
                  </button>
                </div>
              </Col>
            </Row>
            <br />
            {Selected === "Monitoring" && <Monitoring />}
            {Selected === "LiveTracking" && <LiveTracking />}
            {Selected === "VehicleJourney" && <VehicleJourney />}
            <br />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default MapCard;
