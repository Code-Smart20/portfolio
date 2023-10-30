import React from 'react'
import "./contact.css"
import profile from '../../Assets/profile.jpg'
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__main">
        <img className='image' src={profile } alt="" />
        <div className="fadebg">

        </div>
        <div className="container contact__container">

          <div className="contact__options">

            <article className="contact__option">
              {/****email icon  className= "contact__option-icon*/}
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>bldrnwagod@gmail.com</h5>
              <a href="mailto:bldrnwagod@gmail.com" target='_blank'>Send A  message</a>
            </article>


            <article className="contact__option">
              {/****wadsap icon className ="contact__option-icon" */}
              <BsWhatsapp/>
              <h4>Whatssap</h4>
              <h5>+23409166485115</h5>
              <a href="https://api.whatsapp.com/send?phone+23409166485115" target='_blank'>Send A message</a>
            </article>

          </div>

          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email Adress' required />
            <textarea name="message" placeholder='your message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'> Submit</button>
          </form>
        </div>
      </div>
     
        
    </section>
  )
}

export default Contact