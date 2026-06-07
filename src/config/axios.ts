import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export type ApiError = {
  message: string;
  status?: number;
  data?: unknown;
};

export const wallhavenClient: AxiosInstance = axios.create({
  baseURL: "/api/wallhaven",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

wallhavenClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (apiKey) {
      config.headers.set("X-API-Key", apiKey);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

wallhavenClient.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => {
    return response;
  },
  (error: AxiosError): Promise<never> => {
    const status = error.response?.status;

    const apiError: ApiError = {
      status,
      data: error.response?.data,
      message: fetchError(error),
    };

    return Promise.reject(apiError);
  }
);

function fetchError(error: AxiosError): string {
  const status = error.response?.status;

  if (status === 401) {
    return "Invalid or missing API key.";
  }

  if (status === 429) {
    return "Rate limit exceeded. Please wait before retrying.";
  }

  if (status === 404) {
    return "Resource not found. The requested endpoint does not exist.";
  }

  if (error.code === "ECONNABORTED") {
    return "Request timed out. Please try again.";
  }

  if (!error.response) {
    return "Network error. Please check your connection.";
  }

  return error.message || "Something went wrong.";
}
