import React from 'react'
import InfoCard from './InfoCard'
import sajjboutiqeCover from '../../assets/sajjboutiqeCover.jpg';
import mackbook from '../../assets/macbook.jpg';
import './projects.css'

function Projects() {
  return (
    <section id='projects' className='project__section'>
      <h2>Projects</h2>

      <div className="wrapper">
      <article>
        <img src={sajjboutiqeCover} alt="" />
      </article>
     <InfoCard/>
      </div>

      <div className="wrapper">
     <InfoCard/>
     <article>
        <img src={mackbook} alt="" />
      </article>
      </div>

      
      <div className="wrapper">
      <article>
        <img src={sajjboutiqeCover} alt="" />
      </article>
     <InfoCard/>
      </div>
    </section>
  )
}

export default Projects