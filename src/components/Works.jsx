import React from 'react';
import banner1 from '../assets/wavapower1.jpg';

const Works = () => {
  const works = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: banner1,
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: banner1,
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: banner1,
    },
  ];

  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 pt-16"
      id="works"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="animate-slidein md:text-4xl text-xl text-neutralDGrey font-semibold mb-4">
          Electrical energy made wireless
        </h2>
        <p className="animate-slidein md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
          Reliable, sustainable,Renewable and affordable
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
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Works;
