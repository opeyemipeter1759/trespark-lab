import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import CaseStudiesPage from '../pages/CaseStudiesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import ProductPage from '../pages/ProductPage';

interface RouteDefinition {
  path: string;
  component: React.ComponentType;
}

const routeConfig: RouteDefinition[] = [
  { path: '/', component: HomePage },
  { path: '/services', component: ServicesPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/case-studies', component: CaseStudiesPage },
  { path: '/project-details', component: ProjectDetailsPage },
  { path: '/about', component: AboutPage },
  { path: '/product', component: ProductPage },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
