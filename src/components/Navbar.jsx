import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaAlignJustify, FaX } from 'react-icons/fa6';
import ModalComp from './ModalComp';

const Navbar = () => {
  const [isMenuOpem, setIsMenuOpem] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'How it works', path: 'works' },
    { link: 'Impact', path: 'impact' },
    { link: 'Take Action', path: 'action' },
    { link: 'About', path: 'about' },
  ];

  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="lg:flex items-center justify-between bg-white py-4 lg:px-14 px-4">
        <a href="" className="flex text-2xl font-bold items-center">
          <p className="text-brandPrimary ">WAVA</p>
          <span className="text-brandSecondary">POWER.</span>
        </a>
        <div
          className="absolute right-6 top-6 lg:hidden"
          onClick={() => setIsMenuOpem(!isMenuOpem)}
        >
          {isMenuOpem ? (
            <FaX className="b-6 w-6 text-neutralDGrey" />
          ) : (
            <FaAlignJustify className="b-6 w-6 text-neutralDGrey" />
          )}
        </div>
        <ul
          className={`lg:flex lg:items-center justify-center absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pb-0 pb-5 pl-5 lg:pl-0 transition-all duration-500 ease-in ${
            isMenuOpem ? 'top-20' : 'top-[-490px]'
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              onClick={() => setIsMenuOpem(false)}
              className="block text-base text-gray900 lg:my-0 my-6 lg:mx-8 hover:text-brandPrimary first:font-medium cursor-pointer font-"
            >
              {link}
            </Link>
          ))}
          <button className="btn-primary" onClick={() => setOpenModal(true)}>
            Get Involved
          </button>
          <ModalComp openModal={openModal} setOpenModal={setOpenModal} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
