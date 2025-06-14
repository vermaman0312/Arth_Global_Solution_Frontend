import React from "react";
import ErrorBoundary from "../../../features/error-boundary";
import AboutUsPageLayout from "../../../layouts/unauthenticated_layouts/aboutus_layout/layout";

const AboutUsPage = () => {
  return (
    <ErrorBoundary>
      <AboutUsPageLayout />
    </ErrorBoundary>
  );
};

export default AboutUsPage;
