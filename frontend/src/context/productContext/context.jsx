import { createContext, useContext, useReducer, useEffect } from "react";
import { productReducer } from "./reducer.jsx";
import { products } from "../../data.jsx";
const productContext = createContext({});
export const useProduct = () => {
  return useContext(productContext);
};

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    products: products,
    product: {},
    cart: [],
    sort: {
      price: "",
    },
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      productDispatch({ type: "SET_CART", payload: JSON.parse(storedCart) });
    }
  }, []);

  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {children}
    </productContext.Provider>
  );
};
