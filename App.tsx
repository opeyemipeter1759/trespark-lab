import React, { useState } from 'react';
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

export type PageType = 'home' | 'services' | 'about' | 'case-studies' | 'portfolio' | 'project-details';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <Header currentPage={currentPage} onNavigate={navigateTo} />
            <main className="flex-grow">
              {currentPage === 'home' && (
                <>
                  <Hero />
                  <Logos />
                  <HowItWorks />
                  <Services />
                  <Testimonials />
                  <CTA />
                </>
              )}
              {currentPage === 'services' && <ServicesPage />}
              {currentPage === 'portfolio' && <PortfolioPage />}
              {currentPage === 'case-studies' && <CaseStudiesPage onNavigate={navigateTo} />}
              {currentPage === 'project-details' && <ProjectDetailsPage onNavigate={navigateTo} />}
              {currentPage === 'about' && <AboutPage />}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;