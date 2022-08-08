import { useState } from "react";
import { connect } from "react-redux";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  endLoading,
  startLoading,
} from "../../../redux/reducers/general/general.actions";
import CopyrightFooter from "../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import LocationReportData from "../LocationReport/LocationReportTab";
import SingularReportTab from "./SingularReportTab";
import { RootState } from "../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LocationTab(props: Props) {
  const [Selected, setSelected] = useState("LocationReport");

  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-0">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 devi">
              <CardBody>
                <div className="mb-4">
                  <Row className="mb-4">
                    <Col sm={12} md={6} className="tripsname">
                      <div className="tabpage">
                        <>Location Report</>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col md={12}>
                    <div className="HeaderLeft mapcardbtn">
                      <button
                        className={
                          Selected === "LocationReport"
                            ? "maptoggle active"
                            : "maptoggle"
                        }
                        onClick={() => setSelected("LocationReport")}
                      >
                        Location Report
                      </button>
                      <button
                        className={
                          Selected === "SingularReport"
                            ? "maptoggle active"
                            : "maptoggle"
                        }
                        onClick={() => setSelected("SingularReport")}
                      >
                        Singular Report
                      </button>
                    </div>
                  </Col>
                </Row>
                <br />
                {Selected === "LocationReport" && <LocationReportData />}
                {Selected === "SingularReport" && <SingularReportTab />}
                <br />
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
  dropdowns: state.dropdownList.dropdowns,
  isLoading: state.generalSlice.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationTab);
