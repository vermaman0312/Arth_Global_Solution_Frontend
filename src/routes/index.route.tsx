import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private-content.route";
import InnerContent from "./inner-content.route";
import PublicRoute from "./public-content.route";
import NotFoundPage from "../pages/not_found_page/page";
import { useEffect, useState } from "react";
import { authMiddleware } from "../middlewares/userAuth.middleware";
import HomePage from "../pages/unauthenticated_pages/home_page/page";
// Pages

const RouteIndex = () => {
  const { deviceToken, userRole } = authMiddleware();
  const [userURL, setUserURL] = useState<string>("manager");
  useEffect(() => {
    if (userRole === "admin") {
      setUserURL("manager");
    } else if (userRole === "masteradmin") {
      setUserURL("admin");
    } else {
      setUserURL("employee");
    }
  }, [userRole]);
  return (
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to={`/private/home`} />} />
          {/* <Route
            path={`/private/user/auth/dashboard/*`}
            element={<AuthenticatedDashboardProvider />}
          /> */}
        </Route>
      </Route>

      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to={`/public/home`} />} />
          <Route path={`/public/home/*`} element={<HomePage />} />
        </Route>
      </Route>

      {/** Permission denied route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteIndex;
