import Service from "../../../models/service.model";

export const getServices = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;

  const [services, total] = await Promise.all([
    Service.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),

    Service.countDocuments(),
  ]);

  return {
    services,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};