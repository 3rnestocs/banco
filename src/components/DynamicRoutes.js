import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from '../routesConfig';
import ProtectedRoute from '../routes/ProtectedRoute';

const DynamicRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => {
        const isPublicRoute = route.path === "/login" || route.path === "/register";

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute redirectToLogin={!isPublicRoute}>
                {route.component}
              </ProtectedRoute>
            }
          />
        );
      })}
    </Routes>
  );
};

export default DynamicRoutes;
