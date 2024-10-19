import React from "react";
import Institutional from "./routes/institutional/Institutional";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";

const isAuthenticated = true; // Replace with real authentication logic

export const routesConfig = [
   
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,

        // element: isAuthenticated ? <Dashboard /> : <Redirect to="/login" />,
    },
];
