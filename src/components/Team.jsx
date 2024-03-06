import React from 'react';
import dericImage from '../assets/team/deric.png';
import shammahImage from '../assets/team/shammah.png';
import patrickImage from '../assets/team/patrick.png';
import dieudonneImage from '../assets/team/dieudonne.png';
import ericImage from '../assets/team/eric.png';
import christianImage from '../assets/team/christian.jpeg';
import { TEAnimation } from 'tw-elements-react';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Deric',
      title: 'CEO & Fouder',
      image: dericImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 2,
      name: 'Shammah',
      title: 'title',
      image: shammahImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 3,
      name: 'Patrick',
      title: 'title',
      image: patrickImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 4,
      name: 'Dieudonne',
      title: 'title',
      image: dieudonneImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 5,
      name: 'Eric',
      title: 'title',
      image: ericImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 6,
      name: 'Christian',
      title: 'title',
      image: christianImage,
      link: 'https://www.linkedin.com/feed/',
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="team">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralGrey font-semibold mb-2">
          Meet Team
        </h2>
        <p className="text-neutralGrey">
          We are a team of 10 people from different backgrounds
        </p>
        <div className="pt-40 grid md:grid-cols-3 gap-28 md:gap-12">
          {team.map((teamMember) => (
            <TEAnimation
              key={teamMember.id}
              animation="[slide-right_1s_ease-in-out]"
              start="onLoad"
              repeatOnScroll
              className="[&>svg]:w-11"
            >
              <div className="animate-slidein border-t-4 space-y-4 group text-center md:my-6">
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
                <a
                  href={teamMember.link}
                  target="_blank"
                  className="block w-max mx-auto text-blue-500 text-sm"
                  rel="noreferrer"
                >
                  view bio
                </a>
              </div>
            </TEAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
