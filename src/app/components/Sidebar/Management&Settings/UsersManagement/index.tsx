import React, { useEffect } from "react";
import { CSVLink } from "react-csv";
import { connect } from "react-redux";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { userManagmentDownloadColumns } from "../../../../constants";
import {
  getDialCode,
  getOrgList,
} from "../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { getManageRoles } from "../../../../redux/reducers/Management&Settings/manageRoles/manageRoles.actions";
import { getUsers } from "../../../../redux/reducers/Management&Settings/usersManagement/usersManagement.actions";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import CopyrightFooter from "../../../Common/CopyrightFooter";
import FullPageLoaderModal from "../../../Common/FullPageLoader/FullPageLoaderModal";
import Import from "./import";
import UsersManagementTab from "./tab";
import AddUser from "./tab/Components/add/index";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function UsersManagement(props: Props) {
  useEffect(() => {
    const apiCall = async () => {
      try {
        props.startLoading();
        props.getUsers();
        props.getOrganizationNameList();
        if (!props.dropdowns.dialCode?.result) {
          props.getDialCodeList();
        }
        if (!props.manageRoles?.result) {
          props.getManageRoleList();
        }
      } catch (error) {
        console.log("AddUser error", error);
      } finally {
        props.endLoading();
      }
    };
    apiCall();
  }, []);
  return (
    <div className="header bg-gradient-info pb-1 pt-0 pt-md-8">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--7" fluid>
        <Row className="mt-6">
          <Col>
            <Card className="card-stats md-4 mb-xl-0 cardcolor allPage">
              <Row className="mb-4">
                <Col sm={12} md={6} className="tripsname">
                  <div className="tabpage">
                    <>Users Management </>
                  </div>
                </Col>
                <Col sm={12} md={6} className="pageEnd modmarg">
                  {props.users &&
                  props.users.result &&
                  props.users.result.length ? (
                    <CSVLink
                      className="pagebtn pagebtnexcept"
                      filename={"userManagment-file.csv"}
                      data={props.users.result}
                      headers={userManagmentDownloadColumns}
                    >
                      <span className="download_text">Download</span>
                    </CSVLink>
                  ) : null}
                  <Import />
                  <AddUser />
                </Col>
              </Row>
              <CardBody className="tabAll">
                <UsersManagementTab />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CopyrightFooter />
      </Container>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.generalSlice.isLoading,
  dropdowns: state.dropdownList.dropdowns,
  manageRoles: state.manageRolesData.manageRoles,
  users: state.userData.users,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getDialCodeList: () => dispatch(getDialCode()),
  getManageRoleList: () => dispatch(getManageRoles()),
  getUsers: () => dispatch(getUsers()),
  getOrganizationNameList: () => dispatch(getOrgList()),
  // AddCtAdminCode: (data: AddUseType) => dispatch(AddCtAdminCode(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersManagement);
