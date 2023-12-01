import React, { useRef } from 'react';
import "./contact.css"
import profile1 from '../../Assets/profile1.jpg'
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs.sendForm('service_5wezv47', 'template_zrwmmeh', form.current, '43BN1JyYQxTgxRbz8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__main">
        <img className='image' src={profile1} alt="" />
        <div className="fadebg"></div>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              {/* email icon className="contact__option-icon" */}
              <MdOutlineEmail />
              <h4>Email</h4>
              <h5>bldrnwagod@gmail.com</h5>
              <a href="mailto:bldrnwagod@gmail.com" target='_blank'>Send A message</a>
            </article>
            <article className="contact__option">
              {/* wadsap icon className="contact__option-icon" */}
              <BsWhatsapp />
              <h4>Whatsapp</h4>
              <h5>+23409166485115</h5>
              <a href="https://api.whatsapp.com/send?phone=23409166485115" target='_blank'>Send A message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email Address' required />
            <textarea name="message" placeholder='Your message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
