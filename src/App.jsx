import { useState } from 'react'
import './App.css'
import data from './data.json'

function App() {
  let filteredData
  const [roles, setRoles] = useState(data)
  const [filterTags, setFilterTags] = useState([])
  if(filterTags > 0){
    filteredData = data.map(d.role.includes(filterTags))
    setRoles(filteredData)
  }
  function handleTag(event){
    const tag = event.target.textContent;
    setFilterTags((f) => [...f, tag]);
    console.log(filterTags)
  }
  function handleClear(){
    setFilterTags([])
  }

  return (
    <>
      <div className='main-section'>
        <div className='filter-section'>
          <div className='added-tags'>
            {filterTags.map((ft,index) => (
              <div key={index} className='filtertag'>
                <div className='tag' style={{borderTopRightRadius:0, borderBottomRightRadius:0}}>{ft}</div>
                <button className='remove-btn'><i class="fa-solid fa-xmark"></i></button>
              </div>
            ))}
          </div>
          <button className='clear-btn' onClick={handleClear}>Clear</button>
        </div>
        <div className='header'>
        </div>
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
                  <button className='tag' onClick={handleTag}>{role.role}</button>
                  <button className='tag' onClick={handleTag}>{role.level}</button>
                  {role.languages.map((language, index) => (<button className='tag' onClick={handleTag} key={index}>{language}</button>))}
                  {role.tools.map((tool, index) => (<button className='tag' onClick={handleTag} key={index}>{tool}</button>))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
