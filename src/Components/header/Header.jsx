import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import {NavHashLink} from 'react-router-hash-link'

function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello, I'm</h5>
            <h1>Humera Manjra</h1>
            <h5>Front-End Web Developer</h5>
            <CTA/>
            <div>
              <img src={me} alt="" className='me'/>
            </div>
            <NavHashLink to={"/#contact"} className='scroll__down'>Scroll Down</NavHashLink>
            <HeaderSocial/>
        </div>
    </header>
  )
}

export default Header