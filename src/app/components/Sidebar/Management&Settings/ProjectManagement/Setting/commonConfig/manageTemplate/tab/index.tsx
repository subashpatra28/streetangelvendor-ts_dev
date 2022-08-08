import { useState, useEffect } from "react";
import DataTable from "../../../../../../../Common/DataTable";
import { connect } from "react-redux";
import { getCommonConfigurations } from "../../../../../../../../redux/reducers/Management&Settings/commonConfiguration/commonConfiguration.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../../redux/reducers/general/general.actions";
import Edit from "./Components/edit";
import View from "./Components/view";
import Delete from "./Components/delete";
import { RootState } from "../../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../../redux/store/store";
import { CommonConfiguration } from "../../../../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const CommonConfigurationTab = (props: Props) => {
  console.log("commonProps", props);
  const [commonConfigurationsList, setCommonConfigurationsList] = useState<
    CommonConfiguration[]
  >([]);

  const ActionBtns = (data: $TSFixMe) => {
    return (
      <>
        <div className="tabAction">
          <View data={data.data} />
          <Edit data={data.data} />
          <Delete data={data.data} />
        </div>
      </>
    );
  };
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getCommonConfigurations();
    } catch (error) {
      console.log("error in CommonConfigurationsTab", error);
    } finally {
      await props.endLoading();
    }
  };

  useEffect(() => {
    if (props.commonConfigurations?.result) {
      setCommonConfigurationsList([...props.commonConfigurations.result]);
    }
    return () => {};
  }, [props.commonConfigurations]);

  const columns = [
    { title: "Template Name", data: "organization.name" },
    { title: "Created Date", data: "createOn" },
    {
      title: "Status",
      format: (data: $TSFixMe) => <>{data.status ? "Active" : "Inactive"}</>,
    },
    {
      title: "Action",
      format: (data: $TSFixMe) => <ActionBtns data={data} />,
    },
  ];

  return (
    <>
      <DataTable
        data={commonConfigurationsList}
        columns={columns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

//export default CommonConfigurationTab;
const mapStateToProps = (state: RootState) => ({
  commonConfigurations: state.commonConfigurationsData.commonConfigurations,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getCommonConfigurations: () => dispatch(getCommonConfigurations()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommonConfigurationTab);
