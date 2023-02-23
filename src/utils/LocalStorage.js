export const setTokenToLocalStorage = (localStorage, token) => {
  window.localStorage.setItem("token", token);
};

export const getTokenFromLocalStorage = (localStorage) => {
  return window.localStorage.getItem("token");
};
export const removeTokenFromLocalStorage = (localStorage) => {
  return window.localStorage.removeItem("token");
};
