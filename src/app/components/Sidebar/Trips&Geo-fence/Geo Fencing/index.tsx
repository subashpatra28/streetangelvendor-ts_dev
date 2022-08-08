import { Card, CardBody, Row, Col, Container } from "reactstrap";
import GeoFencingTab from "./Tab";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import AddGeoFence from "./Tab/Components/addGeoFence";
import Loc from "./Loc/index";
import { connect } from "react-redux";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import { RootState } from "../../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps>;

function GeoFencing(props: Props) {
  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-0">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
              <>
                <Row className="mb-4">
                  <Col sm={12} md={6} className="tripsname">
                    <div className="tabpage">
                      <>Geo Fencing</>
                    </div>
                  </Col>
                  <Col sm={12} md={6} className="pageEnd">
                    <AddGeoFence />
                  </Col>
                </Row>
              </>
              <CardBody className="tabAll">
                <GeoFencingTab />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor">
              <CardBody>
                <Loc />
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

export default connect(mapStateToProps)(GeoFencing);
