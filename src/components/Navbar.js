import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar (props){
 
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.abouttext}</a>
          </li>
          </ul>
          <span className="dot1" onClick={props.theme1}></span>
          <br/>
  <span className="dot2" onClick={props.theme2}></span>
  <br/>
  <span className="dot3" onClick={props.theme3}></span>
  <br/>
  <span className="dot4" onClick={props.theme4}></span>
          <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`} >
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>

        
      </div>
    </div>
    
  </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string,
    abouttext:PropTypes.string
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    abouttext:PropTypes.string.isRequired
}

Navbar.defaultProps =
{
    title:'default name',
    abouttext:'About text'
}

