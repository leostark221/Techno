import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../screens/Layout";
import Home from "../../screens/Home";
import Settings from "../../screens/Settings";
import StatusMonitor from "../../screens/Monitor";
import GraphTimeLine from "../../screens/TimeLine";
import UserLogin from "../../screens/UserLogin";
import {
  AdminProtectedRoute,
  ProtectedRoute,
  RestrictedRoute,
} from "./Protected&PubRoute";
import Admin from "../../screens/AdminDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Home /> }],
      },
      // {
      //   path: "/setting",
      //   element: <ProtectedRoute />,
      //   children: [{ index: true, element: <Settings /> }],
      // },
      {
        path: "/monitor",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <StatusMonitor /> }],
      },
      {
        path: "/timeline",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <GraphTimeLine /> }],
      },
      {
        path: "/admin",
        element: <AdminProtectedRoute />,
        children: [{ index: true, element: <Admin /> }],
      },
      {
        path: "/login",
        element: <RestrictedRoute />,
        children: [{ index: true, element: <UserLogin /> }],
      },
    ],
  },
]);

const Routing = () => <RouterProvider router={router} />;

export default Routing;
