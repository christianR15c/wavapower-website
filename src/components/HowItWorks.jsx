import React from 'react';

const HowItWorks = () => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 pt-16"
      id="works"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="animate-slidein lg:text-5xl md:text-4xl text-2xl text-neutralDGrey font-semibold">
          Electrical energy
        </h2>
        <h2 className="animate-slidein lg:text-5xl md:text-4xl text-2xl text-neutralDGrey font-semibold mb-1">
          made wireless
        </h2>
        <p className="animate-slidein w-full md:text-lg  text-sm text-neutralGrey mb-8 mx-auto">
          Reliable, Sustainable, Renewable and Affordable
        </p>
      </div>

      {/* video section */}
      <div className=" w-full h-full flex justify-center z-[-1]">
        <video
          className="h-full w-full lg:w-1/2 md:w-3/4 rounded-lg"
          controls
          autoPlay
          muted
        >
          <source
            src="https://res.cloudinary.com/christian-habineza/video/upload/v1710072656/Prototype_prgsqt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HowItWorks;
