/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { Label, Modal, TextInput } from 'flowbite-react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const ModalComp = ({ openModal, setOpenModal }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  const form = useRef();
  const successNotify = () =>
    toast.success('Your message was successfully sent!');
  const notify = () => toast.error('Message not sent, please try again later.');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r8hfl4h',
        'template_ihpylw8',
        form.current,
        'XmlYJbJCXXfUrcfUU'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          notify();
          console.log(error.text);
        }
      );
    successNotify();
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => {
      setOpenModal(false);
    }, '3000');
  };

  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        className=""
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
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
                name="user_name"
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
                name="user_email"
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
                name="user_phone"
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Message" />
              </div>
              <TextInput
                id="Message"
                placeholder="Your message"
                sizing="lg"
                value={message}
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              // onClick={handleSubmit}
              className="px-7 py-2 bg-brandSecondary text-white rounded hover:bg-neutralGrey transition-all duration-300 hover:-translate-y-4"
            >
              Submit
            </button>
          </form>
          <Toaster />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalComp;
