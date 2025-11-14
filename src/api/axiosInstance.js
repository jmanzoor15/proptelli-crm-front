import axios from "axios";
import useAuthStore from "../store/useAuthStore";
import API_ENDPOINTS from "./endPoints";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.crm.proptelli.com/",
  headers: { "Content-Type": "application/json" },
});

// ✅ Add request interceptor to attach access token
axiosInstance.interceptors.request.use(
  (config) => {
    const { access } = useAuthStore.getState();
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Add response interceptor for token refresh logic
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { refresh, logout } = useAuthStore.getState();

    // if 401 (Unauthorized) and refresh token available → try refresh
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      refresh
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
     `${import.meta.env.VITE_API_BASE_URL || "https://api.crm.proptelli.com/"}${API_ENDPOINTS.AUTH.REFRESH}`,
          { refresh },
          { headers: { "Content-Type": "application/json" } }
        );

        const newAccess = response.data.access;
        useAuthStore.setState({ access: newAccess });

        // Update Authorization header for the retried request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        // ✅ Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("🔴 Token refresh failed:", err);
        logout();
        window.location.href = "/login"; // redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
