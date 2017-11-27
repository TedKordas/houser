import React, { Component } from 'react';
import './dashboard.css';
import Nav from '../nav/Nav.js';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {  } from './../../ducks/reducer';

class Dashboard extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount(){
    console.log('dashboard did mount',this.props)
    if(!this.props.user.length){
      this.props.history.push('/')
      alert('please log in')
    } 
  }

  render() {

    console.log('user from redux', this.props.user[0])
    return (
      <div className="dashboard">
        <Nav />
        <div className='content'>
          <div className='dashboard-top'>
            <Link to='wizard1'><button className='addprop'>Add new property</button></Link>
            <div className='filter-content'>
              <span className='property-span'>List properties with "desired rent" freator than: $</span>
              <input className='money-input'></input>
              <button className='filter'>Filter</button>
              <button className='reset'>Reset</button>
            </div>
          </div>

          <div className='home-listings'>
            <span className='listings-span'>Home Listings</span>
            <div className='homes'>
              <div className='homes-img'></div>
              <div className='homes-message'></div>
              <div className='homes-info'></div>
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

export default connect(mapStatetoProps, {  })(Dashboard);
