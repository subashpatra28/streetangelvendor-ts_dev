import React from "react";
import { Card, Row, Col } from "reactstrap";
//@ts-expect-error
import Fade from "react-reveal/Fade";
import { dashboardButtonDetails1 } from "../../../../constants";

function DashboardButtonFinal() {
  return (
    <>
      <Fade left duration={3000}>
        <Row className="dashbtnroot mt-3">
          {dashboardButtonDetails1.map((item) => (
            <Col lg="6" xl="4" md="6" sm="6" className={item.classHead}>
              <Card className="card">
                <Row className="dashbtn dashHeight">
                  <Col className="info">
                    <h4 className="tex"> {item.infoName}</h4>
                    <h6 className="num">{item.infoNum}</h6>
                  </Col>
                  <Col sm={12} md={6} className="graph pageEnd">
                    {item.iconAssets}
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Fade>
    </>
  );
}

export default DashboardButtonFinal;
