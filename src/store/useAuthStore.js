import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser } from "../api/services/authServices";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      access: null,
      refresh: null,
      permissions: {},
      loading: false,
      error: null,

      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const data = await loginUser(email, password);
          set({
            user: data.user,
            access: data.access,
            refresh: data.refresh,
            permissions: data.permissions || {},
            loading: false,
          });
          return true;
        } catch (error) {
          set({ error: error.message, loading: false });
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          access: null,
          refresh: null,
          permissions: {},
          loading: false,
        });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        access: state.access,
        refresh: state.refresh,
        permissions: state.permissions,
      }),
    }
  )
);

export default useAuthStore;
