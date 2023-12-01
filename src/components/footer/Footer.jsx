import React from 'react'
import "./footer.css"
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
      <footer className='footer container'>
          <a href="#" className="footer__logo">Achiever</a>

          <ul className="perma__links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
          </ul>

          <div className="socials">  
            <a href="https://linkedin.com/in/nwachukwu-prince-784750285" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Code-Smart20/" target="_blank"><BsGithub/></a>
            <a href="https://twitter.com/achiever55545/" target="_blank"><BsTwitter/></a>
          </div>
      </footer>
  )
}

export default Footer