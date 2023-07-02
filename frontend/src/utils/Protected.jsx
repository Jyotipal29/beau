import { Outlet, Navigate } from "react-router";
import { useUser } from "../context/userContext/context";

const PrivateRoutes = () => {
  const {
    userState: { user },
  } = useUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
