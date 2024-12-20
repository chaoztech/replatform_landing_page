import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";


import "./App.scss";
import BlogPage from "./pages/BlogPage/BlogPage";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />
      }
    ],
    {
      basename: "/replatform_landing_page"
    }
  );

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
