import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {ImUser} from 'react-icons/im'
import {VscTools} from 'react-icons/vsc'
import {BiTask} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {NavHashLink} from 'react-router-hash-link'


function Nav() {
 const [activeLink, setActiveLink] = useState('#');


  return (
    <nav>

      <div className="nav__link__wrapper">
        <NavHashLink  to={"/#"} smooth  onClick={()=> setActiveLink('#')} className={activeLink==='#' ? 'active-link' : ''}>
          <AiOutlineHome/>
        </NavHashLink>
        <p className='nav__label'>Home</p>
      </div>
    
      <div className="nav__link__wrapper">
        <NavHashLink  to={"/#about"} smooth  onClick={()=>setActiveLink('#about')} className={activeLink==='#about' ? 'active-link' : ''}>
          <ImUser/>
        </NavHashLink>
        <p className='nav__label'>About</p>
      </div>

      <div className="nav__link__wrapper">
        <NavHashLink  to={"/#skills"} smooth onClick={()=>setActiveLink('#skills')} className={activeLink==='#skills' ? 'active-link' : ''}>
          <VscTools/>
        </NavHashLink>
        <p className='nav__label'>Skills</p>
      </div>
      <div className="nav__link__wrapper">
        <NavHashLink exct to={"/#projects"} smooth  onClick={()=>setActiveLink('#projects')} className={activeLink==='#projects' ? 'active-link' : ''}>
          <BiTask/>
        </NavHashLink>
        <p className='nav__label'>Projects</p>
      </div>

      <div className="nav__link__wrapper">
      <NavHashLink  to={"/#contact"} smooth onClick={()=>setActiveLink('#contact')} className={activeLink==='#contact' ? 'active-link' : ''}>
        <MdEmail/>
      </NavHashLink>
      <p className='nav__label'>Contact</p>
      </div>
    </nav>
  )
}

export default Nav