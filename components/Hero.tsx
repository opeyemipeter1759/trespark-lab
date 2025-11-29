import React, { useState } from 'react';
import { motion } from "framer-motion";
import {  useLocation, useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

    const handleContactNav = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-16 sm:py-24">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center px-4">
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl text-secondary dark:text-white">
              From Idea to MVP in Record Time.
            </h1>
            <p className="text-base font-normal leading-normal sm:text-lg text-muted-light dark:text-muted-dark">
              We empower founders to build and launch groundbreaking products faster than ever before.
            </p>
          </div>

          <motion.button
            onClick={handleContactNav}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex self-center lg:self-start min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          >
            <span  className="truncate">Schedule a Free Strategy Call</span>
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <img
            className="w-full h-auto object-cover rounded-xl aspect-square lg:aspect-[4/3] shadow-xl"
            alt="A team of professionals collaborating around a computer in a modern office."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrjkvjHLEjTLpoHgpQETZnxNLy1Qp-4MzYgUVVeYqS7H9pqCrYXzrGDNAk-lAp71GadG0od2HUaMqgToOS1t944uMZv9xLo6uJESUBpZJ7Kr3rlLzuXMtlQj8tjPBC0xInYO2shzO0RDTX4vqYRLwL8CRRa_dYuj6OeKngk5cYTcZ1xmUGmZt40fnMjp3UWBA0BkeLvL2hIt_KTqDqDshKA4zMk3hllNynTbC7Pvi-PTZiFoxiP166746AD3uISaIHAM0HQAJ0apjq"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
