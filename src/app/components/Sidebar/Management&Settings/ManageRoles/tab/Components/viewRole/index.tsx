import { useState, useEffect } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { connect } from "react-redux";
import ASSETS from "../../../../../../../assets";
import ToggleButton from "../../../../../../Common/ToggleButton";
import PermissionsTable from "../../../PermissionsTable";
import { Permission, Role } from "../../../../../../../../global.types";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: Role;
  };

const ViewRole = (props: Props) => {
  const [permissions, setPermissions] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [permissionsObj, setPermissionsObj] = useState<{
    [key: number]: Permission;
  }>({});
  useEffect(() => {
    if (modal) {
      let temp: { [key: number]: Permission } = {};
      props.data.rolePermission.map((each) => (temp[each.permissionId] = each));
      setPermissionsObj(temp);
    }

    return () => {
      setPermissionsObj({});
    };
  }, [modal]);
  return (
    <>
      <span className="tableModalBtn">
        {/* <Label className="tableModalBtnHeight"> */}
        <VisibilityOutlinedIcon onClick={toggle} className="dropico" />
        {/* </Label> */}
        {/* {buttonLabel} */}
      </span>
      <Modal isOpen={modal} toggle={toggle} className="modalTop">
        <ModalHeader className="mod">
          <h5 className="modlabel modheadcont">View Role</h5>{" "}
          <button onClick={toggle} className="mult">
            <img src={ASSETS.MULTIPLY} alt="multiply" />
          </button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12}>
              <FormGroup className="dropinput">
                <div className="modalheader">Name</div>
                <Input
                  className="mt-2 disableField"
                  autocomplete="disable"
                  disabled
                  type="text"
                  value={props.data.name}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup className="dropinput">
                <div className="modalheader">Description</div>
                <Input
                  autocomplete="disable"
                  disabled
                  type="textarea"
                  name="select"
                  className="range mt-2"
                  value={props.data.description}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="d-flex mb-4">
            <Col xs={12} md={6} className="d-flex align-items-center ">
              <div className="modlabel modinpulabel mt-3">Live Streaming</div>
              <ToggleButton value={props.data.liveStreaming} />
            </Col>
          </Row>
          <PermissionsTable
            className="mt-2"
            disabled={true}
            permissions={permissionsObj}
            setPermissions={(val: boolean) => {
              console.log("val received in parent", val);
              setPermissions(val);
            }}
          />
          <br />
          <Row>
            <Col md={2}>
              <Label className="modlabel modinpulabel">Status</Label>
            </Col>
            <Col md={4}>
              <FormControlLabel
                value={true}
                checked={props.data.status}
                control={<Radio />}
                label="Active"
                disabled
              />
              <FormControlLabel
                value={false}
                checked={!props.data.status}
                control={<Radio />}
                label="Deactive"
                disabled
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="assi footer-width">
          <Button className="popbtn vie btnBox datewidth" onClick={toggle}>
            <>CLOSE</>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewRole);
