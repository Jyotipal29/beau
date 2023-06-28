export const productReducer = (productState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...productState,
        products: action.payload,
      };
    case "GET_ONE_PRODUCT":
      return {
        ...productState,
        product: action.payload,
      };
    case "FILTER_CHANGE":
      return {
        ...productState,
        ...action.payload,
      };
    default:
      return productState;
  }
};
