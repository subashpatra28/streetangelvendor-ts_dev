import React from "react";
import {
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { vendorButton } from "../../../../constants/index";

function DashBoardButton() {
  return (
    <>
      <Row>
        {vendorButton.map((item) => (
          <Col lg={6} sm={6} md={6} xl={4} className={item.classHead}>
            <div className="card-stats mb-4 mb-xl-0">
              <Button className={item.btnClass} block size="lg">
                <Row className="scorecardhoverbtn">
                  <Col className={item.icnClass}>{item.icon}</Col>
                  <Col sm="12" md={{ size: 1, offset: 0 }}>
                    <div className="tripsdetailnum">{item.num}</div>
                    <div className="tripsdetailtex tripsName">{item.tex}</div>
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

export default DashBoardButton;
