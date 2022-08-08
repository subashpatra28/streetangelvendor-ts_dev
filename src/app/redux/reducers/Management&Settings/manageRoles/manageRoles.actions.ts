import {
  AddManageRolesCodeData,
  EditManageRolesCodeData,
} from "../../../../../global.types";
import {
  ADD_MANAGE_ROLES,
  DELETE_MANAGE_ROLES,
  DELETE_MANAGE_ROLES_SUCCESS,
  EDIT_MANAGE_ROLES,
  GET_MANAGE_ROLES,
} from "./manageRoles.types";

export const getManageRoles = () => {
  console.log("get manageRoles received");
  return {
    type: GET_MANAGE_ROLES as typeof GET_MANAGE_ROLES,
    meta: {
      thunk: true,
    },
  };
};

export const AddManageRolesCode = (data: AddManageRolesCodeData) => {
  return {
    type: ADD_MANAGE_ROLES as typeof ADD_MANAGE_ROLES,
    data,
    meta: {
      thunk: true,
    },
  };
};

export const EditManageRolesCode = (data: EditManageRolesCodeData) => {
  return {
    type: EDIT_MANAGE_ROLES as typeof EDIT_MANAGE_ROLES,
    data,
    meta: {
      thunk: true,
    },
  };
};

export const DeleteManageRolesCode = (id: number) => {
  return {
    type: DELETE_MANAGE_ROLES as typeof DELETE_MANAGE_ROLES,
    id,
    meta: {
      thunk: true,
    },
  };
};

export const DeleteManageRolesCodeSuccess = ({
  id,
  meta,
}: {
  id: number;
  meta: any;
}) => {
  return {
    type: DELETE_MANAGE_ROLES_SUCCESS as typeof DELETE_MANAGE_ROLES_SUCCESS,
    id,
    meta,
  };
};
