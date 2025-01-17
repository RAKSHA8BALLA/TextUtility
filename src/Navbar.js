import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  // const textColor = props.mode === 'light' ? 'dark' : 'light';
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <h4 style={{ margin: '10px', color: textColor }}>TextUtils</h4> */}
          <a className="navbar-brand" href="#">TextUtility</a>
          {/* <a className="navbar-brand" href="/">Navbar</a> */}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              {/* <Link className="nav-link" to="/about">About</Link> */}
            </div>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
