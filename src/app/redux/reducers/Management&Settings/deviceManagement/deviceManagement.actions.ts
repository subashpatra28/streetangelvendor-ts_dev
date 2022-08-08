import {
  AddDeviceType,
  AddPartInfoType,
  CameraInfo,
  // AddPartInfoType,
  // CameraInfo,
  // PartInfo,
} from "../../../../../global.types";
import {
  GET_DEVICE,
  ADD_DEVICE,
  EDIT_DEVICE,
  DELETE_DEVICE,
  DELETE_DEVICE_SUCCESS,
  GET_RENAME_CHANNEL,
  EDIT_RENAME_CHANNEL,
  GET_PART_INFO,
  EDIT_PART_INFO,
  ADD_PART_INFO,
} from "./deviceManagement.types";

export const getDevices = () => {
  console.log("get driver received");
  return {
    type: GET_DEVICE as typeof GET_DEVICE,
    meta: { thunk: true },
  };
};

export const AddDeviceCode = (data: AddDeviceType) => {
  return {
    type: ADD_DEVICE as typeof ADD_DEVICE,
    data,
    meta: { thunk: true },
  };
};

export const EditDeviceCode = (data: AddDeviceType) => {
  return {
    type: EDIT_DEVICE as typeof EDIT_DEVICE,
    data,
    meta: { thunk: true },
  };
};

export const DeleteDeviceCode = (id: number) => {
  return {
    type: DELETE_DEVICE as typeof DELETE_DEVICE,
    id,
    meta: { thunk: true },
  };
};

export const DeleteDeviceCodeSuccess = ({
  id,
  meta,
}: {
  id: number;
  meta: any;
}) => {
  return {
    type: DELETE_DEVICE_SUCCESS as typeof DELETE_DEVICE_SUCCESS,
    id,
    meta,
  };
};
export const getRenameChannel = (id: number) => {
  return {
    type: GET_RENAME_CHANNEL as typeof GET_RENAME_CHANNEL,
    data: id,
    meta: { thunk: true },
  };
};
export const EditRenameChannel = (data: CameraInfo) => {
  return {
    type: EDIT_RENAME_CHANNEL as typeof EDIT_RENAME_CHANNEL,
    data,
    meta: { thunk: true },
  };
};
export const getPartInfo = (id: number) => {
  return {
    type: GET_PART_INFO as typeof GET_PART_INFO,
    id,
    meta: { thunk: true },
  };
};
export const EditPartInfo = (data: AddPartInfoType) => {
  return {
    type: EDIT_PART_INFO as typeof EDIT_PART_INFO,
    data,
    meta: { thunk: true },
  };
};
export const AddPartInfo = (data: AddPartInfoType) => {
  return {
    type: ADD_PART_INFO as typeof ADD_PART_INFO,
    data,
    meta: { thunk: true },
  };
};
