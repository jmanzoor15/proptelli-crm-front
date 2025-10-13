import axiosInstance from "../axiosInstance";
import API_ENDPOINTS from "../endPoints";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
  return response.data;
};
