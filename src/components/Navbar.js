import React from 'react'
import { NavLink } from 'react-router-dom'
import '../main.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-light border-bottom shadow-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand m-auto" href="#"><img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height={72} width={148}></img></a>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-secondary">English</button>
          <button type="button" className="btn btn-outline-secondary">Hindi</button>
        </div>
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <h5>Categories</h5>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className='text-decoration-none' to='/'>All News</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">India</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Business</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">World</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Politics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Technology</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Startup</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Entertainment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Miscellaneous</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hatke</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Science</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Automobile</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<div className='container banner d-md-flex d-none'>
  <div className='text'>For the best experience use inshorts app on your smartphone</div>
  <div className='app-img'>
    <img src='https://assets.inshorts.com/website_assets/images/appstore.png' width={150}></img>
    <img src='https://assets.inshorts.com/website_assets/images/playstore.png' width={150}></img>
  </div>
</div>
    </>
  )
}

export default Navbar

