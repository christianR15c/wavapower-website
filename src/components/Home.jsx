import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/wavapower1.jpg';
import banner2 from '../assets/wavapower2.jpg';
import banner3 from '../assets/wavapower3.jpg';

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="banner 1" className="max-h-[100vh]" />
            </div>

            {/* Hero text */}
            <div>
              <h1 className="md:text-5xl text-2xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                We create electricity{' '}
                <span className="text-brandSecondary leading-snug">
                  from the cloud
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Enjoy wireless electricity: reliable and accesible anywhere
                anytime
              </p>
              <button className="btn-primary">Get Now</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img
                src={banner2}
                alt="banner 2"
                // className="w-24 h-24 object-contain"
              />
            </div>

            {/* Hero text */}
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
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img
                src={banner3}
                alt="banner 3"
                // className="w-24 h-24 object-contain"
              />
            </div>

            {/* Hero text */}
            <div>
              <h1 className="md:md:text-5xl text-2xl text-2xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Be the first to get this{' '}
                <span className="text-brandSecondary leading-snug">
                  amaziing electricity
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Enjoy wireless electricity: reliable and accesible anywhere
                anytime
              </p>
              <button className="btn-primary">Get Now</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
