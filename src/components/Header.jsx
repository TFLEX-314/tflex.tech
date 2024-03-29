import React, { useState, useEffect } from 'react';
import { FiUser, FiBriefcase, FiSettings, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/TFLEX-logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 0 && currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navItems = [
    { name: 'About', link: "#about-me" },
    { name: 'Likes', link: "#experience" },
    { name: 'Settings', link: "#projects" },
    { name: 'Profile', link: "#contact" },
  ];

  return (
    <header className={`top-0 w-full z-40 ${isScrolled ? 'sticky backdrop-filter backdrop-blur-lg bg-white bg-opacity-70 shadow-md' : 'relative bg-transparent'} transition duration-300 ease-in-out`}>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="flex items-center justify-between max-sm:hidden">
            <Link className="flex-none text-xl font-semibold dark:text-white" to="/">
              <img src={Logo} alt="Sadain" />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div className="flex gap-4">
              {navItems.map((item, index) => (
                <a key={item.name} href={item.link} className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-lg hover:text-blue-600">
                  <span className="text-sm font-medium">{item.name}</span>
                </a>))}
            </div>
          </div>
        </div>

      </div>
    </header>

  );
};


export default Header;
