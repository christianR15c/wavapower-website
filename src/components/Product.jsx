import React from 'react';
import aboutImage from '../assets/about-picture.jpg';

const Product = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <h2 className="md:text-4xl text-xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Learn more about our product
            </h2>
            <p className="md:w-3/5 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu risus quis varius. Ullamcorper
              morbi tincidunt ornare massa eget egestas purus viverra accumsan.
              Enim facilisis gravida neque convallis a cras semper.
            </p>
            <button className="btn-primary md:flex hidden">Learn More</button>
          </div>
          <div>
            <img
              src={aboutImage}
              alt="electric power"
              className="object-contain"
            />
          </div>
          <button className="md:hidden flex btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
