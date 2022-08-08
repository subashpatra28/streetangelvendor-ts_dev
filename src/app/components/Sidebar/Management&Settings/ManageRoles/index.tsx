import { CSVLink } from "react-csv";
import { connect } from "react-redux";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { manageRoleDownloadColumns } from "../../../../constants";
import { RootState } from "../../../../redux/reducers/rootReducer";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import Import from "./import";
import ManageRolesTab from "./tab";
import AddRole from "./tab/Components/addRole";

type Props = ReturnType<typeof mapStateToProps>;

function ManageRoles(props: Props) {
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
                    <> Role Management</>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd modmarg">
                  {props.manageRoles &&
                  props.manageRoles.result &&
                  props.manageRoles.result.length ? (
                    <CSVLink
                      className="pagebtn pagebtnexcept"
                      filename={"ManageRoles-file.csv"}
                      data={props.manageRoles.result}
                      headers={manageRoleDownloadColumns}
                    >
                      <span className="download_text">Download</span>
                    </CSVLink>
                  ) : null}
                  <Import />
                  <AddRole />
                </Col>
              </Row>
              <CardBody className="tabAll">
                <ManageRolesTab />
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
  manageRoles: state.manageRolesData.manageRoles,
});

export default connect(mapStateToProps)(ManageRoles);
