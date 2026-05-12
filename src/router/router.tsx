import HomePage from "@/pages/home-page";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Layout from "@/pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
