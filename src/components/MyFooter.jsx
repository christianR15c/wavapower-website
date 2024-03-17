import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/wavapower-logo.png';

const MyFooter = () => {
  return (
    <Footer container className="bg-brandPrimary" id="footer">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="/" src={logo} alt="Flowbite Logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="about" className="text-gray-400" />
              <Footer.LinkGroup col className="text-gray-400">
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">Our product</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-gray-400" />
              <Footer.LinkGroup col className="text-gray-400">
                <Footer.Link href="#">FAcebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-gray-400" />
              <Footer.LinkGroup col className="text-gray-400">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Wavapower™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-gray-400">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-400" />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-gray-400"
            />
            <Footer.Icon href="#" icon={BsTwitter} className="text-gray-400" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
