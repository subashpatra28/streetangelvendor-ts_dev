import { Card, Col, Row } from "reactstrap";
//@ts-expect-error
import Fade from "react-reveal/Fade";
import { dashboardButtonDetails } from "../../../../constants";

function DashboardButton() {
  return (
    <>
      <Fade left duration={3000}>
        <Row className="dashbtnroot mt-3">
          {dashboardButtonDetails.map((item) => (
            <Col lg="6" xl="3" md="6" sm="6" className={item.classHead}>
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

export default DashboardButton;
