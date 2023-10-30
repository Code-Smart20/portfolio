import React from 'react';
import profile from '../../Assets/profile.jpg';
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc"


function About() {

  return (
    <section id='about'>
       <h5>Get to Know</h5>
       <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
           <img src={profile} className='about__me-image' height="100%" alt="my image coding" />
        </div>
       
       <div className="about__content">
          <div className="about__cards">

              <article className="about__card">
              
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ years</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>40+ clients worldwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+</small>
              </article>

          </div>

          <p>Hello, i am Nwachukwu priNce Ikedinachi Front End Wrb Developer From Nigeria</p>
          <a href="#contact" className='btn'>Lets Talk</a>
       </div>
       </div>

    </section>
  )
}

export default About