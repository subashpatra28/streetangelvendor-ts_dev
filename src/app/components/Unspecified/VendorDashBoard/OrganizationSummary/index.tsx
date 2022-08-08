import React from "react";
import { Card, CardBody, Row, Col, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import OrganizationTab from "./OrganizationTab";
import { RootState } from "../../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps>;

function OrganizationSummary(props: Props) {
  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-6">
          <Col>
            <Row className="mb-4">
              <Col sm={12} md={6} className="tripsname">
                <div className="tabpage">
                  <>Organization Summary</>
                </div>
              </Col>
            </Row>
            <CardBody className="tabAll">
              <OrganizationTab />
            </CardBody>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.generalSlice.isLoading,
});

export default connect(mapStateToProps)(OrganizationSummary);
