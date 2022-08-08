import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
  FormGroup,
} from "reactstrap";
import ASSETS from "../../../../../assets";
import CustomInput from "../../../../Common/CustomInput/index";

const Import = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle} className="pagebtn">
        <Label className="tableModalBtnHeight range">Import</Label>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Import CSV File</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <Button className="range modalbtn">
                Choose .Csv/.Xlsx File To Upload
              </Button>
            </Col>
            <Col md={6}>
              <Button className="range modalbtn">
                Download .Csv File Sample
              </Button>
            </Col>
          </Row>
          <br />
          <span className="modalheader">File Upload</span>
          <Row className="mt-2">
            <Col xs={12} md={8}>
              <CustomInput />
            </Col>
            <Col md={4}>
              <Button className="range modalbtn dashboardMinDiv popimptbtn button-bottom">
                Upload
              </Button>
            </Col>
          </Row>
          <span className="modalheader">Auto Select Devices</span>
          <Row>
            <Col xs={12} md={8}>
              <CustomInput />
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Button className="range modalbtn dashboardMinDiv popimptbtn button-top">
                  Check Devices Status
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Import;
