import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <Header />
            <main className="flex-grow">
              <Hero />
              <Logos />
              <HowItWorks />
              <Services />
              <Testimonials />
              <CTA />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;