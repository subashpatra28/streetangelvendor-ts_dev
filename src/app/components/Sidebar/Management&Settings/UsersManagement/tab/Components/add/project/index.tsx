import { useState, useEffect, useMemo } from "react";
import { Form, Label } from "reactstrap";
import DataTable from "../../../../../../../Common/ModuleDataTable";

const SelectProject = (props: $TSFixMe) => {
  console.log("props", props);
  const [post, setPost] = useState([]);
  useEffect(() => {
    setPost(props.project.dropdowns.organizationList.result);
  });
  const stateChange = (checked: boolean, post1: $TSFixMe) => {
    let idx = props.organizationsIds.indexOf(post1.id);
    let temp = [...props.organizationsIds];
    idx > -1 ? temp.splice(idx, 1) : temp.push(post1.id);
    props.setOrganizationsIds(temp);
  };

  // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
  const columns = useMemo((post: $TSFixMe) => [
    {
      format: (post: $TSFixMe) => (
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

export default SelectProject;
