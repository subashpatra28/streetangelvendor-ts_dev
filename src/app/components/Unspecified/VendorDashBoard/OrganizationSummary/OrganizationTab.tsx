import { useState, useEffect } from "react";
import DataTable from "../../../Common/DataTable";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routes";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { getProject } from "../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { OrganizationSummary1 } from "../../../../constants";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import { ProjectType } from "../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const OrganizationTab = (props: Props) => {
  console.log("projectProps", props);
  const [projectsList, setProjectsList] = useState<ProjectType[]>([]);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.projects?.result) {
      setProjectsList(props.projects.result);
    }
    return () => {};
  }, [props.projects]);

  const apiCalls = async () => {
    props.startLoading();
    await props.getProject();
    props.endLoading();
  };

  return (
    <>
      <DataTable
        data={projectsList}
        columns={OrganizationSummary1}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  projects: state.projectData.projects,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getProject: () => dispatch(getProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationTab);
