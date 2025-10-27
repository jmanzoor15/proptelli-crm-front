import axiosInstance from "../axiosInstance";
import API_ENDPOINTS from "../endPoints";

export const fetchRoles = async () => {
  const res = await axiosInstance.get(API_ENDPOINTS.ROLES.LIST);
  return res.data;
};

export const createRole = async ()=>{
    const res = await axiosInstance.post(API_ENDPOINTS.ROLES.CREATE)
    return res.data
}
export const fetchRoleDetail = async (id)=>{
    const res = await axiosInstance.get(API_ENDPOINTS.ROLES.DETAIL(id))
    return res.data
}
export const updateRole = async (id)=>{
    const res = await axiosInstance.put(API_ENDPOINTS.ROLES.UPDATE(id))
    return res.data
}
export const deleteRole = async (id)=>{
    const res = await axiosInstance.delete(API_ENDPOINTS.ROLES.DELETE(id))
    return res.data
}