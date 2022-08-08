import React from "react";
import { Card, CardBody, Row, Col, Container } from "reactstrap";
import ActiveSafetyTab from "./tab";
import SelectEvents from "./setting";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps>;

function ActiveSafety(props: Props) {
  return (
    <div className="header header2 bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-0">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
              <Row className="mb-4">
                <Col sm={12} md={6} className="tripsname">
                  <div className="tabpage">
                    <> SA-AS - Street Angel-Active Safety</>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd">
                  <SelectEvents />
                </Col>
              </Row>
              <CardBody className="tabAll">
                <ActiveSafetyTab />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CopyrightFooter />
      </Container>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  isLoading: state.generalSlice.isLoading,
});

export default connect(mapStateToProps)(ActiveSafety);
