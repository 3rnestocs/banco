import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from '../routesConfig';

const DynamicRoutes = () => {
    const routes = routesConfig;

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}

    </Routes>
  );
};

export default DynamicRoutes;
