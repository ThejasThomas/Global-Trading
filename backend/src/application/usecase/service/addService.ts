import Service from "../../../models/service.model";
import { ServiceDTO } from "../../types/serviceDTO";

export const addService = async (data: ServiceDTO) => {
  const service = await Service.create(data);
  return service;
};