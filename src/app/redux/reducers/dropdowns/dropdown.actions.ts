import {
  GET_DIAL_CODE,
  GET_ORG_LIST,
  GET_PROJECT_LIST_FROM_ORG,
  GET_RESOURCE_ROLE_LIST,
} from "./dropdown.types";

export const getOrgList = () => {
  return {
    type: GET_ORG_LIST as typeof GET_ORG_LIST,
    meta: {
      thunk: true,
    },
  };
};

export const getDialCode = () => {
  return {
    type: GET_DIAL_CODE as typeof GET_DIAL_CODE,
    meta: {
      thunk: true,
    },
  };
};

export const getResourceRoleList = () => {
  return {
    type: GET_RESOURCE_ROLE_LIST as typeof GET_RESOURCE_ROLE_LIST,
    meta: {
      thunk: true,
    },
  };
};

export const getProjectListForOrg = (id: number) => {
  return {
    type: GET_PROJECT_LIST_FROM_ORG as typeof GET_PROJECT_LIST_FROM_ORG,
    id,
    meta: {
      thunk: true,
    },
  };
};
