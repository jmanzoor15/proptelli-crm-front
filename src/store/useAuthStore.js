import { create } from "zustand";
import { loginUser } from "../api/services/authServices";

const useAuthStore = create((set) => ({
  user: null,
  permissions: {},
  access: null,
  refresh: null,
  loading: false,
  error: null,

  // ✅ Login function
  login: async (credentials) => {
    set({ loading: true, error: null });
    try {
      const data = await loginUser(credentials);

      // Save tokens and user data in localStorage
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("permissions", JSON.stringify(data.permissions));

      set({
        user: data.user,
        permissions: data.permissions,
        access: data.access,
        refresh: data.refresh,
        loading: false,
      });

      return true; // for navigation after login
    } catch (err) {
      set({ error: err.response?.data?.detail || "Login failed", loading: false });
      return false;
    }
  },

  // ✅ Logout function
  logout: () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    localStorage.removeItem("permissions");

    set({
      user: null,
      permissions: {},
      access: null,
      refresh: null,
    });
  },

  // ✅ Restore auth state from localStorage on refresh
  initializeAuth: () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const permissions = JSON.parse(localStorage.getItem("permissions"));
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (user && access) {
      set({ user, permissions, access, refresh });
    }
  },
}));

export default useAuthStore;
