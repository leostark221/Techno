export const userLogin = (token) => {
  return {
    type: "LOGIN_USER",
    payload: token,
  };
};

export const adminLogin = (token) => {
  return {
    type: "LOGIN_ADMIN",
    payload: token,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
