import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <TextField label="Name" type="text" name="from_name" /> <br />
      <TextField label="Email" type="email" name="user_email" /><br />
      <TextField label="Message" name="message" /><br />
      <input type="submit" value="Send" /><br />
    </form>
  );
};

