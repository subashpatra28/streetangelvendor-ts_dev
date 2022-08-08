import { useEffect, useState } from "react";
import DataTable from "../../../../Common/DataTable";
import { toast } from "react-toastify";

import { getResourceRoleList } from "../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { connect } from "react-redux";
import { getManageRoles } from "../../../../../redux/reducers/Management&Settings/manageRoles/manageRoles.actions";
import EditRole from "./Components/editRole";
import ViewRole from "./Components/viewRole";
import Delete from "./Components/delete";
import { AppDispatch } from "../../../../../redux/store/store";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { Role } from "../../../../../../global.types";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ManageRolesTab = (props: Props) => {
  const [manageRolesList, setManageRolesList] = useState<Role[]>([]);

  const ActionBtns = (data: { data: Role }) => {
    return (
      <div className="imptabbody">
        <ViewRole data={data.data} />
        <EditRole data={data.data} />
        <Delete data={data.data} />
      </div>
    );
  };

  useEffect(() => {
    apiCalls();
  }, []);
  useEffect(() => {
    setManageRolesList([...(props.manageRoles.result ?? [])]);
    return () => {};
  }, [props.manageRoles]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getManageRoles();
      await props.getResourceRoleList();
    } catch (error) {
      console.log("error in ManageRoles Tab api", error);
    } finally {
      await props.endLoading();
    }
  };

  const columns = [
    { title: "Role", data: "name" },
    { title: "Created Date", data: "updatedDate" },
    {
      title: "Status",
      format: (data: Role) => <>{data.status ? "Active" : "Inactive"}</>,
    },
    {
      title: "Action",
      format: (data: Role) => <ActionBtns data={data} />,
    },
  ];

  return (
    <>
      <DataTable
        data={manageRolesList}
        columns={columns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  manageRoles: state.manageRolesData.manageRoles,
  resourceRoles: state.dropdownList.dropdowns.resourceRolesList.result,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getManageRoles: () => dispatch(getManageRoles()),
  getResourceRoleList: () => dispatch(getResourceRoleList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageRolesTab);
