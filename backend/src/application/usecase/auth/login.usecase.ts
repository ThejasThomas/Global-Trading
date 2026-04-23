import User from "../../../models/user.model";
import { LoginDTO } from "../../types/auth.types";
import bcrypt from "bcryptjs";
import { UserResponseDTO } from "../../types/user.Response.DTO";

export const loginUser = async (
  data: LoginDTO
): Promise<UserResponseDTO> => {
  console.log("dataaa",data)
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const userObj = user.toObject();

  return {
    _id: userObj._id.toString(),
    name: userObj.name,
    email: userObj.email,
    role: userObj.role,
  };
};