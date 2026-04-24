import Service from "../../../models/service.model";

export const deleteService = async (id: string) => {
  const deleted = await Service.findByIdAndDelete(id);

  if (!deleted) {
    throw new Error("Service not found");
  }

  return deleted;
};