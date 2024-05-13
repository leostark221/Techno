export const userLogin = (token, userID) => {
  return {
    type: "LOGIN_USER",
    payload: {
      token,
      userID,
    },
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
