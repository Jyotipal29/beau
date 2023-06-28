import { createContext, useContext, useReducer } from "react";
import { userReducer } from "./reducer";

const userContext = createContext();
export const useUser = () => {
  return useContext(userContext);
};

const userFromStorage = localStorage.getItem("user");
const user = userFromStorage ? JSON.parse(userFromStorage) : null;
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    user: user,
  });

  return (
    <userContext.Provider value={{ userState, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};
