import { RouteObject } from "react-router-dom";
import { Dashboard, Messages } from "../pages";

export const chatRouter : Array<RouteObject> = [
    {
        path : "/",
        element: <Dashboard />,
    },
    {
        path : "messages",
        element: <Messages />,
    }
] 