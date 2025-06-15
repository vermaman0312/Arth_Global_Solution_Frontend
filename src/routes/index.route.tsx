import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private-content.route";
import InnerContent from "./inner-content.route";
import PublicRoute from "./public-content.route";
import NotFoundPage from "../pages/not_found_page/page";
import { useEffect, useState } from "react";
import { authMiddleware } from "../middlewares/userAuth.middleware";
import HomePage from "../pages/unauthenticated_pages/home_page/page";
import AboutUsPage from "../pages/unauthenticated_pages/aboutus_page/page";
import LeadershipPage from "../pages/unauthenticated_pages/leadership/page";
import CareerPage from "../pages/unauthenticated_pages/career/page";
import OurWorksManageGrowPage from "../pages/unauthenticated_pages/manage_grow/our_works/page";
import FundingManageGrowPage from "../pages/unauthenticated_pages/manage_grow/funding/page";
import LawsManageGrowPage from "../pages/unauthenticated_pages/manage_grow/laws/page";
import NewsManageGrowPage from "../pages/unauthenticated_pages/manage_grow/news/page";
import OurServiceManageGrowPage from "../pages/unauthenticated_pages/manage_grow/our_services/page";
import OurServicesITDigitalPage from "../pages/unauthenticated_pages/it_digital/our_services/page";
import OurProductsITDigitalPage from "../pages/unauthenticated_pages/it_digital/our_products/page";
import SpotlightITDigitalPage from "../pages/unauthenticated_pages/it_digital/spotlight/page";
import BlogsPage from "../pages/unauthenticated_pages/blogs/page";
import ContactUsPage from "../pages/unauthenticated_pages/contact_us/page";
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
          <Route path={`/public/home`} element={<HomePage />} />
          <Route path={`/public/about-us`} element={<AboutUsPage />} />
          <Route path={`/public/leadership`} element={<LeadershipPage />} />
          <Route path={`/public/career`} element={<CareerPage />} />
          <Route path={`/public/manage-grow/our-works`} element={<OurWorksManageGrowPage />} />
          <Route path={`/public/manage-grow/funding`} element={<FundingManageGrowPage />} />
          <Route path={`/public/manage-grow/laws`} element={<LawsManageGrowPage />} />
          <Route path={`/public/manage-grow/news`} element={<NewsManageGrowPage />} />
          <Route path={`/public/manage-grow/our-services`} element={<OurServiceManageGrowPage />} />
          <Route path={`/public/it-digital/our-services`} element={<OurServicesITDigitalPage />} />
          <Route path={`/public/it-digital/our-products`} element={<OurProductsITDigitalPage />} />
          <Route path={`/public/it-digital/spotlight`} element={<SpotlightITDigitalPage />} />
          <Route path={`/public/blogs`} element={<BlogsPage />} />
          <Route path={`/public/contact-us`} element={<ContactUsPage />} />
        </Route>
      </Route>

      {/** Permission denied route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteIndex;
