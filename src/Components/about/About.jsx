import React from 'react'
import './about.css'
import SocialFollow from './SocialFollow'

function About() {
  return (
    <section id='about' className='about__section container'>
    <h2>ABOUT ME</h2>
    <article className='container about__container'>
        <p>
        Hello World! I'm Humers Manjra, a Front-End Web Developer based out of Toronto. 
        From bussiness field to lines of code on a web page, 
        I love combining the worlds of logic and creative design to make eye-catching, 
        accessible, and user-friendly websites and applications.
        </p>
        <p>
          Technology leads, society follows. 
          The move towards increasing inclusivity and diversity in the industry through 
          representation is of importance to me.
        </p>
        <p> 
            I'm excited to make the leap and continue refining my skills with the right company. 
            Drop me a line and/or your favourite restaurant in Toronto in the contact form below or check me out at:
        </p>
            <SocialFollow/>
      </article>
    </section>
  )
}

export default About