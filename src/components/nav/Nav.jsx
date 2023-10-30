import React from 'react'
import {AiFillContacts, AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from "react-icons/ai"
import {BsFillBookFill} from "react-icons/bs"
import { useState } from 'react'
import './nav.css'

const Nav = () => {

  {/***** useState to change the navigation on a click ******/}
  const [activeNav,setActiveNav] = useState("#");
  
  return (
    <nav>
       <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiTwotoneHome/></a>
       <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUserAdd/></a>
       <a href="#experience"onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsFillBookFill/></a>
       <a href="#contact"onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav