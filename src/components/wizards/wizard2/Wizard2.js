import React, { Component } from 'react';
import './Wizard2.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';

class Wizard2 extends Component {
  render() {
    return (
      <div className="wizard2">
        <Nav />
        <div className='content'>
            <div className='listing-header'>
                <span className='header-span'>Add new listing</span>
                <Link to='dashboard'><button className='cancel'>Cancel</button></Link>
            </div>
            <div className='step-container'>
                <span className='step'>Step 2</span>
                <div className='step-img-container'>
                    <img src={complete}/>
                    <img src={active}/>
                    <img src={inActive}/>
                    <img src={inActive}/>
                    <img src={inActive}/>
                </div>
            </div>
            <div class='step-info-container'>
                <div style={{width: '70%'}}><span className='address-span'>Address</span></div>
                <input className='address-input'></input>
                <div className='city-state-container'>
                    <div className='city-container'>
                        <span className='city-span'>City</span>
                        <input className='city-input'></input>
                    </div>
                    <div className='state-container'>
                        <span className='state-span'>State</span>
                        <input className='state-input'></input>
                    </div>    
                </div>
                <div className='zip-container'><span className='zip-span'>Zip</span>
                    <input className='zip-input'></input>   
                </div>
                                 
            <div className='button-container'>
                <Link to='wizard1'><button className='next'>Previous Step</button></Link>
                <Link to='wizard3'><button className='next'>Next Step</button></Link>
            </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Wizard2;
