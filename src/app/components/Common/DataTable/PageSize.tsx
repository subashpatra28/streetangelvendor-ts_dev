import { Label, Form } from "reactstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled, TextField } from "@material-ui/core";
import Select from "react-select";
import { colourStyles, Options } from "../../../constants";

const PageSize = ({ pageSize, handlePageSize }: $TSFixMe) => (
  <Form inline>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Label className="outtab">
        Display&nbsp;
        <Select
          defaultValue={pageSize}
          value={{ value: pageSize, label: pageSize }}
          options={Options}
          styles={colourStyles}
          isSearchable={false}
          onChange={(e) => handlePageSize(e.value)}
        />
        &nbsp;Records Per Page
      </Label>
    </FormControl>
  </Form>
);

export default PageSize;
