export const userReducer = (userState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...userState,
        user: action.payload,
      };
    case "LOGIN":
      return {
        ...userState,
        user: action.payload,
      };

    case "ADD_ADDRESS":
      return {
        ...userState,
        user: {
          ...userState.user,
          address: userState.user.address
            ? [...userState.user.address, action.payload]
            : [action.payload],
        },
      };

    case "ADD_ORDER": {
      return {
        ...userState,
        order: [...userState.order, action.payload],
      };
    }
    default:
      return userState;
  }
};
