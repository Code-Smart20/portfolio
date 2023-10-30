
import './header.css'
import Cta from './Cta'
import HeaderSocials from './HeaderSocials'
import profile from "./../../Assets/profile.jpg"
 

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Nwachukwu prince </h1>

            <h5 className="text-light">
                Front End Developer
            </h5>

            <Cta/>
            
            <div className="me">
              <img src={profile} alt="profilepics" />
            </div>
            
          <a href="#contact" className='scroll__down'>Scroll Down</a>

          <HeaderSocials/>


        </div>
    </header>
  )
}

export default Header