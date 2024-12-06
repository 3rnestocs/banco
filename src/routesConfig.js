import React from "react";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Servicios from "./components/institucional/Servicios";
import Identidad from "./components/institucional/Identidad";
import Contacto from "./components/institucional/Contacto";
import Institucional from "./routes/institucional/Institucional";
import Dashboard from "./routes/Dashboard/Dashboard"
import EditContact from "./routes/EditContact/EditContact";

export const routesConfig = [
    {
      path: "/",
      component: <Institucional />,
      public: true, // Public route
    },
    {
      path: "/login",
      component: <Login />,
      public: true, // Public route
    },
    {
      path: "/register",
      component: <Register />,
      public: true, // Public route
    },
    {
      path: "/dashboard",
      component: <Dashboard />,
      public: false, // Protected route
    },
    {
      path: "/edit",
      component: <EditContact />,
      public: false, // Protected route
    },
    {
      path: "/servicio",
      component: <Servicios />,
      public: false, // Protected route
    },
    {
      path: "/identidad",
      component: <Identidad />,
      public: false, // Protected route
    },
    {
      path: "/contacto",
      component: <Contacto />,
      public: false, // Protected route
    },
  ];
  