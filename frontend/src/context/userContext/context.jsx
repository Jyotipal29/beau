import { createContext, useContext, useReducer, useEffect } from "react";
import { userReducer } from "./reducer";

const userContext = createContext();
export const useUser = () => {
  return useContext(userContext);
};

// const orderFromStorage = localStorage.getItem("order");
// const order = orderFromStorage ? JSON.parse(orderFromStorage) : [];

const userFromStorage = localStorage.getItem("user");
const user = userFromStorage ? JSON.parse(userFromStorage) : null;
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    user: user,
    order: [],
    orders: [],
    currentOrder: null,
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState.user));
  }, [userState.user]);
  return (
    <userContext.Provider value={{ userState, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};
