import React, { useEffect, useState } from 'react';
import logo from '../assets/wavapower-logo.png';
import { Link } from 'react-scroll';
import { FaAlignJustify, FaX } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpem, setIsMenuOpem] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpem(!isMenuOpem);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scroll > 100) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  });

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Services', path: 'services' },
    { link: 'About', path: 'about' },
    { link: 'Product', path: 'product' },
    { link: 'Testimonial', path: 'testimonial' },
  ];

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300'
            : ''
        }`}
      >
        <div className="flex items-center justify-between text-base gap-8">
          <a href="" className="flex text-2xl font-bold items-center">
            <p className="text-brandPrimary ">WAVA</p>
            <span className="text-brandSecondary">POWER.</span>
          </a>

          {/* Nav items for large sdevices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* button for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sing up
            </button>
          </div>

          {/* button for only mobile devices */}

          <div className="md:hidden flex">
            <button
              className="text-neutralDGrey focus:text-gray-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpem ? (
                <FaX className="b-6 w-6 text-neutralDGrey" />
              ) : (
                <FaAlignJustify className="b-6 w-6 text-neutralDGrey" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
