import { Request, Response } from "express";
import { addService } from "../../application/usecase/service/addService";
import { updateService } from "../../application/usecase/service/updateService";
import { deleteService } from "../../application/usecase/service/deleteService";
import { getServices } from "../../application/usecase/service/getAllService";

export const createService = async (req: Request, res: Response) => {
  try {
    const service = await addService(req.body);

    res.status(201).json({
      success: true,
      message: "Service created",
      data: service,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const result = await getServices(page, limit);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const editService = async (req: Request<{id:string}>, res: Response) => {
  try {
    const updated = await updateService(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Service updated",
      data: updated,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeService = async (req: Request<{id:string}>, res: Response) => {
  try {
    await deleteService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Service deleted",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};