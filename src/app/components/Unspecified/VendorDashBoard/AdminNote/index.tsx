import "antd/dist/antd.css";
import { Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Col, Container, Row } from "reactstrap";
import { eventsVideosValidationSchema } from "../../../../constants";
import { getOrgList } from "../../../../redux/reducers/dropdowns/dropdown.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { getDevices } from "../../../../redux/reducers/Management&Settings/deviceManagement/deviceManagement.actions";
import { getProject } from "../../../../redux/reducers/Management&Settings/projectManagement/projectManagement.actions";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function AdminNote(props: Props) {
  console.log("highProps", props);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    props.startLoading();
    if (!props.dropdowns.orgList?.result) {
      await props.getOrgList();
    }
    if (!props.devices?.result) {
      await props.getDeviceList();
    }
    if (!props.projects?.result) {
      await props.getProjectList();
    }
    props.endLoading();
  };

  return (
    <Container fluid>
      <Formik
        validationSchema={eventsVideosValidationSchema}
        enableReinitialize={true}
        initialValues={{
          vehicleReg: {},
          organization: {},
          project: {},
          dateTimeYear: "",
        }}
        onSubmit={() => {}}
      >
        {({ handleBlur, setFieldValue }) => (
          <>
            <div className="mb-4">
              <Row className="mb-4">
                <Col sm={12} md={6} className="tripsname">
                  <div className="tabpage">
                    <>Admin Note</>
                  </div>
                </Col>
              </Row>
              <div className="">
                <Row>
                  <Col xs={12} md={6}>
                    <Select
                      className="dashboardMinDiv eventsBottom eventsFont borderWidt"
                      placeholder="Select Organization"
                      options={props.dropdowns.orgList?.result || []}
                      // value={""}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id.toString()}
                      onChange={(option) =>
                        setFieldValue("organization", option)
                      }
                      onBlur={handleBlur("organization")}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Select
                      className="dashboardMinDiv eventsBottom eventsFont borderWidt"
                      placeholder="priority"
                      options={props.devices?.result ?? []}
                      //  // value={""}
                      getOptionLabel={(option) => option.vehicleRegestrationNo}
                      getOptionValue={(option) => option.id.toString()}
                      onChange={(option) =>
                        setFieldValue("Vehicle Reg", option)
                      }
                      onBlur={handleBlur("Vehicle Reg")}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <textarea
                      placeholder="Put Message Here"
                      style={{
                        width: "100%",
                        color: "#bcd0f7",
                        backgroundColor: "transparent",
                        border: "1px solid #bcd0f7",
                      }}
                      rows={3}
                    ></textarea>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={2}>
                    <Button className="pagebtn pagebtnexcept">Send</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </>
        )}
      </Formik>
    </Container>
  );
}

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
  projects: state.projectData.projects,
  isLoading: state.generalSlice.isLoading,
  devices: state.devicesData.devices,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getOrgList: () => dispatch(getOrgList()),
  getProjectList: () => dispatch(getProject()),
  getDeviceList: () => dispatch(getDevices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNote);
