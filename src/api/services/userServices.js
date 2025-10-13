import axiosInstance from "../axiosInstance";
import API_ENDPOINTS from "../endPoints";

export const fetchUsers = async () => {
  const res = await axiosInstance.get(API_ENDPOINTS.USERS.LIST);
  return res.data;
};

export const createUser = async (userData) => {
  const res = await axiosInstance.post(API_ENDPOINTS.USERS.CREATE, userData);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axiosInstance.delete(API_ENDPOINTS.USERS.DELETE(id));
  return res.data;
};
