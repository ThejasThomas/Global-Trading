import Service from "../../../models/service.model";
import { ServiceDTO } from "../../types/serviceDTO";

export const updateService = async (
  id: string,
  data: ServiceDTO
) => {
  const updated = await Service.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!updated) {
    throw new Error("Service not found");
  }

  return updated;
};