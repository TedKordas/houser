import React, { Component } from 'react';
import './Wizard4.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { wizard4_input } from './../../../ducks/reducer';

class Wizard4 extends Component {
    constructor(props){
        super(props)

        this.state = {
            amount: '',
            mortgage: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount(){
        console.log(this.props.property)
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
        console.log(this.state)
    }


    handleNext(){
        this.props.wizard4_input(this.state)
    }

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
                    <img src={complete} alt="#"/>
                    <img src={complete} alt="#"/>
                    <img src={complete} alt="#"/>
                    <img src={active} alt="#"/>
                    <img src={inActive} alt="#"/>
                </div>
            </div>
            <div class='step-info-container'>
                <div style={{width: '70%'}}><span className='loan-span'>Loan Amount</span></div>
                <input className='loan-input' onChange={(e) => this.handleChange('amount', e.target.value)}></input>
                <div style={{width: '70%', margin:'20px 0 0 0'}}><span className='loan-span'>Monthly Mortgage</span></div>
                <input className='loan-input' onChange={(e) => this.handleChange('mortgage', e.target.value)}></input>                
                                 
                <div className='button-container'>
                    <Link to='/wizard3'><button className='next'>Previous Step</button></Link>
                    <Link to='/wizard5'><button className='next' onClick={() => this.handleNext()}>Next Step</button></Link>
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

export default connect(mapStatetoProps, {wizard4_input})(Wizard4);
