import axios from "axios";
import { BASEURL } from "../api/api.constants";

const axiosCall = axios.create({
  baseURL: BASEURL,
});

axiosCall.interceptors.request.use(
  function (config) {
    console.log("config", config);
    switch (true) {
      case config?.url?.includes("/geo-fencing"):
        config.baseURL = "http://localhost:4000";
        break;

      case config?.url?.includes("/common-configuration"):
        config.baseURL = "http://localhost:4000";
        break;

      case config?.url?.includes("/support-ticket"):
        config.baseURL = "http://localhost:4000";
        break;

      case config?.url?.includes("/project-management"):
        config.baseURL = "http://localhost:4000";
        break;
      default:
        break;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosCall.interceptors.response.use(
  (response) => {
    if (response.config.baseURL === "http://localhost:4000") {
      response.data = {
        timestamp: "2022-06-01T07:53:15.652+00:00",
        status: 200,
        message: "Success",
        result: response.data,
      };
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log("error.response", JSON.parse(JSON.stringify(error.response)));
    if (
      error.response &&
      error.response.status === 404 &&
      !error.response.data.message &&
      !originalRequest._retry &&
      originalRequest.baseURL !== "http://localhost:4000"
    ) {
      originalRequest._retry = true;
      console.log(
        "error originalRequest",
        error,
        Object.keys(error),
        originalRequest._retry
      );

      originalRequest.baseURL = "http://localhost:4000";
      switch (originalRequest.url) {
        case "/api/v1/support-ticket":
          originalRequest.url = "/support-ticket";
          break;
        default:
          break;
      }
      // console.log('refreshToken fetched from store===', refreshToken);
      return axiosCall(originalRequest);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosCall;

export const get = async (url: $TSFixMe, config = {}) => {
  return await axiosCall
    .get(url, { ...config })
    .then((response) => response.data);
};

export const post = async (url: $TSFixMe, data: $TSFixMe, config = {}) => {
  return await axiosCall
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
};

export const put = async (url: $TSFixMe, data: $TSFixMe, config = {}) => {
  return axiosCall
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
};

export const del = async (url: $TSFixMe, config = {}) => {
  return await axiosCall
    .delete(url, { ...config })
    .then((response) => response.data);
};
