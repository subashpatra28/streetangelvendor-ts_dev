import { useEffect, useState } from "react";
import DataTable from "../../../../Common/DataTable";

import { connect } from "react-redux";
import { geoFencingColumns } from "../../../../../constants";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { getGeoFencing } from "../../../../../redux/reducers/Trips&GeoFence/geoFencing/geoFencing.actions";
import { AppDispatch } from "../../../../../redux/store/store";
import { GeoFencing } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const GeoFencingTab = (props: Props) => {
  const [geoFencingList, setGeoFencingList] = useState<GeoFencing[]>([]);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);
  useEffect(() => {
    setGeoFencingList([...(props.geoFencing.result ?? [])]);

    return () => {};
  }, [props.geoFencing]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getGeoFencing();
    } catch (error) {
      console.log("error in GeoFencingTab", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={geoFencingList}
        columns={geoFencingColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

//export default GeoFencingTab;
const mapStateToProps = (state: RootState) => ({
  geoFencing: state.geoFencingData.geoFencing,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getGeoFencing: () => dispatch(getGeoFencing()),
});
export default connect(mapStateToProps, mapDispatchToProps)(GeoFencingTab);
