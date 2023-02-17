import axios from "axios";
const baseUrl = "http://192.168.10.78:8888/api";
export const login = async (data) => {
  const response = await axios.post(`${baseUrl}/login`, data);
  console.log(response);
};
export const register = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, data);
    return { data: response.data, status: response.status };
  } catch (err) {
    return { data: err.response.data, status: err.response.status };
  }
};

// const options = {
//   method: "GET",
//   url: "https://api.openweathermap.org/data/2.5/weather",
//   params: {
//     appid: WEATHER_API_KEY,
//     id: "2924585",
//     lang: "null",
//     units: '"metric" or "imperial"',
//     mode: "xml, html",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     if (response.status == 200) {
//       mobxInteractionStore.setWeatherdata(response.data); // mobx doesnt work either. Its empty when the html is returned.
//       console.log("SUCCESS");
//       console.log(response.data);
//       data = response.data; // This does not work
//     } else {
//       console.log(response.status);
//     }
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
