import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import COLORS from "../../../colors";

const Filter = ({
  filter,
  handleFilter
}: $TSFixMe) => (
  <Form inline className="filterForm">
    <FormGroup>
      <Label className="outtab">
        Search:&nbsp;
        <Input
          autocomplete="disable"
          type="text"
          value={filter}
          onChange={(e) => handleFilter(e.target.value || "")}
        />
      </Label>
    </FormGroup>
  </Form>
);

export default Filter;
