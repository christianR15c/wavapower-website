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
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="md:text-4xl text-xl text-neutralDGrey font-semibold mb-4">
          Recent Works
        </h2>
        <p className="md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* all wrecent work s */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {works.map((work) => (
          <div key={work.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={work.image}
              alt="work image"
              className="md:h-56 md:w-96 object-cover hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {work.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="font-bold text-brandSecondary hover:text-neutral-700"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#9933FF"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
