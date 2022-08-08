import React from "react";
import { Card, CardBody, Row, Col, Container, Button } from "reactstrap";
import SupportTicketTab from "./SupportTicketTab";
import Import from "./Import";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import AddTicket from "./Tab/AddTicket/index";
import { connect } from "react-redux";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import { supportTicketDownloadColumns } from "../../../../constants";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { CSVLink } from "react-csv";
type Props = ReturnType<typeof mapStateToProps>;
function SupportTicket(props: Props) {
  console.log(">>>>>>>>>>suport", props);

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
                    <>Support Ticket</>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd modmarg">
                  {props.supportTickets &&
                  props.supportTickets.result &&
                  props.supportTickets.result.length ? (
                    <CSVLink
                      className="pagebtn pagebtnexcept"
                      filename={"supportTickets-file.csv"}
                      data={props.supportTickets.result}
                      headers={supportTicketDownloadColumns}
                    >
                      <span className="download_text">Download</span>
                    </CSVLink>
                  ) : null}
                  <Import />
                  <AddTicket />
                </Col>
              </Row>
              <CardBody className="tabAll">
                <SupportTicketTab />
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
  supportTickets: state.supportTicketsData.supportTickets,
});

export default connect(mapStateToProps)(SupportTicket);
