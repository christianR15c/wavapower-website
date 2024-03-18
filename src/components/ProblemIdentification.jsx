import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import expensiveElectricity from '../assets/icons/expensive.png';
import climateChange from '../assets/icons/climate.png';
import powerGrids from '../assets/icons/power.png';
import powerOutage from '../assets/icons/powerOutage.png';

const ProblemIdentification = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="px-4 w-full lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-8 mb-4">
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center"
      >
        <div className="py-2">
          <h2 className="lg:text-6xl md:text-4xl text-2xl bg-gradient-to-r from-brandSecondary to-brandPrimary inline-block text-transparent bg-clip-text">
            Why is Africa still stluggling to access electricity?
          </h2>
        </div>{' '}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 relative gap-x-8 gap-y-10 px-4 pt-6 pb-8 text-black">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-2 hover:border-brandSecondary bg-white rounded-lg shadow-2xl">
            <div className="p-8 flex flex-col gap-6">
              <div className="w-full flex justify-center">
                <img
                  src={climateChange}
                  alt=""
                  className="lg:w-[40%] w-[20%] md:w-[30%]"
                />
              </div>
              <div className="flex gap-3 flex-col">
                <p className="text-gray-600 text-sm md:text-[14px] lg:text-lg font-semibold">
                  Drought areas, insufficient water bodies and climate change.
                </p>
                <p className="text-gray-600 text-sm md:text-[14px] lg:text-lg">
                  Solar & wind energy are also affected by climate change which
                  makes them less reliable.
                </p>
              </div>
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-2 hover:border-brandSecondary bg-white rounded-lg shadow-2xl">
            <div className="p-8 flex flex-col gap-6">
              <div className="w-full flex justify-center">
                <img
                  src={expensiveElectricity}
                  alt=""
                  className="lg:w-[40%] w-[20%] md:w-[30%]"
                />
              </div>
              <div className="flex gap-3 flex-col">
                <p className="text-gray-600 text-sm md:text-[14px] lg:text-lg font-semibold">
                  Expensive installation and power bills.
                </p>
                <p className="text-gray-600 text-sm md:text-[14px] lg:text-lg">
                  Solar & wind energy are also affected by climate change which
                  makes them less reliable.
                </p>
              </div>
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-2 hover:border-brandSecondary bg-white rounded-lg shadow-2xl">
            <div className="p-8 flex flex-col gap-6">
              <div className="w-full flex justify-center">
                <img
                  src={powerGrids}
                  alt=""
                  className="lg:w-[40%] w-[20%] md:w-[30%]"
                />
              </div>
              <div className="flex gap-3 flex-col">
                <p className="text-gray-600 text-sm md:text-[14px] lg:text-lg font-semibold">
                  Lack or outdated power grids.
                </p>
                <p className="text-gray-600 text-sm md:text-[14px] lg:text-lg">
                  The urban-rural divide: the rular areas remain in desparate
                  wanting.
                </p>
              </div>
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-2 hover:border-brandSecondary bg-white rounded-lg shadow-2xl">
            <div className="p-8 flex flex-col gap-6">
              <div className="w-full flex justify-center">
                <img
                  src={powerOutage}
                  alt=""
                  className="lg:w-[40%] w-[20%] md:w-[30%]"
                />
              </div>
              <p className="text-gray-600 text-sm md:text-[14px] lg:text-lg">
                All of these leads to opting for unsustainable sources of energy
                like fossil fuels among others that provide electricity but at
                the cost of environment disruption and our overrall wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemIdentification;
