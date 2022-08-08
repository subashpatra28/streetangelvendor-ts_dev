import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { getOrgList } from "../../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { getUsers } from "../../../../../redux/reducers/Management&Settings/usersManagement/usersManagement.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import Delete from "./Components/delete";
import Edit from "./Components/edit";
import View from "./Components/view";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UsersManagementTab = (props: Props) => {
  const [users, setUsers] = useState([]);
  const ActionBtns = (data: $TSFixMe) => {
    return (
      <div className="imptabbody">
        <View data={data.data} />
        <Edit data={data.data} />
        <Delete data={data.data} />
      </div>
    );
  };
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);
  useEffect(() => {
    //@ts-expect-error
    setUsers([...(props.users.result ?? [])]);

    return () => {};
  }, [props.users]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      props.getUsers();
      await props.getOrganizationNameList();
    } catch (error) {
      console.log("error in CtAdminTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
  const columns = useMemo(() => [
    { title: "UserName", data: "userName" },
    { title: "Email", data: "email" },
    { title: "Mobile", data: "mobile" },
    { title: "Project", data: "organizationsId" },
    { title: "Role", data: "role.name" },
    { title: "Status", format: (data: $TSFixMe) => <>{data.status + ""}</> },
    {
      title: "Action",
      format: (data: $TSFixMe) => <ActionBtns data={data} />,
    },
  ]);

  return (
    <>
      <DataTable
        data={users}
        columns={columns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  users: state.userData.users,
  organization: state.dropdownList.dropdowns.orgList,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getUsers: () => dispatch(getUsers()),
  getOrganizationNameList: () => dispatch(getOrgList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersManagementTab);
