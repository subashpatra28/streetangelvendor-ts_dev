import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import CopyrightFooter from "../../Common/CopyrightFooter";
import { connect } from "react-redux";
import {
  endLoading,
  startLoading,
} from "../../../redux/reducers/general/general.actions";
import FullPageLoaderModal from "../../Common/FullPageLoader/FullPageLoaderModal";
import Loc from "./Loc";
import { RootState } from "../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function OpenStreetMap(props: Props) {
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  const apiCalls = async () => {
    try {
      props.startLoading();
    } catch (error) {
      console.log("error in open-street-map api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <div className="dashboardMinDiv bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container fluid>
        <div className="card-stats md-4 mb-xl-0 pb-1">
          <Row>
            <Loc />
          </Row>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenStreetMap);
