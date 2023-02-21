import axios from "axios";
import { baseUrl } from "./constants";
export const getProfile = async () => {
  const response = await axios.get(`${baseUrl}/user/profile`,{
    headers:{
      Authorization:"Bearer 27|B3DjPhcwbAWAuUhdaArDTqrEHHKyCkrosCSFYK5e"
    }
  });
  return response;
};
export const updateProfile = async () => {
  const response = await axios.get(`${baseUrl}/user/profile`);
  return response;
};
