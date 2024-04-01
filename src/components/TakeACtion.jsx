/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import bgImage3 from '../assets/wirelessLamp3.jpg';
import invest from '../assets/invest1.jpg';
import partner from '../assets/partner.png';
import joinTeam from '../assets/jointeam.png';
import { StepperFun } from './Stepper';

export function TakeAction() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const successNotify = () =>
    toast.success('Your message was successfully sent!');
  const notify = () => toast.error('Message not sent, please try again later.');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4slt6f2',
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
  };

  return (
    <div
      className="md:px-14 flex flex-col gap-3 pt-8 px-4 max-w-screen-2xl mx-auto"
      id="action"
    >
      <h2 className="md:text-4xl text-xl text-neutralDGrey font-semibold text-center mb-4">
        Take Action
      </h2>

      <StepperFun activeStep={activeStep} setActiveStep={setActiveStep} />

      <section className="my-12">
        <div
          style={{ backgroundImage: `url(${invest})` }}
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          {' '}
          <h3 className="lg:text-3xl text-xl font-bold leading-none flex justify-center text-white pt-20">
            {`${
              activeStep === 0
                ? 'Become an Investor'
                : activeStep === 1
                ? 'Become a Partner'
                : 'Join the Team'
            }`}
          </h3>
        </div>
        <div className="container mx-auto">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 lg:mx-20 md:mx-12 mx-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form ref={form} onSubmit={sendEmail}>
                  <h2 className="text-center pb-4">
                    {' '}
                    {`${
                      activeStep === 0
                        ? 'Investor'
                        : activeStep === 1
                        ? 'Partner'
                        : 'Join the Team'
                    }`}
                  </h2>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline outline-1 outline-slate-400 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Name"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-[hsla(0,1%,71%,1)] peer-focus:px-2 peer-focus:backdrop-blur-[30px] peer-focus:rounded-xl peer-focus:pt-1"
                      htmlFor="exampleInput90"
                    >
                      {name ? name : 'Name'}
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline outline-1 outline-slate-400 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91"
                      placeholder="Email"
                      name="user_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-[hsla(0,1%,71%,1)] peer-focus:px-2 peer-focus:backdrop-blur-[30px] peer-focus:rounded-xl peer-focus:pt-1"
                      htmlFor="exampleInput91"
                    >
                      {email ? email : 'Email'}
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="phone"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline outline-1 outline-slate-400 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91"
                      placeholder="Phone"
                      name="user_phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-[hsla(0,1%,71%,1)] peer-focus:px-2 peer-focus:backdrop-blur-[30px] peer-focus:rounded-xl peer-focus:pt-1"
                      htmlFor="exampleInput91"
                    >
                      {phone ? phone : 'Phone'}
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline outline-1 outline-slate-400 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-[hsla(0,1%,71%,1)] peer-focus:px-2 peer-focus:backdrop-blur-[30px] peer-focus:rounded-xl peer-focus:pt-1"
                    >
                      {message ? message : 'Message'}
                    </label>
                  </div>

                  <button className="btn-primary">Send</button>
                </form>
                <Toaster />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start cursor-pointer">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 px-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <a href="tel:+250 780 331 801" className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Call</p>

                        <p className="text-neutral-500 dark:text-neutral-200">
                          +250 780 331 801
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start cursor-pointer">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 px-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <a href="mailto:info@wavapower.rw" className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Email</p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          {`${
                            activeStep === 0
                              ? 'investor@wavapower.rw'
                              : activeStep === 1
                              ? 'partner@wavapower.rw'
                              : 'team@wavapower.rw'
                          }`}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex cursor-pointer">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 px-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <a
                          href="https://wa.me/+250780331801"
                          className="mb-2 font-bold dark:text-white"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Whatsapp
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex cursor-pointer">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 px-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <a
                          href="https://www.linkedin.com/in/habineza-christian-110298103/"
                          target="_blank"
                          className="mb-2 font-bold dark:text-white"
                        >
                          Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <button
          type="submit"
          className="px-7 py-2 bg-brandSecondary text-white rounded hover:bg-neutralGrey transition-all duration-300 hover:-translate-y-4;"
        >
          Submit
        </button> */}
    </div>
  );
}

export default TakeAction;
