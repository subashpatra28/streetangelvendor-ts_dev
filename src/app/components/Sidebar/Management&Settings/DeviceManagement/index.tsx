import React from "react";
import { Card, CardBody, Row, Col, Container, Button } from "reactstrap";
import DeviceManagementTab from "./tab";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import { connect } from "react-redux";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import Import from "./import";
import AddRole from "./tab/Components/deviceAddRole";
import { deviceManagmentDownloadColumns } from "../../../../constants";
import { CSVLink } from "react-csv";
import { RootState } from "../../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps>;

function DeviceManagement(props: Props) {
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
                    <>Device Management</>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd modmarg">
                  {props.devices &&
                  props.devices.result &&
                  props.devices.result.length ? (
                    <CSVLink
                      className="pagebtn pagebtnexcept"
                      filename={"deviceManagment-file.csv"}
                      data={props.devices.result}
                      headers={deviceManagmentDownloadColumns}
                    >
                      <span className="download_text">Download</span>
                    </CSVLink>
                  ) : null}
                  <Import />
                  <AddRole />
                </Col>
              </Row>
              <CardBody className="tabAll">
                <DeviceManagementTab />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CopyrightFooter />
      </Container>
    </div>
  );
}

//export default DeviceManagement;
const mapStateToProps = (state: RootState) => ({
  isLoading: state.generalSlice.isLoading,
  devices: state.devicesData.devices,
});

export default connect(mapStateToProps)(DeviceManagement);
