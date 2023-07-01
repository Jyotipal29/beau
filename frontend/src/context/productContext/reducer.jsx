export const productReducer = (productState, action) => {
  switch (action.type) {
    case "FILTER_CHANGE":
      return {
        ...productState,
        ...action.payload,
      };
    default:
      return productState;
  }
};
