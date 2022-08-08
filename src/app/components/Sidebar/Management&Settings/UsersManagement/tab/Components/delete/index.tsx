import { toast } from "react-toastify";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { connect } from "react-redux";
import { DeleteUsersCode } from "../../../../../../../redux/reducers/Management&Settings/usersManagement/usersManagement.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../../../redux/reducers/general/general.actions";
import { TOAST_MSG } from "../../../../../../../constants/toast.constants";
import { AxiosError } from "axios";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";
import { User } from "../../../../../../../../global.types";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: User;
  };
const Delete = (props: Props) => {
  async function deletePost() {
    if (window.confirm("Are you sure to delete this record?")) {
      try {
        props.startLoading();
        await toast.promise(props.deleteUsers(props.data.id) as any, {
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
        // alert("Record has been deleted");
      } catch (error) {
        // toast.error(`${error.response.data.message}`);
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
  deleteUsers: (id: number) => dispatch(DeleteUsersCode(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
