import './skills.css'
import {FaHtml5, FaCss3, FaUniversalAccess, FaTerminal} from 'react-icons/fa'
import {SiJavascript, SiReact, SiMysql} from 'react-icons/si'
import {MdOutlineSettingsEthernet} from 'react-icons/md'
import {DiResponsive} from 'react-icons/di'

function Skills() {
  return (
    <section id='skills' className='skills__section container'>
      <h2>SKILLS</h2>
        <article className='skills__container'>
           <ul className='skills'>
              <li>
                <FaHtml5 className='skill__icon'/>
                <p>HTML5</p>
              </li>
              <li>
              <FaCss3 className='skill__icon'/>
                <p>CSS</p>
              </li>
              <li>
              <SiJavascript className='skill__icon'/>
                <p>Javascript + ES6</p>
              </li>
              <li>
              <SiReact className='skill__icon'/>
                <p>React</p>
              </li>
              <li>
              <SiMysql className='skill__icon_small'/>
                <p>SQL</p>
              </li>
              <li>
              <i className="devicon-sass-original"></i>
              <p>Saas</p>
              </li>
              <li>
              <MdOutlineSettingsEthernet className='skill__icon_small'/>
              <p>Rest API</p>
              </li>
              <li>
              <i className="devicon-git-plain"></i>
                <p>Git</p>
              </li>
              <li> 
                 <i className="devicon-github-original"></i>
                <p>Github</p>
              </li>
              <li>
                <DiResponsive className='skill__icon_small'/>
                <p>Responsive Design</p>
              </li>
              <li>
                <FaUniversalAccess className='skill__icon_small'/>
                <p>Accessibility</p>
              </li>
              <li>
                <FaTerminal className='skill__icon_small'/>
                <p>Terminal</p>
              </li>
              
           </ul>
        </article>

    </section>
  )
}

export default Skills