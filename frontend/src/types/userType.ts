export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
  user: {
    _id: string;
    email: string;
    role: "admin" | "user";
    name?: string;
  };
  token: string;
}
export interface RegisterResponse {
  user: {
    _id: string;
    email: string;
    role: "admin" | "user";
    name?: string;
  };
}