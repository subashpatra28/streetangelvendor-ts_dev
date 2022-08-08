import { AddDriver } from "../../../../../global.types";
import {
  GET_DRIVER,
  ADD_DRIVER,
  EDIT_DRIVER,
  DELETE_DRIVER,
  DELETE_DRIVER_SUCCESS,
  GET_DRIVER_FOR_PROJECT
} from "./driverManagement.types";

export const getDriver = () => {
  console.log("get driver received");
  return {
    type: GET_DRIVER as typeof GET_DRIVER,
    meta: {
      thunk: true,
    },
  };
};

export const getDriverForProj = (projectId: number) => ({
  type: GET_DRIVER_FOR_PROJECT as typeof GET_DRIVER_FOR_PROJECT,
  projectId,
  meta: {
    thunk: true,
  },
});

export const AddDriverCode = (data: AddDriver) => {
  return {
    type: ADD_DRIVER as typeof ADD_DRIVER,
    data,
    meta: {
      thunk: true,
    },
  };
};
export const EditDriverCode = (data: Omit<AddDriver, "defaultDriver"> & { id: number }) => {
  return {
    type: EDIT_DRIVER as typeof EDIT_DRIVER,
    data,
    meta: {
      thunk: true,
    },
  };
};
export const DeleteDriverCode = (id: number) => {
  return {
    type: DELETE_DRIVER as typeof DELETE_DRIVER,
    id,
    meta: {
      thunk: true,
    },
  };
};

export const DeleteDriverCodeSuccess = ({
  id,
  meta,
}: {
  id:number,
  meta:any,
}) => {
  return {
    type: DELETE_DRIVER_SUCCESS as typeof DELETE_DRIVER_SUCCESS,
    id,
    meta
  };
};

