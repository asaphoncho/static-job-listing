import { useState } from 'react'
import './App.css'
import data from './data.json'

function App() {
  const [roles, setRoles] = useState(data)

  return (
    <>
      <div className='main-section'>
        <div className='header'></div>
        <div className='roles-container'>
          {roles.map((role, index)=>(
            <div key={index} className='role-card' style={role.featured == true ? {borderLeft: 'solid 7px hsl(180, 29%, 50%)'} : null}>
                <div className='first-part'>
                  <div className='logo-div'>
                    {<img src={role.logo} alt={role.company + " logo"} />}
                  </div>
                  <div className='role-details'>
                    <div className='role-headings'>
                      <span>{role.company}</span>
                      <div className='labels-container'>
                        {role.isNew == true ? <div className='new-label'>NEW!</div>:null}
                        {role.featured == true ? <div className='featured-label'>FEATURED</div>:null}
                      </div>
                    </div>
                    <div className='position-title'>{role.position}</div>
                    <div className='more-details'>
                      <span>{role.postedAt}</span>
                      <i className="fa-solid fa-circle" style={{fontSize:"0.2rem"}}></i>
                      <span>{role.contract}</span>
                      <i className="fa-solid fa-circle" style={{fontSize:"0.2rem"}}></i>
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>
                <div className='tags'>
                  <div className='tag'>{role.role}</div>
                  <div className='tag'>{role.level}</div>
                  {role.languages.map((language, index) => (<div className='tag' key={index}>{language}</div>))}
                  {role.tools.map((tool, index) => (<div className='tag' key={index}>{tool}</div>))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
