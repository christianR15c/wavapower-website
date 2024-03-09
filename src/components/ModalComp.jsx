/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Label, Modal, TextInput } from 'flowbite-react';

const ModalComp = ({ openModal, setOpenModal }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  function handleSubmit() {
    console.log(name, email, phone);
  }

  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        className="lg:pt-0 md:pt-20 pt-28"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Get Involved
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Names" />
              </div>
              <TextInput
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone number" />
              </div>
              <TextInput
                id="phone"
                placeholder="07......"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="px-7 py-2 bg-brandSecondary text-white rounded hover:bg-neutralGrey transition-all duration-300 hover:-translate-y-4;"
            >
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalComp;
