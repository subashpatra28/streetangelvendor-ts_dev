import React from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import MapCard from "./mapCard";
import CopyrightFooter from "../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import { connect } from "react-redux";
import { RootState } from "../../../redux/reducers/rootReducer";
import Loc from "./loc";

type Props = ReturnType<typeof mapStateToProps>;

function Map(props: Props) {
  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <MapCard />
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

export default connect(mapStateToProps)(Map);
