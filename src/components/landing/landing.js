import React, { Component } from 'react';
import './landing.css'
import HomeLogo from '../../assets/auth_logo.png'
import { connect } from 'react-redux';
import { createUser, login } from './../../ducks/reducer';
import axios from 'axios';



class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }


  handleLoginChange(val, prop) {
    this.setState({
      [prop]: val
    })
    console.log(this.state)
  }

  registerUser() {
    this.props.createUser(this.state.username, this.state.password).then( res => {
      this.props.history.push('/dashboard')
    })
  }

  loginUser() {
    this.props.login(this.state.username).then(res => {
      if(this.props.user[0].username === this.state.username && this.props.user[0].password === this.state.password) {
        this.props.history.push('/dashboard')
      }
      else{
        alert('invalid login')
      }
    })
  }


  render() {
    return (
      <div className="landing">
        <div className='landing-content'>
          <img className='home-logo' src={HomeLogo} />

          <div className='inputs'>
            <span className='inputs-span'>Username</span>
            <input className='login-input' onChange={(e) => this.handleLoginChange(e.target.value, 'username')}></input>
          </div>

          <div className='inputs'>
            <span className='inputs-span'>Password</span>
            <input className='login-input' onChange={(e) => this.handleLoginChange(e.target.value, 'password')}></input>
          </div>


          <div>
            <button className='login' onClick={() => this.loginUser()}>Login</button>
            <button className='register' onClick={() => this.registerUser()}> Register</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStatetoProps, { createUser, login })(Landing);