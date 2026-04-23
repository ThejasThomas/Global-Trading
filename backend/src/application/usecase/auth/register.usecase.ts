import User from "../../../models/user.model";
import { RegisterDTO } from "../../types/auth.types";
import bcrypt from "bcryptjs";
import { UserResponseDTO } from "../../types/user.Response.DTO";

export const registerUser = async (
  data: RegisterDTO
): Promise<UserResponseDTO> => {
  const { name, email, password } = data;
  const role = "user";

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  const userObj = user.toObject();

  return {
    _id: userObj._id.toString(),
    name: userObj.name,
    email: userObj.email,
    role: userObj.role,
  };
};