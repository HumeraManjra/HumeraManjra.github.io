import React from 'react'
import {FaHtml5} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'

function InfoCard() {
  return (
    <article className='article__right'>
    <h3>SajjBoutique</h3>
    <p>An online shopping store made with Vanilla JS (no external libraries!)</p>
    <div className="icons_wrapper">
        <h4>MADE WITH</h4>
        <div className="icons">
            <FaHtml5 className='skill__icon'/>
            <i className="devicon-sass-original"></i>
            <SiJavascript className='skill__icon'/>
        </div>
    </div>
    <div className="project__links">
      <a href="#">Live Site</a>
      <a href="#">Github</a>
    </div>
  </article>
  )
}

export default InfoCard