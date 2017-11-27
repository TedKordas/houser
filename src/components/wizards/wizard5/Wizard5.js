import React, { Component } from 'react';
import './Wizard5.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';

class Wizard5 extends Component {
  render() {
    return (
      <div className="wizard5">
        <Nav />
        <div className='content'>
            <div className='listing-header'>
                <span className='header-span'>Add new listing</span>
                <Link to='dashboard'><button className='cancel'>Cancel</button></Link>
            </div>
            <div className='step-container'>
                <span className='step'>Step 5</span>
                <div className='step-img-container'>
                    <img src={complete}/>
                    <img src={complete}/>
                    <img src={complete}/>
                    <img src={complete}/>
                    <img src={active}/>
                </div>
            </div>
            <div class='step-info-container'>

                <span className='rent'>Recomended Rent</span>

                <div style={{width: '70%', margin:'20px 0 0 0'}}><span className='loan-span'>Desired Rent</span></div>
                <input className='loan-input'></input>   
               
                <div className='button-container'>
                    <Link to='wizard4'><button className='next'>Previous Step</button></Link>
                    <Link to='dashboard'><button className='complete'>complete</button></Link>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Wizard5;
