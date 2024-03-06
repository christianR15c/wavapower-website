import React from 'react';
import banner2 from '../assets/wavapower2.jpg';

const Mission = () => {
  return (
    <div className="md:px-14 px-4 py-16  mx-auto" id="mission">
      <div className="flex h-72 justify-center items-center flex-col">
        <div
          style={{ backgroundImage: `url(${banner2})` }}
          className={`w-full h-screen bg-cover bg-center`}
        >
          <div className="w-full h-full flex flex-col  justify-center items-center backdrop-brightness-75">
            <h2 className="md:text-4xl text-xl text-white font-semibold mb-4">
              Mission Statement
            </h2>
            <p className="md:w-3/4 text-sm text-white mb-8 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
