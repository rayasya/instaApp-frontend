import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL_LOCAL;

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const { token } = response.data;

    Cookies.set("auth_token", token, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    const { response } = axiosError;
    if (response) {
      throw response.data;
    }
    throw axiosError;
  }
};

export const logout = () => {
  Cookies.remove("auth_token");
  window.location.href = "/login";
};

export const getToken = () => {
  return Cookies.get("auth_token");
};

export const isAuthenticated = () => {
  return !!getToken();
};
