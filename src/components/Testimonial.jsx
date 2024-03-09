import React from 'react';
import banner2 from '../assets/wavapower2.jpg';
import { useState } from 'react';
import { Modal } from 'flowbite-react';

const Testimonial = () => {
  const [openModal, setOpenModal] = useState(false);

  const CHARACTER_LIMIT = 100;

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: '',
    message: '',
  });

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
      // TODO: Enter code here
    }
  };

  return (
    <div
      className="md:px-14 flex flex-col gap-3 px-4 pt-16 max-w-screen-2xl mx-auto"
      id="impact"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="md:text-4xl text-xl text-neutralDGrey font-semibold mb-4">
          IMPACT
        </h2>
      </div>
      <h2 className="md:text-4xl text-xl text-neutralDGrey font-semibold mb-4">
        1 Down,597 Million to go.
      </h2>
      <section className="mb-32 text-center md:text-left">
        <div className="block rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto md:flex md:w-6/12 lg:w-4/12">
              <img
                src={banner2}
                alt="Trendy Pants and Shoes"
                className="w-full rounded-lg"
              />
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
                  Ad, at blanditiis quaerat laborum officia incidunt cupiditate
                  dignissimos voluptates eius aliquid minus praesentium!
                  Perferendis et totam ipsum ex aut earum libero accusamus
                  voluptas quod numquam saepe, consequuntur nihil quia tenetur
                  consequatur. Quis, explicabo deserunt quasi assumenda ea
                  maiores nulla, et dolor saepe praesentium natus error
                  reiciendis voluptas iste. Esse, laudantium ipsum animi, quos
                  voluptatibus atque vero repellat sit eligendi autem maiores
                  quasi cum aperiam. Aperiam rerum culpa accusantium, ducimus
                  deserunt aliquid alias vitae quasi corporis placeat vel
                  maiores explicabo commodi!
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
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
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

export default Testimonial;
