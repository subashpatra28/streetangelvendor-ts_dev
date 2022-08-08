import React from "react";
import { Row, Col, Button } from "reactstrap";
import { driverDetails } from "../../../../../../../constants";

function Headcards() {
  return (
    <>
      <Row>
        {driverDetails.map((item) => ( 
        <Col lg={6} sm={6} md={6} xl={4} className={item.classHead}>
          <div className="card-stats mb-4 mb-xl-0 devi">
            <Button className={item.classColor} size="lg" block>
              <Row className="scorecardhoverbtn">
                <Col className={item.classIconColor}>
                  {item.icon}
                </Col>
                <Col sm="12" md={{ size: 1, offset: 0 }}>
                  <div className="driverdetailsnum tripsName">
                   {item.contentParent}
                  </div>

                  <div className="tripsdetailtex tripsName">{item.contentChild}</div>
                </Col>
              </Row>
            </Button>
          </div>
        </Col>
        ))}
      </Row>
    </>
  );
}

export default Headcards;
