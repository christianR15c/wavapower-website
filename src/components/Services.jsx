import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Domestic installation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      image: 'src/assets/icons/home.png',
    },
    {
      id: 2,
      title: 'Businesses',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      image: 'src/assets/icons/business.png',
    },
    {
      id: 3,
      title: 'Schools',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      image: 'src/assets/icons/school.png',
    },
    {
      id: 4,
      title: 'Hospitals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      image: 'src/assets/icons/hospital.png',
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralGrey font-semibold mb-2">
          Our Clients/Targeted Clients
        </h2>
        <p className="text-neutralGrey">
          We are targeting 200+ clients by the end of 2025.
        </p>

        {/* company logo's */}
        <div className="flex flex-wrap justify-between my-12">
          <img
            src="src/assets/carnegie-mellon-university-logo.png"
            alt="carnegie-mellon-university-logo"
            className="w-[60px]"
          />
          <img
            src="src/assets/MTN-Logo.png"
            alt="MTN-Logo"
            className="w-[60px]"
          />
          <img
            src="src/assets/Rwanda-Bralirwa-logo.png"
            alt="Rwanda-Bralirwa-logo"
            className="w-[60px]"
          />
          <img
            src="src/assets/skol-logo.png"
            alt="kol-logo"
            className="w-[60px]"
          />
          <img src="src/assets/urlogo.png" alt="urlogo" className="w-[60px]" />
        </div>
      </div>

      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralGrey font-semibold mb-3">
          Electricity made more accessible and reliable
        </h2>
        <p className="text-neutralGrey">Who is Wavapower suitable for?</p>
      </div>

      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#efe3fd] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt={service.title} className="" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
