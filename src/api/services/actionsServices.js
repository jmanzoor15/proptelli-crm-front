import axiosInstance from "../axiosInstance";
import API_ENDPOINTS from "../endPoints";

export const fetchActions = async () => {
  const res = await axiosInstance.get(API_ENDPOINTS.ACTIONS.LIST);
  return res.data;
};

