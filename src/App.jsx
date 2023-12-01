import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Technologies from './components/technologies/Technologies'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className='app'>
       <Header/>
       <Nav/>
       <About />
       <Technologies/>
       <Portfolio/>
      <Contact/>
      <Footer/>
       
    </div>
  )
}

export default App