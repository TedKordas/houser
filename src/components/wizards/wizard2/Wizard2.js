import React, { Component } from 'react';
import './Wizard2.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { wizard2_input } from './../../../ducks/reducer';
import axios from 'axios';

class Wizard2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            address: '',
            city: '',
            state: '',
            zip: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
        console.log(this.state)
    }

    handleNext() {
        console.log('handle next')
        this.props.wizard2_input(this.state)
        // this.props.history.push('/wizard3')
    }

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
                    <img src={complete} alt="#"/>
                    <img src={active} alt="#"/>
                    <img src={inActive} alt="#"/>
                    <img src={inActive} alt="#"/>
                    <img src={inActive} alt="#"/>
                </div>
            </div>
            <div class='step-info-container'>
                <div style={{width: '70%'}}><span className='address-span'>Address</span></div>
                <input className='address-input' onChange={(e) => this.handleChange('address', e.target.value)}></input>
                <div className='city-state-container'>
                    <div className='city-container'>
                        <span className='city-span'>City</span>
                        <input className='city-input' onChange={(e) => this.handleChange('city', e.target.value)}></input>
                    </div>
                    <div className='state-container'>
                        <span className='state-span'>State</span>
                        <input className='state-input' onChange={(e) => this.handleChange('state', e.target.value)}></input>
                    </div>    
                </div>
                <div className='zip-container'><span className='zip-span'>Zip</span>
                    <input className='zip-input' onChange={(e) => this.handleChange('zip', e.target.value)}></input>   
                </div>
                                 
            <div className='button-container'>
                <Link to='wizard1'><button className='next'>Previous Step</button></Link>
                <Link to='wizard3'><button className='next' onClick={() => this.handleNext()}>Next Step</button></Link>
            </div>
            </div>

        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
    return {
        user: state.user,
        property: state
    }
}

export default connect(mapStatetoProps, {wizard2_input})(Wizard2);
