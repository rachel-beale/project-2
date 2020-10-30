import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <img src="/images/film.png" width="70px" height="28px"></img>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-dark is-family-code" to="/project-2">Welcome</Link>
            <Link className="button is-dark is-family-code" to="/project-2/search">Search</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>




}
// Link to a random movie - maybe on the welcome page?

export default Navbar


