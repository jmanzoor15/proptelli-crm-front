import axiosInstance from "../axiosInstance";
import API_ENDPOINTS from "../endPoints";

export const fetchLogs = async () => {
  const res = await axiosInstance.get(API_ENDPOINTS.LOGS.LIST);
  return res.data;
};

export const logsDetail = async (id) => {
  const res = await axiosInstance.get(API_ENDPOINTS.LOGS.DETAIL(id));
  return res.data;
};