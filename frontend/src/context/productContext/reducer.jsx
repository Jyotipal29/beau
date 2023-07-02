export const productReducer = (productState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existingItem = productState.cart.find((it) => it.id === item.id);
      let updatedCart;
      if (existingItem) {
        return {
          ...productState,
          cart: productState.cart.map((it) =>
            it.id === item.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        updatedCart = productState.cart.concat(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...productState,
        cart: updatedCart,
      };
    }

    case "SET_CART":
      return {
        ...productState,
        cart: action.payload,
      };
    case "FILTER_CHANGE":
      return {
        ...productState,
        ...action.payload,
      };

    case "UPDATE_CART": {
      let updatedCart = productState.cart.map((it) =>
        it.id === action.payload.id ? { ...it, qty: action.payload.qty } : it
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...productState,
        cart: updatedCart,
      };
    }
    case "REMOVE_FROM_CART": {
      let updatedCart = productState.cart.filter(
        (it) => it.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...productState,
        cart: updatedCart,
      };
    }

    default:
      return productState;
  }
};
