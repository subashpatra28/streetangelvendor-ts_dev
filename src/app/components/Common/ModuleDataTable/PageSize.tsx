import React from "react";
import {
  FormGroup,
  Label,
  Input,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import downArrow from "../../../assets/png/down-arrow-table.png";
import COLORS from "../../../colors";

const PageSize = ({
  pageSize,
  handlePageSize
}: $TSFixMe) => (
  <Form inline>
    <FormGroup>
      <Label className="outtab">
        Display&nbsp;
        <Input
          type="select"
          value={pageSize}
          // @ts-expect-error TS(2345): Argument of type 'string | 1' is not assignable to... Remove this comment to see the full error message
          onChange={(e) => handlePageSize(parseInt(e.target.value || 1))}
          bsSize="sm"
          className="tableArrow"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Input>
        &nbsp;Records Per Page
      </Label>
    </FormGroup>
  </Form>
);

export default PageSize;
