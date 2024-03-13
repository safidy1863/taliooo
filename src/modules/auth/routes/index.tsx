import { RouteObject } from "react-router-dom";
import { Login } from "../pages";

export const authRouter : Array<RouteObject> = [
    {
        path : "/",
        element: <Login />,
    },
]