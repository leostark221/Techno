import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../screens/Layout";
import Home from "../../screens/Home";
import Settings from "../../screens/Settings";
import StatusMonitor from "../../screens/Monitor";
import GraphTimeLine from "../../screens/TimeLine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/setting",
        index: true,
        element: <Settings />,
      },
      {
        path: "/monitor",
        index: true,
        element: <StatusMonitor />,
      },
      {
        path: "/timeline",
        index: true,
        element: <GraphTimeLine />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
