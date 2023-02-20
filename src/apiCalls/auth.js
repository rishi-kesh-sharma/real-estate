import axios from "axios";
import { baseUrl } from "./constants";
export const loginUser = async (data) => {
  const response = await axios.post(`${baseUrl}/login`, data);
  return response;
};
export const registerUser = async (data) => {
  const response = await axios.post(`${baseUrl}/register`, data);
  return response;
};
