import { Request, Response } from "express";
import { registerUser } from "../../application/usecase/auth/register.usecase";
import { generateToken } from "../../shared/utils/jwt";
import { loginUser } from "../../application/usecase/auth/login.usecase";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { loginType } = req.body;
    const user = await loginUser(req.body);

      if (loginType === "admin" && user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Admin only",
      });
    }

    if (loginType === "user" && user.role !== "user") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Users only",
      });
    }

    const token = generateToken(user._id.toString(), user.role);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user,
        token,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};