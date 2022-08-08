import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Device, Driver } from "../../../../../../global.types";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getDriver } from "../../../../../redux/reducers/Management&Settings/driverManagement/driverManagement.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import DeviceDelete from "./Components/deviceDelete";
import DeviceEdit from "./Components/deviceEdit";
import DeviceView from "./Components/deviceView";
import DeviceSettings from "./Components/settings";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const DeviceManagementTab = (props: Props) => {
  const [driversDropdownList, setDriversDropdownList] = useState<Driver[]>([]);
  const [devicesList, setDevicesList] = useState<Device[]>([]);
  const DeviceActionBtns = ({ data }: { data: Device }) => {
    return (
      <div className="imptabbody">
        <DeviceSettings data={data} />
        <DeviceView data={data} />
        <DeviceEdit data={data} />
        <DeviceDelete data={data} />
      </div>
    );
  };
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  // useEffect(() => {
  //    if (Object.keys(props.drivers).length && props.drivers.result) {
  //      setDriversDropdownList(props.drivers.result);
  //    }
  //    return () => {};
  // }, [props.drivers]);
  useEffect(() => {
    setDevicesList([...(props.devices.result ?? [])]);

    return () => {};
  }, [props.devices]);
  useEffect(() => {
    setDriversDropdownList([...(props.drivers.result ?? [])]);

    return () => {};
  }, [props.drivers]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getDriver();
      await props.getDevices();
    } catch (error) {
      console.log("error in DeviceManagementTab", error);
    } finally {
      await props.endLoading();
    }
    // setTimeout(() => props.endLoading(), 1000);
  };

  const columns = [
    { title: "No:", data: "id" },
    {
      title: "Action",
      format: (data: Device) => <DeviceActionBtns data={data} />,
    },
    { title: "Project", data: "driverManagement.name" },
    { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
    { title: "Device ID", data: "deviceId" },
    { title: "Date Time", data: "createdDate" },
    { title: "Driver Name", data: "driverManagement.name" },
    { title: "Status", format: (data: Device) => <>{data.status + ""}</> },
  ];

  return (
    <>
      <>
        <DataTable
          data={devicesList}
          columns={columns}
          bordered
          hover={true}
          responsive={true}
        />
      </>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  devices: state.devicesData.devices,
  drivers: state.driverData.drivers,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDevices: () => dispatch(getDevices()),
  getDriver: () => dispatch(getDriver()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceManagementTab);
