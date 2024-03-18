/* eslint-disable no-irregular-whitespace */
import React, { useEffect } from 'react';
import testimony from '../assets/testimony.jpg';
import testimony1 from '../assets/testimony1.jpg';
import testimony2 from '../assets/testimony2.jpg';
import testimony3 from '../assets/testimony3.jpg';
import testimony4 from '../assets/testimony4.jpg';
import testimony5 from '../assets/testimony5.jpg';
import testimony6 from '../assets/testimony6.jpg';
import testimony7 from '../assets/testimony7.jpg';
import testimony8 from '../assets/testimony8.jpg';
import testimony9 from '../assets/testimony9.jpg';
import testimony10 from '../assets/testimony10.jpg';
import { useState } from 'react';
import { Modal } from 'flowbite-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Impact = () => {
  const [openModal, setOpenModal] = useState(false);

  const testimonyPics = [
    { image: testimony1, id: 1 },
    { image: testimony2, id: 2 },
    { image: testimony3, id: 3 },
    { image: testimony4, id: 4 },
    { image: testimony5, id: 5 },
    { image: testimony6, id: 6 },
    { image: testimony7, id: 7 },
    { image: testimony8, id: 8 },
    { image: testimony9, id: 9 },
    { image: testimony10, id: 10 },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div
      className="md:px-14 flex flex-col gap-3 px-4 pt-8 max-w-screen-2xl mx-auto text-neutralDGrey bg-neutralSilver"
      id="impact"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="md:text-4xl text-xl font-semibold mb-4">IMPACT</h2>
      </div>
      <h2 className="md:text-4xl text-xl font-semibold text-neutralGrey">
        1 Down,
      </h2>
      <h2 className="md:text-4xl text-xl font-semibold mb-1 text-neutralGrey">
        597 million to go.
      </h2>
      <section className="mb-32 md:text-left">
        <div className="block rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap">
            <div
              data-aos="fade-right"
              className="block w-full shrink-0 grow-0 basis-auto md:flex md:w-6/12 lg:w-4/12"
            >
              <div className="flex md:justify-start justify-center">
                <img
                  src={testimony}
                  alt="Trendy Pants and Shoes"
                  className="w-[70%] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="animate-slidein mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                  Nyirakamana
                </h2>
                <p className="animate-slidein mb-4 font-semibold">
                  Local citizen
                </p>
                <p className="animate-slidein mb-4 font-semibold">
                  Location: Gicumbi, Rwanda
                </p>

                <p className="animate-slidein mb-6 text-neutral-500 dark:text-neutral md:text-md text-sm">
                  Since late February 2024, our first WavaPower user; situated
                  in Rwamiko, Gicumbi district without access to the national
                  grid and unable to afford alternative sources like solar; has
                  experienced the transformative benefits of our electricity
                  solution. We are maintaining daily communication and so far,
                  have received positive feedback. This family now enjoys
                  well-lit evenings and a comfortable resumption of daily
                  activities, all thanks to the installation of WavaPower.
                </p>
                <button
                  className="btn-primary animate-slidein"
                  onClick={() => setOpenModal(true)}
                >
                  Gallery
                </button>
                <Modal
                  show={openModal}
                  size="7xl"
                  onClose={() => setOpenModal(false)}
                  className="md:pt-0 pt-6"
                >
                  <Modal.Header>Gallery</Modal.Header>
                  <Modal.Body>
                    <div className="grid md:grid-cols-2 grid-cols gap-2">
                      {testimonyPics.map((testimony) => (
                        <div key={testimony.id}>
                          <img
                            className="h-auto max-w-full rounded-lg"
                            src={testimony.image}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
