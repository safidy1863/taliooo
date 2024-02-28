import { createBrowserRouter, Outlet } from "react-router-dom";
import ChatLayout from "../modules/chat/layouts";
import { chatRouter } from "../modules/chat/routes";
import { pointageRouter } from "../modules/pointages/router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatLayout />,
    children: chatRouter,
  },
  {
    path: "/pointages",
    element: <Outlet />,
    children: pointageRouter,
  },
]);
