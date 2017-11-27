import React, { Component } from 'react';
import './Nav.css';
import logo from '../../assets/header_logo.png'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header className="Nav-header">
          <div className='header-content'>
            <div className='header-left'>
              <img src={logo} />
              <span className='span-houser'>Houser</span>
              <span className='span-dashboard'>Dashboard</span>
            </div>
            <div className='header-right'>
              <Link to='/' className='logout'><span>Logout</span></Link>
            </div>
          </div>

        </header>

      </div>
    );
  }
}

export default Nav;
