import { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Form, Label } from "reactstrap";
import { OrganizationType } from "../../../../../../global.types";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import DataTable from "../../../../Common/ModuleDataTable";

type Props = ReturnType<typeof mapStateToProps> & {
  organizationsIds: number[];
  setOrganizationsIds: (...args: any[]) => void;
};

const SelectProject = (props: Props) => {
  console.log("SelectProject props", props);
  const [post, setPost] = useState<OrganizationType[]>([]);
  useEffect(() => {
    setPost(props.orgList?.result ?? []);
  }, []);
  const stateChange = (checked: boolean, post1: OrganizationType) => {
    let idx = props.organizationsIds.indexOf(post1.id);
    let temp = [...props.organizationsIds];
    idx > -1 ? temp.splice(idx, 1) : temp.push(post1.id);
    props.setOrganizationsIds(temp);
  };

  // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
  const columns = useMemo((post: OrganizationType) => [
    {
      format: (post: OrganizationType) => (
        <input
          type="checkbox"
          checked={props.organizationsIds.includes(post.id)}
          onChange={(e) => stateChange(e.target.checked, post)}
        />
      ),
    },
    { data: "name" },
  ]);

  return (
    <>
      <Label className="modlabel modinpulabel modinpulabel">
        Select Project
      </Label>
      <Form className="adminTable projectForm">
        <DataTable
          data={post}
          columns={columns}
          bordered
          hover={true}
          responsive={true}
        />
      </Form>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  orgList: state.dropdownList.dropdowns.orgList,
});

export default connect(mapStateToProps, {})(SelectProject);
