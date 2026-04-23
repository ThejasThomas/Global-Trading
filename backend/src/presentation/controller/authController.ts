import { Request, Response } from "express";
import { registerUser } from "../../application/usecase/auth/register.usecase";

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

// export const login = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) return res.status(400).json({ message: "User not found" });

//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//   // const token = generateToken({
//   //   userId: user._id,
//   //   role: user.role,
//   // });

//   // res.json({ token, role: user.role });
// };