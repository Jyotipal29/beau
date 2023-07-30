import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext/context";

const PrivateRoutes = () => {
  const {
    userState: { user },
  } = useUser();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    !user && navigate("/login", { state: { from: pathname } });
  }, [navigate, pathname, user]);
  return <Outlet />;
};

export default PrivateRoutes;
