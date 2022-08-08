import { useEffect, useState } from "react";
import DataTable from "../../../../Common/DataTable";
import { toast } from "react-toastify";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { connect } from "react-redux";
import { getDriver } from "../../../../../redux/reducers/Management&Settings/driverManagement/driverManagement.actions";
import {
  Country,
  DriverActionBtns,
  driverColumns,
} from "../../../../../constants";
import { Driver } from "../../../../../../global.types";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const DriverManagementTab = (props: Props) => {
  const [driversList, setDriversList] =  useState<Driver[]>([]);

  console.log(props);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.drivers?.result) {
      setDriversList(props.drivers.result);
    }
    return () => {};
  }, [props.drivers]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getDriver();
    } catch (error) {
      console.log("error in DriverManagementTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <>
        <DataTable
          data={driversList}
          columns={driverColumns}
          bordered
          hover={true}
          responsive={true}
        />
      </>
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  drivers: state.driverData.drivers,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDriver: () => dispatch(getDriver())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverManagementTab);
