import React from 'react';
import banner2 from '../assets/wavapower2.jpg';
import { TEAnimation } from 'tw-elements-react';

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row w-[100%] items-center justify-between gap-12 oblique">
          <TEAnimation
            animation="[slide-right_4s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
          >
            <div className="w-[80%]">
              <img src={banner2} alt="banner 2" />
            </div>
          </TEAnimation>
          <div>
            <h1 className="md:text-5xl text-2xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              Lessons and insights{' '}
              <span className="text-brandSecondary leading-snug">
                from 3 years
              </span>
            </h1>
            <p className="text-neutralGrey text-base mb-8">
              Enjoy wireless electricity: reliable and accesible anywhere
              anytime
            </p>
            <button className="btn-primary">Get Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
