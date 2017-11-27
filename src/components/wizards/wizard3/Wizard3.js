import React, { Component } from 'react';
import './Wizard3.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';

class Wizard3 extends Component {
    constructor(props){
        super(props)

        this.state = {
            img: ''
        }

        this.handleImgChange = this.handleImgChange.bind(this)
    }

    handleImgChange(val){
        this.setState({
            img: val
        })
        console.log(this.state)
    }


  render() {
    return (
      <div className="wizard3">
        <Nav />
        <div className='content'>
            <div className='listing-header'>
                <span className='header-span'>Add new listing</span>
                <Link to='dashboard'><button className='cancel'>Cancel</button></Link>
            </div>
            <div className='step-container'>
                <span className='step'>Step 3</span>
                <div className='step-img-container'>
                    <img src={complete}/>
                    <img src={complete}/>
                    <img src={active}/>
                    <img src={inActive}/>
                    <img src={inActive}/>
                </div>

            </div>
            <div class='step-info-container'>
                
                <div className='img-container'>
                        <img src={this.state.img} alt='Preview'/>
                </div>

                <div style={{width: '70%'}}><span className='img-span'>Image URL</span></div>
                <input className='img-input' onChange={(e) => this.handleImgChange(e.target.value)}></input>
                                 
                <div className='button-container'>
                    <Link to='wizard2'><button className='next'>Previous Step</button></Link>
                    <Link to='wizard4'><button className='next'>Next Step</button></Link>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Wizard3;
