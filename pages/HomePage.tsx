import React from 'react';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <HowItWorks />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;