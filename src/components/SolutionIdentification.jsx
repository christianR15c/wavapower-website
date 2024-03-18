import React from 'react';

const SolutionIdentification = () => {
  return (
    <div className="px-4 w-full lg:px-14 max-w-screen-2xl mx-auto bg-white py-8 mb-4">
      <div className="flex lg:flex-row flex-col w-full justify-between lg:items-center lg:gap-0 gap-6 px-4 lg:px-14">
        <div className="lg:w-[50%] flex flex-col lg:mx-auto">
          <h2 className="lg:text-6xl md:text-4xl text-2xl bg-gradient-to-r from-brandSecondary to-brandPrimary inline-block text-transparent bg-clip-text">
            Solution is to use
          </h2>
          <h2 className="lg:text-6xl md:text-4xl text-2xl bg-gradient-to-r from-brandSecondary to-brandPrimary inline-block text-transparent bg-clip-text">
            Wireless Distribution
          </h2>
          <p className="italic">
            to supply affordable electricity produced from radio waves
          </p>
        </div>

        <div className="lg:w-[50%] flex flex-col  text-neutralGrey">
          <p className="">With our approach, supply will occur in 2 ways: </p>
          <h2 className="animate-slidein mb-2 md:text-2xl text:xl font-bold text-primary py-3">
            Recycling & Production
          </h2>
          <div className="animate-slidein flex flex-col gap-3">
            <p>
              Recycling will allow the intentional affordability for areas where
              poverty is the main cause of energy lack.
            </p>
            <p>
              A focus on lifting people out of poverty will encourage integrated
              electrification agendas that will enhance the abilities of people
              and communities to prosper.
            </p>
            <p>Thus steadily bridging the rural-urban divide.</p>
            <p>
              Whereas, production will sustain supply as needed in other areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionIdentification;
