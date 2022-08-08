import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import COLORS from "../../../colors";
import { AntSwitch } from "../../../constants";



export default function CustomizedSwitches() {
  return (
    <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        {/* @ts-expect-error TS(2322): Type '{ defaultChecked: true; inputProps: { "aria-... Remove this comment to see the full error message */}
        <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
      </Stack>
    </FormGroup>
  );
}