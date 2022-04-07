// Import Files
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Logo
import icon2 from '../images/icon2.png'

// Bootstrap / SCSS
import 'bootstrap/dist/js/bootstrap.js'
import '../App.css'


export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-tertiary">
          <div className="container-fluid  ">
          <a className="navbar-brand" href="/">
      <img src={icon2} alt="" width="40" height="40"/>&nbsp;&nbsp;We Knead Pizza</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
                </li>
             <li className="nav-item dropdown">
             <a type="button" href="/menu" class="btn">Menu</a>
  <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/pizza">Pizza</Link></li>
                  <li><Link className="dropdown-item" to="/wings">Wings</Link></li>
                  <li><Link className="dropdown-item" to="/nachos">Nachos</Link></li>
                </ul>
                </li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          </ul>
            {/* <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-primary me-2">Login</button>
              <button type="button" class="btn btn-primary">Sign-up</button>
            </div> */}
            </div>
            </div>
          </nav>
        )
    }
}