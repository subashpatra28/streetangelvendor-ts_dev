import React from "react";
import { Card, Row, Col, Button, Container } from "reactstrap";
import CommonConfigurationTab from "./tab";
import CopyrightFooter from "../../../../../../Common/CopyrightFooter";
import AssignDevices from "./tab/Components/add";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../../../routes/routes";
import FullPageLoaderModal from "../../../../../../Common/FullPageLoader/FullPageLoaderModal";
import { connect } from "react-redux";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps>;

function CommonConfiguration(props: Props) {
  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-0">
          <Col>
            <div className="card-stats md-4 mb-xl-0 pb-0 allPageTab">
              <Row className="mb-0">
                <Col sm={12} md={6} className="tripsname tabAll">
                  <Link to={ROUTES.ADD_CONFIGURATION} className="tabLink">
                    <Button className="commonBut">Add Configuration</Button>
                  </Link>
                </Col>
                <Col sm={12} md={6} className="pageEnd tabAll">
                  <AssignDevices />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 allPage">
              <>
                <Row>
                  <Col sm={{ size: "auto", offset: 0 }}>
                    <div className="driverdetailsnum">
                      <>Common Configuration Template</>
                    </div>
                  </Col>
                </Row>
                <br />
                <CommonConfigurationTab />
              </>
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
export default connect(mapStateToProps)(CommonConfiguration);
