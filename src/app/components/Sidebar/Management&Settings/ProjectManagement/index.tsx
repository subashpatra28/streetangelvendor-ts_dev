import { CSVLink } from "react-csv";
import { connect } from "react-redux";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { projectManagmentDownloadColumns } from "../../../../constants";
import { RootState } from "../../../../redux/reducers/rootReducer";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import Import from "./import";
import ProjectManagementTab from "./tab";
import AddProject from "./tab/Components/add/index";

type Props = ReturnType<typeof mapStateToProps>;

function ProjectManagement(props: Props) {
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
                    <>Project Management</>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd modmarg">
                  {props.projects &&
                  props.projects.result &&
                  props.projects.result.length ? (
                    <CSVLink
                      className="pagebtn pagebtnexcept"
                      filename={"projectManagment-file.csv"}
                      data={props.projects.result}
                      headers={projectManagmentDownloadColumns}
                    >
                      <span className="download_text">Download</span>
                    </CSVLink>
                  ) : null}
                  <Import />
                  <AddProject />
                </Col>
              </Row>
              <CardBody className="tabAll">
                <ProjectManagementTab />
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
  projects: state.projectData.project_mgmt,
});

export default connect(mapStateToProps)(ProjectManagement);
