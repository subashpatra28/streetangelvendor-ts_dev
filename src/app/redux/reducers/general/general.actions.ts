import { ALWAYS_OPEN, END_LOADING, START_LOADING } from "./general.types";

export const startLoading = () => {
  return {
    type: START_LOADING as typeof START_LOADING,
  };
};

export const endLoading = () => {
  return {
    type: END_LOADING as typeof END_LOADING,
  };
};

export const alwaysOpenMenu = (open: boolean) => {
  return {
    type: ALWAYS_OPEN as typeof ALWAYS_OPEN,
    payload: open,
  };
};
