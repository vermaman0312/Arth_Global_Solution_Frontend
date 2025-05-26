import React from "react";
import ErrorBoundaryComponent from "../../components/custom_error_boundary/component";
import ErrorBoundary from "../../features/error-boundary";

type props = {
  children: React.ReactNode;
};

const ErrorBoundaryPage = ({ ...props }: props) => {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryComponent />}>
      {props.children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryPage;
