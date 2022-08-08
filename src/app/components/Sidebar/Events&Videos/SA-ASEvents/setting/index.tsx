import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import ASSETS from "../../../../../assets";

const SelectEvents = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle} className="pagebtn pagebtnexcept pagebutton1">
        <img alt="settings" src={ASSETS.SETTINGS} width="20px" height="20px" />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="videoModal">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">Choose ADAS Type Data</h5>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <Button className=" accordbut " block>
                High Events
              </Button>
            </Col>
            <Col md={6}>
              <Button className="accordbut " block>
                Low Events
              </Button>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="assi footer-width">
          <Button onClick={toggle} className="popbtn vie datewidth btnBox">
            <>SAVE</>
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SelectEvents;
