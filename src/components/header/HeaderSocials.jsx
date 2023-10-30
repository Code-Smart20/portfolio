import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
          
      <a href="https://linkedin.com/in/nwachukwu-prince-784750285" target="_blank"><BsLinkedin/></a>
         
           
      <a href="https://github.com/Code-Smart20/" target="_blank"><BsGithub/></a>


      <a href="https://twitter.com/achiever55545/" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials