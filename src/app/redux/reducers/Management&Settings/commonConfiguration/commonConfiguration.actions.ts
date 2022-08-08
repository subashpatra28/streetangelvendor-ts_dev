import { AddCommonConfiguration } from "../../../../../global.types";
import {
  ADD_COMMON_CONFIGURATION,
  DELETE_COMMON_CONFIGURATION,
  DELETE_COMMON_CONFIGURATION_SUCCESS,
  EDIT_COMMON_CONFIGURATION,
  GET_COMMON_CONFIGURATION,
} from "./commonConfiguration.types";

export const getCommonConfigurations = () => {
  console.log("get commonConfiguration received");
  return {
    type: GET_COMMON_CONFIGURATION as typeof GET_COMMON_CONFIGURATION,
    meta: { thunk: true },
  };
};

export const AddCommonConfigurationCode = (data: AddCommonConfiguration) => {
  return {
    type: ADD_COMMON_CONFIGURATION as typeof ADD_COMMON_CONFIGURATION,
    data,
    meta: { thunk: true },
  };
};

export const EditCommonConfigurationCode = (data: AddCommonConfiguration) => {
  return {
    type: EDIT_COMMON_CONFIGURATION as typeof EDIT_COMMON_CONFIGURATION,
    data,
    meta: { thunk: true },
  };
};

export const DeleteCommonConfigurationCode = (id: number) => {
  return {
    type: DELETE_COMMON_CONFIGURATION as typeof DELETE_COMMON_CONFIGURATION,
    id,
    meta: { thunk: true },
  };
};

export const DeleteCommonConfigurationCodeSuccess = ({
  id,
  meta,
}: {
  id: number;
  meta: any;
}) => {
  return {
    type: DELETE_COMMON_CONFIGURATION_SUCCESS as typeof DELETE_COMMON_CONFIGURATION_SUCCESS,
    id,
    meta,
  };
};
