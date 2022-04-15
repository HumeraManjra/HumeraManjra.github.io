import React from 'react'
import Resume from '../../assets/Resume.pdf'
import {NavHashLink} from 'react-router-hash-link'

function CTA() {
  return (
    <aside className='cta'>
       <a href={Resume} download className='btn'>Download Resume</a>
       <NavHashLink to={"/#contact"} className='btn btn-primary'>Contact</NavHashLink>
    </aside>
  )
}

export default CTA