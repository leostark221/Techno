const initialState = {
  userToken: null,
  adminToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        userToken: action.payload,
      };
    case "LOGIN_ADMIN":
      return {
        ...state,
        adminToken: action.payload,
      };

    case "LOGOUT":
      return {
        ...initialState, // Resets both tokens
      };
    default:
      return state;
  }
};

export default authReducer;
