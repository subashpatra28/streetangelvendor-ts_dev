import {useEffect, useState} from "react";
import DataTable from "../../../Common/DataTable";
import { connect } from "react-redux";
import { endLoading, startLoading } from "../../../../redux/reducers/general/general.actions";
import { deviceStatusColumns } from "../../../../constants";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import { getDeviceStatus } from "../../../../redux/reducers/DataReducer/data.actions";
import { GetDeviceStatus as GetDeviceStatusType } from "../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
const DeviceStatusTab = (props: Props) => {
  const [deviceStatusList, setDeviceStatusList] = useState<
    GetDeviceStatusType[]
  >([]);
  console.log("deviceStatusList", props);

   useEffect(() => {
     apiCalls();
     return () => {};
   }, []);
   useEffect(() => {
    //  if (Object.keys(props.deviceStatus).length && props.deviceStatus.result) {
    //    setDeviceStatusList(props.deviceStatus.result);
    //  }
      if (props.deviceStatus?.result) {
        setDeviceStatusList(props.deviceStatus.result);
      }
     return () => {};
   }, [props.deviceStatus]);

  //  const apiCalls = async () => {
  //    try {
  //      props.startLoading();
  //      if (
  //        !Object.keys(props.deviceStatus).length ||
  //        !props.deviceStatus.result.length
  //      )
  //        await props.getDeviceStatus();
  //    } catch (error) {
  //      console.log("error in DeviceStatusTab", error);
  //    } finally {
  //      await props.endLoading();
  //    }
  //  };
    const apiCalls = async () => {
      try {
        props.startLoading();
        await props.getDeviceStatus();
      } catch (error) {
        console.log("error in DeviceStatusTab api", error);
      } finally {
        await props.endLoading();
      }
    };

  return (
    <>
      <DataTable
        data={deviceStatusList}
        columns={deviceStatusColumns}
        bordered
        hover={true}
        responsive={true}
      />
      </>
  );
};

const mapStateToProps = (state: RootState) => ({
  deviceStatus: state.dataStore.deviceStatus
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDeviceStatus: () => dispatch(getDeviceStatus())
});
export default connect(mapStateToProps, mapDispatchToProps)(DeviceStatusTab);
