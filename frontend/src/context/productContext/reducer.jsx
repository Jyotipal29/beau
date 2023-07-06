export const productReducer = (productState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...productState,
        products: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...productState,
        product: action.payload,
      };
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
      return {
        ...productState,
        cart: updatedCart,
      };
    }

    case "GET_CART":
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
        it.id === action.payload.id ? action.payload : it
      );

      return {
        ...productState,
        cart: updatedCart,
      };
    }
    case "REMOVE_FROM_CART": {
      let updatedCart = productState.cart.filter(
        (it) => it._id !== action.payload
      );
      return {
        ...productState,
        cart: updatedCart,
      };
    }
    case "CART_REMOVE": {
      return {
        ...productState,
        cart: [],
      };
    }

    case "ADD_PRODUCT":
      return {
        ...productState,
        products: [...productState.products, action.payload],
      };

    case "ADD_WISH":
      return {
        ...productState,
        wish: productState.wish.concat(action.payload),
      };
    case "GET_WISH":
      return {
        ...productState,
        wish: action.payload,
      };
    default:
      return productState;
  }
};
