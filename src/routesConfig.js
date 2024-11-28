import React from "react";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Servicios from "./components/institucional/Servicios";
import Identidad from "./components/institucional/Identidad";
import Contacto from "./components/institucional/Contacto";
import Institucional from "./routes/institucional/Institucional";
import Dashboard from "./routes/Dashboard/Dashboard"


// const isAuthenticated = true; // Replace with real authentication logic

export const routesConfig = [

    {
        path: "/",
        component: <Institucional/>,
    },
    
    {
        path: "/login",
        component: <Login />,
    },
    {
        path: "/servicio",
        component: <Servicios/>,
    },
    {
        path: "/identidad",
        component: <Identidad/>,
    },
    {
        path: "/contacto",
        component: <Contacto/>,
    },
    {
        path: "/register",
        component: <Register />,

        // component: isAuthenticated ? <Dashboard /> : <Redirect to="/login" />,
    },
    {
        path: "/dashboard",
        component: <Dashboard/>,
    },


];
