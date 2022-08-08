import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Button,
  Container,
  FormGroup,
  Form,
} from "reactstrap";
import EditAccordion from "./accordion";
import CopyrightFooter from "../../../../../../../Common/CopyrightFooter";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../../../../routes/routes";

function EditConfiguration() {
  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <Container className="mt--5" fluid>
        <Row className="mt-0">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
              <div className="mb-4">
                <Row className="mb-4">
                  <Col sm={12} md={6} className="tripsname">
                    <div className="tabpage">
                      <>Common Configuration</>
                    </div>
                  </Col>
                  <Col sm={12} md={6} className="pageEnd">
                    <Link to={ROUTES.EDIT_CONFIGURATION} className="linkCol">
                      <Button className="accordbut">Save</Button>
                    </Link>
                  </Col>
                </Row>
                <Form className="accordform">
                  <Row>
                    <Col md={6}>
                      <FormGroup className="accordtextinput">
                        <Input
                          autocomplete="disable"
                          className="accordinp"
                          // @ts-expect-error
                          type="name"
                          name="name"
                          id="Name"
                          placeholder="Name"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="accordtextinput">
                        <Input
                          autocomplete="disable"
                          className="accordinp"
                          // @ts-expect-error
                          type="description"
                          name="description"
                          id="Description"
                          placeholder="Description"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
              <CardBody className="tabAll mb-4">
                <EditAccordion />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CopyrightFooter />
      </Container>
    </div>
  );
}

export default EditConfiguration;
