import { axiosInstance } from "../../api/axiosInstance";

export const getServices = async (page = 1, limit = 6) => {
  const res = await axiosInstance.get(`/services?page=${page}&limit=${limit}`);
  return res.data;
};

export const addService = async (data: any) => {
  return (await axiosInstance.post("/services", data)).data;
};

export const updateService = async (id: string, data: any) => {
  return (await axiosInstance.put(`/services/${id}`, data)).data;
};

export const deleteService = async (id: string) => {
  return (await axiosInstance.delete(`/services/${id}`)).data;
};