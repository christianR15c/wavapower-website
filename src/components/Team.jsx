import React from 'react';
import banner2 from '../assets/wavapower2.jpg';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Deric',
      title: 'CEO & Fouder',
      image: banner2,
    },
    {
      id: 2,
      name: 'Shammah',
      title: 'title',
      image: banner2,
    },
    {
      id: 3,
      name: 'Patrick',
      title: 'title',
      image: banner2,
    },
    {
      id: 4,
      name: 'Dieudonne',
      title: 'title',
      image: banner2,
    },
    {
      id: 5,
      name: 'Eric',
      title: 'title',
      image: banner2,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="services">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralGrey font-semibold mb-2">
          Meet Team
        </h2>
        <p className="text-neutralGrey">
          We are a team of 10 people from different backgrounds
        </p>
        <div className="pt-40 grid md:grid-cols-3 gap-28 md:gap-12">
          {team.map((teamMember) => (
            <div
              key={teamMember.id}
              className="border-t-4 space-y-4 group text-center md:my-6"
            >
              <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                <img
                  src={teamMember.image}
                  alt="profile pic"
                  loading="lazy"
                  width="640"
                  height="805"
                  className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                />
              </div>
              <div className="mt-4 text-center">
                <h5 className="text-xl text-gray-800 font-semibold">
                  {teamMember.name}
                </h5>
                <span className="text-gray-500">{teamMember.title}</span>
              </div>
              <a href="#" className="block w-max mx-auto text-blue-500 text-sm">
                view bio
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
