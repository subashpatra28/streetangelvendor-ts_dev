import React from "react";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { connect } from "react-redux";
import { DeleteCommonConfigurationCode } from "../../../../../../../../../../redux/reducers/Management&Settings/commonConfiguration/commonConfiguration.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../../../../redux/reducers/general/general.actions";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { TOAST_MSG } from "../../../../../../../../../../constants/toast.constants";
import { RootState } from "../../../../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../../../../redux/store/store";
import { CommonConfiguration } from "../../../../../../../../../../../global.types";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: CommonConfiguration;
  };
const Delete = (props: Props) => {
  async function deletePost() {
    if (window.confirm("Are you sure to delete this record?")) {
      try {
        props.startLoading();

        await toast.promise(
          props.deleteCommonConfiguration(props.data.id) as any,
          {
            pending: TOAST_MSG.LOADING,
            success: TOAST_MSG.DELETE_COMMON_CONFIGURATION_SUCCESS,
            error: {
              render(err: { data: AxiosError }) {
                // When the promise reject, data will contains the error
                return (
                  err?.data?.response?.data?.message ??
                  "Error while performing action. Please try again later."
                );
              },
            },
          }
        );
        // setTimeout(() => {
        //   props.endLoading();
        // }, 3000);
      } catch (error) {
        console.log("error in CommonConfigurationDelete api", error);
      } finally {
        await props.endLoading();
      }
    }
  }
  return (
    <>
      <DeleteOutlineOutlinedIcon className="dropico" onClick={deletePost} />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  deleteCommonConfiguration: (id: number) =>
    dispatch(DeleteCommonConfigurationCode(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
