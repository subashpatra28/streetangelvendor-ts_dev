import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import CopyrightFooter from "../../Common/CopyrightFooter";
import { connect } from "react-redux";
import {
  endLoading,
  startLoading,
} from "../../../redux/reducers/general/general.actions";
import {
  getDialCode,
  getOrgList,
} from "../../../redux/reducers/dropdowns/dropdown.actions";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import DashBoardButton from "./DashBoardButtons";
import Loc from "./Loc/index";
import AdminNote from "./AdminNote";
import OrganizationSummary from "./OrganizationSummary";
import { getProject } from "../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { AppDispatch } from "../../../redux/store/store";
import { RootState } from "../../../redux/reducers/rootReducer";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function VendorDashBoard(props: Props) {
  const [selected, setSelected] = useState("change1");
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getOrgList();
      await props.getDialCodeList();
      await props.getProjectList();
    } catch (error) {
      console.log("error in vendor-dashboard api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <div className="dashboardMinDiv bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <div className="card-stats md-4 mb-xl-0 pb-1">
          <Row style={{ marginRight: "0px" }}>
            <Col sm={12} md={6} className="headwelcome headicon">
              <>Welcome, Hayashi</>
            </Col>
            <Col className="tabAll">
              <div className="app-actions">
                <button
                  type="button"
                  className={
                    selected === "change1" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change1")}
                >
                  Today
                </button>
                <button
                  type="button"
                  className={
                    selected === "change2" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change2")}
                >
                  Yesterday
                </button>
                <button
                  type="button"
                  className={
                    selected === "change3" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change3")}
                >
                  7 Days
                </button>
                <button
                  type="button"
                  className={
                    selected === "change4" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change4")}
                >
                  15 Days
                </button>
                <button
                  type="button"
                  className={
                    selected === "change5" ? "change1 active" : "change1"
                  }
                  onClick={() => setSelected("change5")}
                >
                  30 Days
                </button>
              </div>
            </Col>
          </Row>
          <Row className="mt-3" style={{ marginRight: "0px" }}>
            <Col>
              <DashBoardButton />
            </Col>
          </Row>
          <Card className="mt-3">
            <CardBody>
              <Row className="">
                <Col>
                  <Loc />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="mt-3">
            <CardBody>
              <Row className="">
                <Col>
                  <Loc />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="mt-3">
            <AdminNote />
          </Card>
          <Card className="mt-3">
            <Container className="mt--7" fluid>
              <Row className="mt-6">
                <Col>
                  <Row className="mb-4">
                    <Col sm={12} md={6} className="tripsname">
                      <div className="tabpage">
                        <>ORGANIZATION VEHICLE</>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card>
          <Card className="mt-3">
            <OrganizationSummary />
          </Card>
          <CopyrightFooter />
        </div>
      </Container>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  isLoading: state.generalSlice.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getDialCodeList: () => dispatch(getDialCode()),
  getProjectList: () => dispatch(getProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorDashBoard);
