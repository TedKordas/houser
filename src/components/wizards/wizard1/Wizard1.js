import React, { Component } from 'react';
import './Wizard1.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import { Link } from 'react-router-dom';

class Wizard1 extends Component {
  render() {
    return (
      <div className="wizard1">
        <Nav />
        <div className='content'>
            <div className='listing-header'>
                <span className='header-span'>Add new listing</span>
                <Link to='dashboard'><button className='cancel'>Cancel</button></Link>
            </div>
            <div className='step-container'>
                <span className='step'>Step 1</span>
                <div className='step-img-container'>
                    <img src={active}/>
                    <img src={inActive}/>
                    <img src={inActive}/>
                    <img src={inActive}/>
                    <img src={inActive}/>
                </div>
            </div>
            <div class='step-info-container'>
                <div className='name-container'><span className='prop-name'>Property Name</span></div>
                <input className='input-name'></input>
                <div className='desc-container'><span className='prop-desc'>Property Description</span></div>
                <textarea className='input-desc'></textarea>
            </div>

            <div className='next-btn'>
                <Link to='wizard2'><button className='next'>Next Step</button></Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Wizard1;
