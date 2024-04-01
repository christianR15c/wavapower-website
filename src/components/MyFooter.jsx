import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/wava.png';

const MyFooter = () => {
  return (
    <Footer container className="bg-brandPrimary">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={logo}
            alt="wavapower Logo"
            className="w-full"
          />
          <Footer.LinkGroup className="text-white">
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">Impact</Footer.Link>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
