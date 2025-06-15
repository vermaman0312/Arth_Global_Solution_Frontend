import React from "react";
import CustomTracingBeam from "../../../components/tracing_beam/component";
import ErrorBoundary from "../../../features/error-boundary";
import LeadershipPageLayout from "../../../layouts/unauthenticated_layouts/leadership/layout";

const LeadershipPage = () => {
  return (
    <ErrorBoundary>
      <LeadershipPageLayout />
    </ErrorBoundary>
  );
};

export default LeadershipPage;
