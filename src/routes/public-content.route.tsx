import { Navigate, Outlet } from "react-router-dom";
import { CustomNavbar } from "../components/custom_navbar/component";
import { authMiddleware } from "../middlewares/userAuth.middleware";

const PublicRoute = () => {
  const { authToken, deviceToken } = authMiddleware();
  return authToken ? (
    <Navigate
      replace
      to={`/private/user/auth/dashboard?token=${deviceToken}`}
    />
  ) : (
    <CustomNavbar>
      <Outlet />
    </CustomNavbar>
  );
};

export default PublicRoute;
