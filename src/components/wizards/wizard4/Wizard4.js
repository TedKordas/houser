import React, { Component } from 'react';
import './Wizard4.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';

class Wizard4 extends Component {
  render() {
    return (
      <div className="wizard4">
        <Nav />
        <div className='content'>
            <div className='listing-header'>
                <span className='header-span'>Add new listing</span>
                <Link to='dashboard'><button className='cancel'>Cancel</button></Link>
            </div>
            <div className='step-container'>
                <span className='step'>Step 4</span>
                <div className='step-img-container'>
                    <img src={complete}/>
                    <img src={complete}/>
                    <img src={complete}/>
                    <img src={active}/>
                    <img src={inActive}/>
                </div>
            </div>
            <div class='step-info-container'>
                <div style={{width: '70%'}}><span className='loan-span'>Loan Amount</span></div>
                <input className='loan-input'></input>
                <div style={{width: '70%', margin:'20px 0 0 0'}}><span className='loan-span'>Monthly Mortgage</span></div>
                <input className='loan-input'></input>                
                                 
                <div className='button-container'>
                    <Link to='wizard3'><button className='next'>Previous Step</button></Link>
                    <Link to='wizard5'><button className='next'>Next Step</button></Link>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Wizard4;
