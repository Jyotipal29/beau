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
        user: action.payload,
      };

    case "GET_ORDER":
      return {
        ...userState,
        order: action.payload,
      };
    case "ADD_ORDER": {
      let updatedOrder = [...userState.order, action.payload];

      return {
        ...userState,
        order: updatedOrder,
        currentOrder: action.payload,
      };
    }
    case "UPDATE_ORDER":
      return {
        ...userState,
        order: userState.order.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case "GET_ALL_ORDERS":
      return {
        ...userState,
        orders: action.payload,
      };
    case "RESET_CURR_ORDER":
      return {
        ...userState,
        currentOrder: null,
      };

    case "REMOVE_ADDRESS": {
      const updatedUser = {
        ...userState.user,
        addresses: userState.user.addresses.filter(
          (it) => it._id !== action.payload
        ),
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return {
        ...userState,
        user: updatedUser,
      };
    }

    default:
      return userState;
  }
};
