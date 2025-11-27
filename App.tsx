import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Logos />
                      <HowItWorks />
                      <Services />
                      <Testimonials />
                      <CTA />
                    </>
                  } />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/project-details" element={<ProjectDetailsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/product" element={<ProductPage />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
