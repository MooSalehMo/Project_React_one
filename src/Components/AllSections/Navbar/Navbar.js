import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.sass';

class Navbar extends Component {
  onc = () => {
            document.querySelector(".ul_navbar").classList.toggle("open");
            document.querySelector(".fa").classList.toggle("fa-bars");
   }
  render() {
    return (
      <nav className="Navbar_section">
        <div className="navbar_content">
          <div className="container">
            <div className= "navbar_logo" >
              <h1 className="navbar-brand">Template</h1>
            </div>
            <div className="parent_ul">
              <ul className = "ul_navbar" >
                <li><NavLink exact  to="/" >Home</NavLink></li>
                <li><NavLink to="/Contact" >Contact</NavLink></li>
              </ul>
              <button  onClick={() => { this.onc() }}> <i className="fa fa-bars fa-close" ></i> </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

