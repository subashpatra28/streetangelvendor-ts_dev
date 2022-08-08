import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { FormikErrors } from "formik";
import { useEffect, useMemo, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import { ResourceRole } from "../../../../../../global.types";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import DataTable from "../../../../Common/ModuleDataTable";

type Props = ReturnType<typeof mapStateToProps> & {
  permissions: Partial<{
    [key: string | number]: any;
  }>;
  setPermissions: (...args: any[]) => void;
  className: FormikErrors<{}> | undefined;
  disabled: boolean;
};

const PermissionsTable = (props: Props) => {
  console.log("PermissionsTable props", props);
  const [post, setPost] = useState<ResourceRole[]>([]);
  useEffect(() => {
    setPost(props.resourceRolesList?.result ?? []);
  }, []);
  const stateChange = (
    toggleType: "read" | "write",
    newVal: boolean,
    post: ResourceRole
  ) => {
    console.log("post", post, "value", newVal, "toggleType", toggleType);
    let temp = { ...(props.permissions ?? {}) };
    if (!temp[post.id]) {
      temp[post.id] = {
        name: post.name,
        permissionId: post.id,
        read: false,
        write: false,
      };
    }
    temp[post.id][toggleType] = newVal;
    props.setPermissions(temp);
  };
  // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
  const columns = useMemo(() => [
    { title: "Sr No", data: "id" },
    { title: "Module", data: "name" },
    {
      title: "Read",
      format: (post: ResourceRole) => (
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={props.permissions[post.id]?.read ?? false}
          onChange={(e) => stateChange("read", e.target.checked, post)}
        />
      ),
    },
    {
      title: "Write",
      format: (post: ResourceRole) => (
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={props.permissions[post.id]?.write ?? false}
          onChange={(e) => stateChange("write", e.target.checked, post)}
        />
      ),
    },
  ]);

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "224px" }}>
        <Scrollbars className="rolescroll scrollbars1">
          <Table
            stickyHeader
            aria-label="sticky table"
            className="moduletabHeader"
          >
            <DataTable
              data={post}
              columns={columns}
              bordered
              hover={true}
              responsive={true}
            />
          </Table>
        </Scrollbars>
      </TableContainer>
    </Paper>
  );
};

const mapStateToProps = (state: RootState) => ({
  resourceRolesList: state.dropdownList.dropdowns.resourceRolesList,
});

export default connect(mapStateToProps, {})(PermissionsTable);
