export interface UserResponseDTO {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}