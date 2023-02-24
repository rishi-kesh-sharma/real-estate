import axios from "axios";
const token = "94|mZR20XQaqlWuxOJm4Z78PHZWliQOix6T2vnM7d3k";
import { baseUrl } from "./constants";

export const getProvinces = async () => {
  const res = await axios.get(`${baseUrl}/province-lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const getDistricts = async (province_id) => {
  const res = await axios.get(
    `${baseUrl}/district-lists?province_id=${province_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(res);
  return res;
};
export const getMunicipalities = async (district_id) => {
  const res = await axios.get(
    `${baseUrl}/municipality-lists?district_id=${district_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(res.data.data);
  return res;
};
export const getPropertyCategories = async () => {
  const res = await axios.get(`${baseUrl}/property-category-lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const getRoadTypes = async () => {
  const res = await axios.get(`${baseUrl}/road-type-lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const getAreaUnits = async () => {
  const res = await axios.get(`${baseUrl}/area-unit-lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
