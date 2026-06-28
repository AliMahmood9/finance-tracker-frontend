import { AuthResponse, User } from "../types";
import api from "./api";

export const AuthService = {
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    const response = await api.post("/api/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  },
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post("/api/auth/login", { email, password });
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post("/api/auth/logout");
  },

  getMe: async (): Promise<{ user: User }> => {
    const response = await api.get("/api/auth/me");
    return response.data;
  },
};
