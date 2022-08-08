import React from "react";
import { Card, CardBody, Row, Col, Button, Container } from "reactstrap";
import CommonConfigAccordion from "./accordion";
import CopyrightFooter from "../../../../../Common/CopyrightFooter";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../../routes/routes";

function CommonConfig() {
  return (
    <div className="header bg-gradient-info pb-2 pt-0 pt-md-8">
      <Container className="mt--5" fluid>
        <Row className="mt-0">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
              <div className="mb-2">
                <Row className="mb-4">
                  <Col sm={12} md={6} className="tripsname">
                    <div className="tabpage">Common Configuration</div>
                  </Col>
                  <Col sm={12} md={6} className="pageEnd tabSet">
                    <Link to={ROUTES.COMMON_CONFIGURATION} className="tabLink">
                      <Button className="pagebtn">Manage Template</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <CardBody className="tabAll mb-5">
                <CommonConfigAccordion />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CopyrightFooter />
      </Container>
    </div>
  );
}

export default CommonConfig;
