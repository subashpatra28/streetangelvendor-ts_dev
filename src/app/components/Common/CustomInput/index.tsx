import React from "react";
import Button from "@material-ui/core/Button";
import { Col } from "reactstrap";

const CustomInput = () => {
  return (
    <div className="customInput1">
      <div className="customUploadHead">
        <input
          type="file"
          accept="image/*"
          className="inputFile1"
          id="contained-button-file"
        />
        <label htmlFor="contained-button-file" className="inpuLabel">
          <Col md={8} />
          <Col md={4} className="customUploadBtn">
            <Button
              variant="contained"
              component="span"
              className="table-fixed customUpload"
            >
              <i className="fa fa-upload" aria-hidden="true" />
              <div className="uploadIcn">Select File</div>
            </Button>
          </Col>
        </label>
      </div>
    </div>
  );
};

export default CustomInput;
