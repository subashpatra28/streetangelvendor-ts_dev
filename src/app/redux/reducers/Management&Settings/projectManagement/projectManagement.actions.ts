import {
  AddProject,
  ProjectMgMtType,
  ProjectType,
} from "../../../../../global.types";
import {
  ADD_PROJECT_MGMT,
  DELETE_PROJECT_MGMT,
  DELETE_PROJECT_MGMT_SUCCESS,
  EDIT_PROJECT_MGMT,
  GET_PROJECT,
  GET_PROJECT_MGMT,
} from "./projectManagement.types";

export const getProjectMgmt = () => {
  console.log("get project received");
  return {
    type: GET_PROJECT_MGMT as typeof GET_PROJECT_MGMT,
    meta: { thunk: true },
  };
};

export const getProject = () => {
  console.log("get project received");
  return {
    type: GET_PROJECT as typeof GET_PROJECT,
    meta: { thunk: true },
  };
};

export const AddProjectMgmt = (data: AddProject) => {
  return {
    type: ADD_PROJECT_MGMT as typeof ADD_PROJECT_MGMT,
    data,
    meta: { thunk: true },
  };
};
export const EditProjectMgmt = (data: ProjectMgMtType) => {
  return {
    type: EDIT_PROJECT_MGMT as typeof EDIT_PROJECT_MGMT,
    data,
    meta: { thunk: true },
  };
};

export const DeleteProjectMgmt = (id: number) => {
  return {
    type: DELETE_PROJECT_MGMT as typeof DELETE_PROJECT_MGMT,
    id,
    meta: { thunk: true },
  };
};

export const DeleteProjectCodeSuccess = ({
  id,
  meta,
}: {
  id: number;
  meta: any;
}) => {
  return {
    type: DELETE_PROJECT_MGMT_SUCCESS as typeof DELETE_PROJECT_MGMT_SUCCESS,
    id,
    meta,
  };
};
