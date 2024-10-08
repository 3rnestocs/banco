import React from 'react';
import { Routes, Route } from 'react-router-dom';

const DynamicRoutes = () => {
    const isAuthenticated = true; // Replace with real authentication logic

    const routesConfig = [
        {
            path: "/",
            component: <Institutional />,
        },
        {
            path: "/login",
            component: <Login />,
        },
        {
            path: "/register",
            component: <Register />,

            // element: isAuthenticated ? <Dashboard /> : <Redirect to="/login" />,
        },
    ];

    return (
        <Routes>
            {routesConfig.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
            ))}

        </Routes>
    );
};

export default DynamicRoutes;
