import React, { Component } from 'react';
import './Wizard1.css';
import Nav from '../../nav/Nav.js';
import active from '../../../assets/step_active.png';
import inActive from '../../../assets/step_inactive.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { wizard1_input } from './../../../ducks/reducer';
import axios from 'axios';

class Wizard1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            desc: '',
            // userId: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount() {
        console.log(this.props.property)
    }

    handleInput(val, prop) {
        this.setState({
            [prop]: val
        })
        console.log(this.state)
    }

    handleNext() {
        console.log('handle next')
        this.props.wizard1_input(this.state)
        this.props.history.push('/wizard2')
    }

    render() {
        console.log(this.state)
        console.log(this.props.match)
        return (
            <div className="wizard1">
                <Nav />
                <div className='content'>
                    <div className='listing-header'>
                        <span className='header-span'>Add new listing</span>
                        <Link to='/dashboard'><button className='cancel'>Cancel</button></Link>
                    </div>
                    <div className='step-container'>
                        <span className='step'>Step 1</span>
                        <div className='step-img-container'>
                            <img src={active} alt="#" />
                            <img src={inActive} alt="#" />
                            <img src={inActive} alt="#" />
                            <img src={inActive} alt="#" />
                            <img src={inActive} alt="#" />
                        </div>
                    </div>
                    <div class='step-info-container'>
                        <div className='name-container'><span className='prop-name'>Property Name</span></div>
                        <input className='input-name' value={this.state.name} onChange={(e) => this.handleInput(e.target.value, 'name')}></input>
                        <div className='desc-container'><span className='prop-desc'>Property Description</span></div>
                        <textarea className='input-desc' onChange={(e) => this.handleInput(e.target.value, 'desc')}></textarea>
                    </div>

                    <div className='next-btn'>
                        <button className='next' onClick={() => this.handleNext()}>Next Step</button>
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

export default connect(mapStatetoProps, {wizard1_input})(Wizard1);
