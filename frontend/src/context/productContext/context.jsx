import { createContext, useContext, useReducer } from "react";
import { productReducer } from "./reducer.jsx";

const productContext = createContext({});
export const useProduct = () => {
  return useContext(productContext);
};

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
    product: {},
    sort: {
      price: "",
    },
    filters: {
      category: "",
      size: "",
      brand: "",
      search: "",
    },
  });

  //   const filteredProducts = useMemo(() => {
  //     const filproducts = !productState.sort.price
  //       ? productState.products
  //       : productState.products.sort((a, b) =>
  //           productState.sort.price === "asc"
  //             ? a.price - b.price
  //             : b.price - a.price
  //         );

  //     return filproducts
  //       .filter((product) => {
  //         return product.description
  //           .toLowerCase()
  //           .includes(productState.filters.search.toLowerCase());
  //       })
  //       .filter((product) => {
  //         // Filter By brand

  //         return (
  //           !productState.filters.brand ||
  //           product.brand.toLowerCase() ===
  //             productState.filters.brand.toLowerCase()
  //         );
  //       })
  //       .filter((product) => {
  //         // Filter By category

  //         return (
  //           !productState.filters.category ||
  //           product.category.toLowerCase() ===
  //             productState.filters.category.toLowerCase()
  //         );
  //       })
  //       .filter((product) => {
  //         // Filter By size

  //         return (
  //           !productState.filters.size ||
  //           product.size.some((size) =>
  //             size.toLowerCase().includes(productState.filters.size.toLowerCase())
  //           )
  //         );
  //       });
  //   }, [productState, productState.products]);

  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {children}
    </productContext.Provider>
  );
};
