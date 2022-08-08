import { useState } from "react";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import { Table } from "reactstrap";
import SearchModalMap from "./modalMap";
import ASSETS from "../../../assets";
//@ts-expect-error
import Fade from "react-reveal/Fade";
import { searchData } from "../../../constants/index";

const SearchModal = (props: $TSFixMe) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <button className="tripsdetailBtn" onClick={toggle}>
        <img alt="search" src={ASSETS.SEARCH} className="tripsdetailSearch" />
      </button>
      <Modal
        size="lg"
        isOpen={modal}
        toggle={toggle}
        className="searchmodal headSearch"
      >
        <ModalBody>
          <button className="mult" onClick={toggle}>
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
          <div className="searchModalBody">
            <Row>
              <Col md={6}>
                <Fade left duration={2000}>
                  <div className="searchModalmap">
                    <SearchModalMap />
                  </div>
                </Fade>
              </Col>
              <Col md={6}>
                <div className="searchModalBooking">
                  <Table
                    responsive
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    class="popup-table"
                  >
                    <tbody>
                      {searchData.map((items) => (
                        <tr>
                          <td className="dataModalbold" width="50%">
                            {items.parent}
                          </td>
                          <td className="dataModal" width="50%">
                            {items.child}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SearchModal;
