import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import { LoginValidationSchema } from "../../../constants";

const Login = () => {
  return (
    <>
      <Container fluid style={{ padding: "0px", margin: "0px", width: "100%" }}>
        <Formik
          validationSchema={LoginValidationSchema}
          enableReinitialize={true}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={() => {}}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm,
            setFieldValue,
            values,
            touched,
            errors,
          }) => (
            <Row className="mt-0">
              <Col>
                <Card className="cardcolor allPage">
                  <Row
                    style={{ height: "100vh" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Col
                      md={4}
                      sm={6}
                      style={{
                        border: "1px solid grey",
                        padding: "20px",
                        boxShadow: "5px 5px 20px black",
                        borderRadius: "10px",
                        backgroundColor: "rgb(0 0 0 / 25%)",
                      }}
                    >
                      <h3
                        className="text-center mb-4"
                        style={{ color: "#fff" }}
                      >
                        Login
                      </h3>
                      <FormGroup className="dropinput">
                        <div
                          className="modalheader"
                          // @ts-expect-error
                          for="contactPersonName"
                        >
                          Email<span className="required"> *</span>
                        </div>
                        <Form>
                          <Field
                            className={
                              "form-control mt-3" +
                              (errors.email && touched.email
                                ? " is-invalid "
                                : "")
                            }
                            autocomplete="disable"
                            type="userEmail"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </Form>
                      </FormGroup>
                      <FormGroup className="dropinput mt-4">
                        <div className="modalheader">
                          Password<span className="required"> *</span>
                        </div>
                        <Form>
                          <Field
                            className={
                              "form-control mt-3" +
                              (errors.password && touched.password
                                ? " is-invalid "
                                : "") +
                              " passwordFont "
                            }
                            autocomplete="disable"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange("password")}
                            onBlur={handleBlur("password")}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback"
                          />
                        </Form>
                      </FormGroup>
                      <div className="text-center mt-4">
                        <Button
                          className="pagebtn mt-2"
                          // @ts-expect-error
                          onClick={handleSubmit}
                        >
                          <Label className="tableModalBtnHeight range">
                            Login
                          </Label>
                        </Button>
                        <Button
                          className="pagebtn mt-2"
                          // @ts-expect-error
                          onClick={resetForm}
                        >
                          <Label className="tableModalBtnHeight range">
                            Reset
                          </Label>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Login;
