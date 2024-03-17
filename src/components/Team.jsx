import React, { useEffect } from 'react';
import dericImage from '../assets/team/dericFoto.png';
import assoumanImage from '../assets/team/AssoumanFoto.png';
import shammahImage from '../assets/team/shammahFoto.png';
import patrickImage from '../assets/team/patrickFoto.png';
import dieudonneImage from '../assets/team/dieudonneFoto.png';
import ericImage from '../assets/team/ericFoto.png';
import christianImage from '../assets/team/christianFoto.png';
import { TEAnimation } from 'tw-elements-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  const team = [
    {
      id: 1,
      name: 'Deric Kwizera',
      title: 'Co-Fouder & CEO',
      image: dericImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 2,
      name: 'Shammah LaGrâce',
      title: 'Co-Founder & Business, Strategy developer',
      image: shammahImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 3,
      name: 'Patrick Musabyimana',
      title: 'Co-Founder & Product Designer',
      image: patrickImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 4,
      name: 'Assouman Nkundabandi',
      title: 'Technical Assistant',
      image: assoumanImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 5,
      name: 'Dieudonne Nshimiyimana',
      title: 'Accounting & Legal',
      image: dieudonneImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 6,
      name: 'Eric Ndekezi',
      title: 'Advertising & Marketing',
      image: ericImage,
      link: 'https://www.linkedin.com/feed/',
    },
    {
      id: 7,
      name: 'Christian Habineza',
      title: 'Software Engineer',
      image: christianImage,
      link: 'https://www.linkedin.com/feed/',
    },
  ];
  return (
    <div className="md:py-1 py-4 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralGrey font-semibold mb-2">
          Meet the Team
        </h2>

        <div className="w-full pt-20 flex flex-wrap justify-center gap-28 md:gap-12">
          {team.map((teamMember) => (
            <TEAnimation
              key={teamMember.id}
              animation="[slide-right_1s_ease-in-out]"
              start="onLoad"
              repeatOnScroll
              className="[&>svg]:w-11 lg:w-1/4 md:w-1/3 w-full flex justify-center items-center"
            >
              <div
                data-aos="fade-up"
                className="border-t-4 space-y-4 group text-center justify-center mx-auto md:my-6"
              >
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                  <img
                    src={teamMember.image}
                    alt="profile pic"
                    loading="lazy"
                    width="640"
                    height="805"
                    className="w-full h-full object-contain -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h5 className="text-xl text-gray-800 font-semibold">
                    {teamMember.name}
                  </h5>
                  <span className="text-gray-500">{teamMember.title}</span>
                </div>
                {/* <a
                  href={teamMember.link}
                  target="_blank"
                  className="block w-max mx-auto text-blue-500 text-sm"
                  rel="noreferrer"
                >
                  view bio
                </a> */}
              </div>
            </TEAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
