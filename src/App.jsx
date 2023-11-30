import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Technologies from './components/technologies/Technologies'

const App = () => {
  return (
    <div className='app'>
       <Header/>
       <Nav/>
       <About />
       <Technologies/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       
    </div>
  )
}

export default App