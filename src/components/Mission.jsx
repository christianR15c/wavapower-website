import React from 'react';
import banner2 from '../assets/wavapower2.jpg';

const Mission = () => {
  return (
    <div className="md:px-14 px-4 pt-4 md:pb-0 pb-6 my-2 mx-auto" id="about">
      <div className="flex bg-neutralSilver text-neutralGrey justify-center items-center flex-col rounded-xl shadow-2xl">
        <h2 className="animate-slidein md:text-4xl text-2xl font-semibold mb-4 md:pt-0 pt-2">
          Mission
        </h2>
        <p className="animate-slidein text-center md:w-3/4 md:text-lg text- mb-8 mx-auto px-8">
          Advancing technology and the use of digital services in Africa by
          bridging the gap of electrical access using electromagnetic waves to
          supply electrical energy to households, institutions and businesses.
          Our approach is renewable, affordable, wireless and not only conserves
          the environment, it enhances it.
        </p>
      </div>
    </div>
  );
};

export default Mission;
