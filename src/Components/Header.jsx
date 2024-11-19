import React, { useState, useEffect } from 'react';
import logo from "../assets/logo/logo.png";
import Switcher from './common/Switch';
import { nav } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home'); // Default selected is "Home"
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set active item based on current path
    const currentPath = window.location.pathname;
    const activeItem = nav.find((item) => item.path === currentPath)?.name || 'Home';
    setActiveNav(activeItem);

    // Add scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (name) => {
    setActiveNav(name);
    setIsMenuOpen(false); // Close the menu in mobile view after clicking
  };

  return (
    <nav
      className={`fixed z-50 flex items-center justify-center w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/50 dark:bg-black/50 backdrop-blur-md' : 'bg-white dark:bg-black'
      } lg:h-16 md:h-16`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} className="h-12 rounded-full w-14" alt="Logo" />
          </a>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 dark:text-gray-200 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 lg:flex">
          <Switcher />
          {nav.map((item) => (
            <div key={item.id} className="relative group">
              <a
                href={item.path}
                onClick={() => handleNavClick(item.name)}
                className={`relative px-4 py-2 text-lg transition-transform duration-500 transform font-poppins 
                  ${
                    activeNav === item.name
                      ? 'text-white dark:text-white'
                      : 'text-black dark:text-white'
                  } 
                  group-hover:scale-110 group-hover:text-white dark:group-hover:text-black`}
              >
                {item.name}
                <span
                  className={`absolute inset-0 bg-primary transform scale-0 transition-transform duration-500 origin-right group-hover:scale-100 rounded-full z-[-1] 
                  ${activeNav === item.name ? 'scale-100' : ''}`}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#2E2E2E] shadow-lg lg:hidden z-40">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Switcher />
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={() => handleNavClick(item.name)}
                  className={`px-4 py-2 text-lg font-poppins 
                    ${
                      activeNav === item.name
                        ? 'text-primary dark:text-primary'
                        : 'text-black dark:text-white'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
