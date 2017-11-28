import React, { Component } from 'react';
import './Wizard5.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { wizard5_input, postProperty } from './../../../ducks/reducer';

class Wizard5 extends Component {
    constructor(props){
        super(props)

        this.state = {
                desiredRent: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleComplete = this.handleComplete.bind(this);
    }

    componentDidMount(){
        console.log(this.props.property)
    }

    handleChange(val){
        this.setState({
            desiredRent: val
        })
        console.log(this.state)
    }

    handleComplete(){
        this.props.wizard5_input(this.state)
        this.props.postProperty()
    }

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
                    <img src={complete} alt="#"/>
                    <img src={complete} alt="#"/>
                    <img src={complete} alt="#"/>
                    <img src={complete} alt="#"/>
                    <img src={active} alt="#"/>
                </div>
            </div>
            <div class='step-info-container'>

                <span className='rent'>Recomended Rent</span>

                <div style={{width: '70%', margin:'20px 0 0 0'}}><span className='loan-span'>Desired Rent</span></div>
                <input className='loan-input' onChange={(e) => this.handleChange(e.target.value)}></input>   
               
                <div className='button-container'>
                    <Link to='/wizard4'><button className='next'>Previous Step</button></Link>
                    <Link to='/dashboard' onClick={() => this.handleComplete()}><button className='complete'>complete</button></Link>
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

export default connect(mapStatetoProps, {wizard5_input, postProperty})(Wizard5);
