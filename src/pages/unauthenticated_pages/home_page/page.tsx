import React from "react";
import ErrorBoundary from "../../../features/error-boundary";
import HomePageLayout from "../../../layouts/unauthenticated_layouts/home_layout/layout";

const HomePage = () => {
  return (
    <ErrorBoundary>
      <HomePageLayout />
    </ErrorBoundary>
  );
};

export default HomePage;
