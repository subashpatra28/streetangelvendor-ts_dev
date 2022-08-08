import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { RootState } from "../../../redux/reducers/rootReducer";
import CopyrightFooter from "../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import ToggleButton from "../../Common/ToggleButton";
import DeviceStatusTab from "./tab/tab";

type Props = ReturnType<typeof mapStateToProps>;

function DeviceStatus(props: Props) {
  const [online, setonline] = useState(true);

  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-6">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
              <Row className="mb-4">
                <Col sm={12} md={6} className="tripsname">
                  <div className="tabpage">
                    <>Device Status</>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd modmarg">
                  <Button className="accordbut pagebtnexcept">Download</Button>
                  <Button className="accordbut pagebtnexcept">
                    Request Video
                  </Button>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Row>
                    <Col sm={12} md={1} className="toggleBtnStyl">
                      <div className="driverdetailsnum">Offline</div>
                    </Col>
                    <Col sm={12} md={1} className="tripsname">
                    <ToggleButton
                      checked={online}
                      onClick={(value: boolean) => setonline(!online)}
                    />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <CardBody className="tabAll">
                <DeviceStatusTab />
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
  isLoading: state.generalSlice.isLoading
});

export default connect(mapStateToProps)(DeviceStatus);
