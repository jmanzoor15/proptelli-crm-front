import axiosInstance from "../axiosInstance";
import API_ENDPOINTS from "../endPoints";

export const fetchModule = async () => {
  const res = await axiosInstance.get(API_ENDPOINTS.MODULE.LIST);
  return res.data;
};

export const fetchModuleDetail = async (id) => {
  const res = await axiosInstance.get(API_ENDPOINTS.MODULE.DETAIL(id));
  return res.data;
};


export const updateModule = async (id) => {
  const res = await axiosInstance.put(API_ENDPOINTS.MODULE.UPDATE(id));
  return res.data;
};




