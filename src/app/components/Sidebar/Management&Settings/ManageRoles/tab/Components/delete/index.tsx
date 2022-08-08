import React from "react";
import { toast } from "react-toastify";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { connect } from "react-redux";
import { DeleteManageRolesCode } from "../../../../../../../redux/reducers/Management&Settings/manageRoles/manageRoles.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import { AxiosError } from "axios";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { Role } from "../../../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: Role;
  };

const Delete = (props: Props) => {
  const deletePost = async () => {
    if (window.confirm("Are you sure to delete this record?")) {
      try {
        props.startLoading();
        await toast.promise(props.deleteManageRoles(props.data.id) as any, {
          pending: TOAST_MSG.LOADING,
          success: TOAST_MSG.DELETED,
          error: {
            render(err: { data: AxiosError }) {
              // When the promise reject, data will contains the error
              return (
                err?.data?.response?.data?.message ??
                "Error while performing action. Please try again later."
              );
            },
          },
        });
        // toast.success("Management roles deleted successfully");
        // alert("Record has been deleted");
      } catch (error) {
        // toast.error(`${error.response.data.message}`);
      } finally {
        await props.endLoading();
      }
    }
  };
  return (
    <>
      <DeleteOutlineOutlinedIcon
        className="dropico"
        onClick={() => deletePost()}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  dropdowns: state.dropdownList.dropdowns,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  deleteManageRoles: (id: number) => dispatch(DeleteManageRolesCode(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
