import React from 'react'
import './projects.css'
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'


function Projects() {
  return (
    <section id='projects' className='project__section container'>
      <h2>Projects</h2>
      <ProjectOne/>
      <ProjectTwo/>
    </section>
  )
}

export default Projects