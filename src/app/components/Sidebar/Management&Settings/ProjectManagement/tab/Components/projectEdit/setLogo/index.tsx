import { useState } from "react";
import { Collapse, Row, Input, FormGroup, Form, Col } from "reactstrap";
import CustomInput from "../../../../../../../Common/CustomInput";

const SetLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Form>
      <FormGroup check>
        <Row>
          <Col>
            <Input
              autocomplete="disable"
              type="checkbox"
              color="primary"
              onClick={toggle}
            />

            <div className="modalheader">Set Logo</div>
          </Col>
        </Row>
        <Row>
          <Collapse isOpen={isOpen}>
            <Row>
              <Col md={4}>
                <div className="modalheader">Header Large Logo</div>
              </Col>
              <Col md={8}>
                <CustomInput />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}>
                <div className="modalheader">Header Small Logo</div>
              </Col>
              <Col md={8}>
                <CustomInput />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}>
                <div className="modalheader">Footer Large Logo</div>
              </Col>
              <Col md={8}>
                <CustomInput />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}>
                <div className="modalheader">Footer Small Logo</div>
              </Col>
              <Col md={8}>
                <CustomInput />
              </Col>
            </Row>
            <br />
          </Collapse>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default SetLogo;
