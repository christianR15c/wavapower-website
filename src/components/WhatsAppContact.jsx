/* eslint-disable react/prop-types */
import React from 'react';

const URL = 'https://wa.me';

const WhatsAppContact = ({ number, message, children, onClick }) => {
  number = number?.replace(/[^\w\s]/gi, '').replace(/ /g, '');
  return <div></div>;
};

export default WhatsAppContact;
