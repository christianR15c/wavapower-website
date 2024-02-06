import React from 'react';
import aboutImage from '../assets/electric-power.jpg';
import { IoIosPeople } from 'react-icons/io';
import { IoBusinessOutline } from 'react-icons/io5';

const About = () => {
  return (
    <div id='about'>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src={aboutImage}
              alt="electric power"
              className="md:w-72 object-contain"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="md:text-4xl text-xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              We brought wireless electricity to life
            </h2>
            <p className="md:w-3/5 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu risus quis varius. Ullamcorper
              morbi tincidunt ornare massa eget egestas purus viverra accumsan.
              Enim facilisis gravida neque convallis a cras semper.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="md:text-2xl lg:text-3xl text-xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Prevent global warming <br />{' '}
              <span className="text-brandSecondary">
                Using wireless electricity
              </span>
            </h2>
            <p className="md:w-3/5 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing .
            </p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <IoIosPeople className="text-3xl text-brandSecondary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    400,000
                  </h4>
                  <p>customers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoIosPeople className="text-3xl text-brandSecondary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    400,000
                  </h4>
                  <p>customers</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <IoIosPeople className="text-3xl text-brandSecondary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    400,000
                  </h4>
                  <p>customers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoIosPeople className="text-3xl text-brandSecondary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    400,000
                  </h4>
                  <p>customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
