import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { ENV, PROD_BASE_URL, BASE_URL, API_KEY } from "../utils/importEnv";

const imageApi = axios.create({
  baseURL: ENV === "production" ? PROD_BASE_URL : BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

imageApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (API_KEY && ENV === "development") {
      config.headers["X-API-KEY"] = API_KEY;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

imageApi.interceptors.response.use(
  function onFulFilled(response: AxiosResponse) {
    return response;
  },
  function onRejected(error: AxiosError) {
    const errorStatus = error.response ? error.response.status : null;

    switch (errorStatus) {
      case 401:
        throw new Error(
          error.message ||
            "Invalid or missing API key. Please ensure your credentials are correct and included in the request headers.",
        );

      case 429:
        throw new Error(
          error.message ||
            "Rate limit exceeded. You are limited to 45 requests per minute. Please wait before retrying.",
        );

      default:
        // toast.error("An unexpected error occurred");
        break;
    }

    return Promise.reject(error);
  },
);

export default imageApi;
