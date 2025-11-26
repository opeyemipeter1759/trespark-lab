import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-card-light dark:border-card-dark px-6 sm:px-10 py-4 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4 text-foreground-light dark:text-foreground-dark">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Product Lab</h2>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-9">
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#services">Services</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#testimonials">Case Studies</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary dark:bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Get Started</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground-light dark:text-foreground-dark">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-card-light dark:border-card-dark p-4 flex flex-col gap-4 shadow-lg md:hidden">
           <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
           <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary dark:bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;