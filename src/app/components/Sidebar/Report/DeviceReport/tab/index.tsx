import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deviceReportColumns } from "../../../../../constants";
import { getDeviceReports } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { DeviceReport } from "../../../../../../global.types";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const DeviceReportTab = (props: Props) => {
  const [deviceReports, setDeviceReports] = useState<DeviceReport[]>([]);
  console.log("deviceReports", props);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.deviceReports?.result) {
      setDeviceReports(props.deviceReports.result);
    }
    return () => {};
  }, [props.deviceReports]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getDeviceReports();
    } catch (error) {
      console.log("error in DeviceReportsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={deviceReports}
        columns={deviceReportColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

//export default DeviceReportTab;
const mapStateToProps = (state: RootState) => ({
  deviceReports: state.dataStore.deviceReports,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDeviceReports: () => dispatch(getDeviceReports()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DeviceReportTab);
