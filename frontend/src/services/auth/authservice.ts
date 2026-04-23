import { authAxiosInstance } from "../../api/auth.axios";
import type { IAxiosResponse } from "../../types/Response";
import type { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from "../../types/userType";

export const signup=async (data:RegisterPayload)=>{
    console.log("broohh")
    const response = await authAxiosInstance.post<
  IAxiosResponse<RegisterResponse>
>("/register", data);
    return response.data;
}

export const login = async (data: LoginPayload & { loginType: "admin" | "user" }) => {
  const response = await authAxiosInstance.post<
    IAxiosResponse<LoginResponse>
  >("/login", data);

  return response.data;
};