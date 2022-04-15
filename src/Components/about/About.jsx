import React from 'react'
import './about.css'
import SocialFollow from './SocialFollow'

function About() {
  return (
    <section id='about' className='about__section'>
    <h2>ABOUT ME</h2>
    <article className='container about__container'>
        <p>
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              esse nihil, non facilis dolore itaque nobis reiciendis minima magnam
              ea ipsa aut atque temporibus assumenda eos omnis vel voluptatem
              architecto! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Deserunt esse nihil, non facilis dolore itaque nobis
              reiciendis minima magnam ea ipsa aut atque temporibus assumenda eos
              omnis vel voluptatem architecto!  Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Deserunt esse nihil, non facilis
              dolore itaque nobis reiciendis minima magnam ea ipsa aut atque
              temporibus assumenda eos omnis vel voluptatem architecto! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Deserunt esse
              nihil, non facilis dolore itaque nobis reiciendis minima magnam ea
              ipsa aut atque temporibus assumenda eos omnis vel voluptatem
              architecto! */}
            </p>
            <SocialFollow/>
      </article>
    </section>
  )
}

export default About