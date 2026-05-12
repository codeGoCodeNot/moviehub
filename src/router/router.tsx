import HomePage from "@/pages/home-page";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Layout from "@/pages/layout";
import MovieDetailPage from "@/pages/movie-detail-page";
import TvDetailPage from "@/pages/tv-detail-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies/:id", element: <MovieDetailPage /> },
      { path: "tv/:id", element: <TvDetailPage /> },
    ],
  },
]);

export default router;
