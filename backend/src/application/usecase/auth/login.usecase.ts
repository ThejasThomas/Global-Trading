import User from "../../../models/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../shared/utils/jwt";
import { LoginDTO, AuthResponse } from "../../types/auth.types";

export const loginUser = async (
  data: LoginDTO
): Promise<AuthResponse> => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken({
    userId: user._id.toString(),
    role: user.role,
  });

  return {
    token,
    role: user.role,
  };
};