import React from "react";
import { Card, CardBody, Row, Col, Container, Button } from "reactstrap";
import DriverManagementTab from "./tab";
import Import from "./import";
import AddDriver from "./tab/Components/driverAdd/index";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import { connect } from "react-redux";
import { driverManagmentDownloadColumns } from "../../../../constants";
import { CSVLink } from "react-csv";
import { RootState } from "../../../../redux/reducers/rootReducer";
type Props = ReturnType<typeof mapStateToProps>;

function DriverManagement(props: Props) {
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
                    <>Driver Management</>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd modmarg">
                  {props.drivers &&
                  props.drivers.result &&
                  props.drivers.result.length ? (
                    <CSVLink
                      className="pagebtn pagebtnexcept"
                      filename={"driverManagment-file.csv"}
                      data={props.drivers.result}
                      headers={driverManagmentDownloadColumns}
                    >
                      <span className="download_text">Download</span>
                    </CSVLink>
                  ) : null}
                  <Import />
                  <AddDriver />
                </Col>
              </Row>
              <CardBody className="tabAll">
                <DriverManagementTab />
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
  drivers: state.driverData.drivers,
});

export default connect(mapStateToProps)(DriverManagement);
