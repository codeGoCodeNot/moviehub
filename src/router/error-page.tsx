import Navbar from "@/components/layout/navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen gap-x-3">
        <h1 className="text-red-500">Error occured!</h1>
        <h1>{isRouteErrorResponse(error) ? error.status : "Unknown error"}</h1>
      </div>
    </>
  );
};

export default ErrorPage;
