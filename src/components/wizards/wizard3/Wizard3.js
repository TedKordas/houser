import React, { Component } from 'react';
import './Wizard3.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import complete from '../../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { wizard3_input } from './../../../ducks/reducer';

class Wizard3 extends Component {
    constructor(props){
        super(props)

        this.state = {
            img: ''
        }

        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount(){
        console.log(this.props)
    }

    handleImgChange(val){
        this.setState({
            img: val
        })
        console.log(this.state)
    }

    handleNext() {
        console.log('handle next wiz3')
        this.props.wizard3_input(this.state)
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
                    <img src={complete} alt="#"/>
                    <img src={complete} alt="#"/>
                    <img src={active} alt="#"/>
                    <img src={inActive} alt="#"/>
                    <img src={inActive} alt="#"/>
                </div>

            </div>
            <div class='step-info-container'>
                
                <div className='img-container'>
                        <img style={{maxWidth: '100%', maxHeight: '300px'}} src={this.state.img} alt='Preview'/>
                </div>

                <div style={{width: '70%'}}><span className='img-span'>Image URL</span></div>
                <input className='img-input' onChange={(e) => this.handleImgChange(e.target.value)}></input>
                                 
                <div className='button-container'>
                    <Link to='/wizard2'><button className='next'>Previous Step</button></Link>
                    <Link to='/wizard4'><button className='next' onClick={() => this.handleNext()}>Next Step</button></Link>
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

export default connect(mapStatetoProps, {wizard3_input})(Wizard3);
