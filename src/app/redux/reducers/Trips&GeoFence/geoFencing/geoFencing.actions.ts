import { ADD_GEO_FENCING, GET_GEO_FENCING } from "./geoFencing.types";

export const getGeoFencing = () => {
  console.log("get geoFencing received");
  return {
    type: GET_GEO_FENCING as typeof GET_GEO_FENCING,
    meta: { thunk: true },
  };
};

export const addGeoFencing = (data: $TSFixMe) => ({
  type: ADD_GEO_FENCING as typeof ADD_GEO_FENCING,
  data,
  meta: { thunk: true },
});
