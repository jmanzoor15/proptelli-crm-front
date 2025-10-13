import { create } from "zustand";
import { fetchUsers, createUser, deleteUser } from "../api/services/userService";

const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  error: null,

  // ✅ Fetch all users
  getUsers: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchUsers();
      set({ users: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ✅ Create user
  addUser: async (userData) => {
    set({ loading: true });
    try {
      const newUser = await createUser(userData);
      set({ users: [...get().users, newUser], loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ✅ Delete user
  removeUser: async (id) => {
    set({ loading: true });
    try {
      await deleteUser(id);
      set({ users: get().users.filter((user) => user.id !== id), loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useUserStore;
