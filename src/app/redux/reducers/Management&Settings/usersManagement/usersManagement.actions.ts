import { AddUser } from "../../../../../global.types";
import {
  ADD_USERS,
  DELETE_USERS,
  DELETE_USERS_SUCCESS,
  EDIT_USERS,
  GET_USERS,
} from "./usersManagement.types";

export const getUsers = () => {
  console.log("get users received");
  return {
    type: GET_USERS as typeof GET_USERS,
    meta: {
      thunk: true,
    },
  };
};

export const AddUsersCode = (data: AddUser) => {
  return {
    type: ADD_USERS as typeof ADD_USERS,
    data,
    meta: {
      thunk: true,
    },
  };
};

export const EditUsersCode = (data: AddUser) => {
  return {
    type: EDIT_USERS as typeof EDIT_USERS,
    data,
    meta: {
      thunk: true,
    },
  };
};

export const DeleteUsersCode = (id: number) => {
  return {
    type: DELETE_USERS as typeof DELETE_USERS,
    id,
    meta: {
      thunk: true,
    },
  };
};

export const DeleteUsersCodeSuccess = ({
  id,
  meta,
}: {
  id: number;
  meta: any;
}) => {
  return {
    type: DELETE_USERS_SUCCESS as typeof DELETE_USERS_SUCCESS,
    id,
    meta,
  };
};
