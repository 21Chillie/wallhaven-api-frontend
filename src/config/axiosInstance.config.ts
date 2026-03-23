import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
export const ENV: string = import.meta.env.VITE_BUN_ENV;
export const API_KEY: string = import.meta.env.VITE_API_KEY;
export const PROD_BASE_URL: string = import.meta.env.VITE_PROD_BASE_URL;

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
    if (API_KEY) {
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
