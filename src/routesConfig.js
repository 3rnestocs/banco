import React from "react";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Institucional from "./routes/institucional/Institucional";

// const isAuthenticated = true; // Replace with real authentication logic

export const routesConfig = [
    {
        path: "/",
        component: <Institucional />,
    },
    {
        path: "/login",
        component: <Login />,
    },
    {
        path: "/register",
        component: <Register />,

        // component: isAuthenticated ? <Dashboard /> : <Redirect to="/login" />,
    }
];
