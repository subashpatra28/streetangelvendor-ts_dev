import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { driverStatisticsColumns } from "../../../../constants/index";
import { getDriverStatistics } from "../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import DataTable from "../../../Common/DataTable/index";
import { DriverStatistics } from "../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const DriverStatisticsTab = (props: Props) => {
  const [driverStatisticsList, setDriverStatisticsList] = useState<
    DriverStatistics[]
  >([]);
  console.log("driverStatistics", props);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.driverStatistics?.result) {
      setDriverStatisticsList(props.driverStatistics.result);
    }
    return () => {};
  }, [props.driverStatistics]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getDriverStatistics();
    } catch (error) {
      console.log("error in DriverStatisticsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={driverStatisticsList}
        columns={driverStatisticsColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

//export default DriverStatisticsTab;

const mapStateToProps = (state: RootState) => ({
  driverStatistics: state.dataStore.driverStatistics,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDriverStatistics: () => dispatch(getDriverStatistics()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverStatisticsTab);
