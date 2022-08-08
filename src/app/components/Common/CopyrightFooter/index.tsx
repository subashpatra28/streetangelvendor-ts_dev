import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
// import Paper from "@material-ui/core/Paper";

export default function CopyrightFooter() {
  return (
    <>
      <Row className="mt-2 ">
        <Col xl="12">
          <Card className="card-stats md-3 mb-xl-0 ">
            {/* <Paper elevation={6}> */}
              <CardBody className="copyrightfooter">
                Copyright Street Angel 2021
              </CardBody>
            {/* </Paper> */}
          </Card>
        </Col>
      </Row>
    </>
  );
}
