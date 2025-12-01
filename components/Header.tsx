import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
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

  const isCaseStudiesActive = location.pathname.startsWith('/project-details');

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-card-light dark:border-card-dark px-6 sm:px-10 py-4 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-50">
      <Link to="/" className="flex items-center gap-4 text-foreground-light dark:text-foreground-dark cursor-pointer">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Product Lab</h2>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-9">
          <Link to="/" className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
          <Link to="/services" className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${location.pathname === '/services' ? 'text-primary' : ''}`}>Services</Link>
          <Link to="/portfolio" className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}>Portfolio</Link>
          <Link to="/about" className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary' : ''}`}>About Us</Link>
        </div>
        <button onClick={handleContactNav} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary dark:bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Contact Us</span>
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
           <Link to="/" className="text-left text-sm font-medium leading-normal hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
           <Link to="/services" className="text-left text-sm font-medium leading-normal hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
           <Link to="/portfolio" className="text-left text-sm font-medium leading-normal hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
           <Link to="/about" className="text-left text-sm font-medium leading-normal hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
           <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary dark:bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity" onClick={handleContactNav}>
            <span className="truncate">Contact Us</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
