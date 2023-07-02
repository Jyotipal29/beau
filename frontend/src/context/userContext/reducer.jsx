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
      let updatedOrder = [...userState.order, action.payload]
      localStorage.setItem("order", JSON.stringify(updatedOrder));

      return {
        ...userState,
        order: updatedOrder,
        currentOrder: action.payload,
      };
    }
    case "RESET_CURR_ORDER":
      return {
        ...userState,
        currentOrder:null
      }
    default:
      return userState;
  }
};
