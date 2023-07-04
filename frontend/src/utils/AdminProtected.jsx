import { Outlet, Navigate } from "react-router";
import { useUser } from "../context/userContext/context";

const AdminProtected = () => {
  const {
    userState: { user },
  } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user && user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default AdminProtected;
