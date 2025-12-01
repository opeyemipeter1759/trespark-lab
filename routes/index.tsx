import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import ProductPage from '../pages/ProductPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/portfolio', element: <PortfolioPage /> },
  { path: '/project-details', element: <ProjectDetailsPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/product', element: <ProductPage /> },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
