import { createBrowserRouter, Outlet } from "react-router-dom";
import { pointageRouter } from "../modules/pointages/router";
import { authRouter } from "../modules/auth/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: authRouter,
  },
  {
    path: "/pointages",
    element: <Outlet />,
    children: pointageRouter,
  },
]);
