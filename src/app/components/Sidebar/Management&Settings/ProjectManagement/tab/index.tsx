import { useEffect, useState } from "react";
import DataTable from "../../../../Common/DataTable";
import { connect } from "react-redux";
import { ProjectMgMtType } from "../../../../../../global.types";
import { projectColumns } from "../../../../../constants";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { getProjectMgmt } from "../../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ProjectManagementTab = (props: Props) => {
  console.log("projectProps", props);
  const [projectsList, setProjectsList] = useState<ProjectMgMtType[]>([]);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    setProjectsList([...(props.projects.result ?? [])]);

    return () => {};
  }, [props.projects]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getProject();
    } catch (error) {
      console.log("error in project Tab api", error);
    } finally {
      await props.endLoading();
    }

    props.endLoading();
  };

  return (
    <>
      <DataTable
        data={projectsList}
        columns={projectColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  projects: state.projectData.project_mgmt,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getProject: () => dispatch(getProjectMgmt()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectManagementTab);
