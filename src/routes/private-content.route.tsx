import { Navigate, Outlet } from "react-router-dom";
import { CustomNavbar } from "../components/custom_navbar/component";
import { authMiddleware } from "../middlewares/userAuth.middleware";

type ProtectedRouteType = {
  isUserRequired?: boolean;
  isSidebar?: boolean;
};

const PrivateRoute = (props: ProtectedRouteType) => {
  const { authToken, deviceToken } = authMiddleware();

  if (props.isUserRequired) {
    return authToken ? (
      <CustomNavbar>
        <Outlet />
      </CustomNavbar>
    ) : (
      <Navigate to={`/public/home`} />
    );
  } else {
    return authToken ? (
      <CustomNavbar>
        <Outlet />
      </CustomNavbar>
    ) : (
      <Navigate to={`/public/home`} />
    );
  }
};

export default PrivateRoute;
