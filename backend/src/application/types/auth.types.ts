export interface RegisterDTO {
    name:string;
    email:string;
    password:string;
    role?:"admin" | "user"
}


export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  role: "admin" | "user";
}