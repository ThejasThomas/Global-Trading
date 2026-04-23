import { authAxiosInstance } from "../../api/auth.axios";
import type { IAxiosResponse } from "../../types/Response";
import type { RegisterPayload } from "../../types/userType";

export const signup=async (data:RegisterPayload)=>{
    console.log("broohh")
    const response =await authAxiosInstance.post<IAxiosResponse>(
        "/register",
        data
    )
    return response.data;
}