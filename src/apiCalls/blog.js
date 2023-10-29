import axios from "axios";
import { baseUrl } from "./constants";

export const getBlogFun = async (data) => {
  const response = await axios.post(`${baseUrl}/blogs/search`, data);
  return response;
};

export const getBlogDetailFun = async (id) => {
  const response = await axios.get(
    `${baseUrl}/blogs/detail?id=${id}&populate=author`
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );

  return response;
};
