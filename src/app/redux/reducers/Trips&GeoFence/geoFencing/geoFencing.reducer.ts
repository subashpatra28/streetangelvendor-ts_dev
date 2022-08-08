import { GeoFencingResp } from "../../../../../global.types";
import { AppActions } from "../../../store/globalstore";
import {
  ADD_GEO_FENCING_SUCCESS,
  GET_GEO_FENCING_SUCCESS,
} from "./geoFencing.types";

interface InitialState {
  geoFencing: Partial<GeoFencingResp>;
}

const initialState: InitialState = {
  geoFencing: {},
};

export const geoFencingReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_GEO_FENCING_SUCCESS:
      return {
        ...state,
        geoFencing: action.payload,
      };
    case ADD_GEO_FENCING_SUCCESS:
      return {
        ...state,
        geoFencing: {
          ...state.geoFencing,
          result: [...(state.geoFencing.result ?? []), action.payload.result],
        },
      };
    default:
      return state;
  }
};
