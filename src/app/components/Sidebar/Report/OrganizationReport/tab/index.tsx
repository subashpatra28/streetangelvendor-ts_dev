import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { organizationReportColumns } from "../../../../../constants";
import { getOrganizationReports } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import { OrganizationReport } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const OrganizationReportTab = (props: Props) => {
  console.log("organizationReports", props);
  const [organizationReports, setOrganizationReports] = useState<
    OrganizationReport[]
  >([]);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.organizationReports?.result) {
      setOrganizationReports(props.organizationReports.result);
    }
    return () => {};
  }, [props.organizationReports]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getOrganizationReports();
    } catch (error) {
      console.log("error in organizationReportsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={organizationReports}
        columns={organizationReportColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  organizationReports: state.dataStore.organizationReports,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrganizationReports: () => dispatch(getOrganizationReports()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationReportTab);
