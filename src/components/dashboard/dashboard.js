import React, { Component } from 'react';
import './dashboard.css';
import Nav from '../nav/Nav.js';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getProperties } from './../../ducks/reducer';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    console.log('dashboard did mount', this.props)
    if (!this.props.user.length) {
      this.props.history.push('/')
      alert('please log in')
    }
    else {
      this.props.getProperties(this.props.user[0].id).then(res => {
        console.log('getprops res', res)
        this.setState({
          properties: res.value
        })
        console.log('state after getting props', this.state)
      })
    }
  }

  componentWillReceiveProps(newProps) {
    console.log('newprops', newProps)
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
            {this.state.properties.map((val, id, arr) => {
              console.log(val)
              return <div className='homes' key={id}>
              <div className='homes-img'><img
                style={{maxWidth: '150px', maxHeight: '150px'}}
                src={val.img} alt='' />
              </div>
              <div className='homes-message'>
                <span className='messag-prop-name'>{val.prop_name}</span>
                <span className='message'>{val.prop_desc}j</span>
              </div>
              <div className='homes-info'>
                <span className='info-span'>Loan: ${val.loan_amount}</span>
                <span className='info-span'>Monthly Mortgage: ${val.monthly_mortgage}</span>
                <span className='info-span'>Recommended Rent: $123</span>
                <span className='info-span'>Desired Rent: ${val.desired_rent}</span>
                <span className='info-span'>Address: {val.address}</span>
                <span className='info-span'>City: {val.city}</span>
                <span className='info-span'>State: {val.state}</span>
                <span className='info-span'>Zip: {val.zip}</span>
              </div>
            </div>
            })}
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

export default connect(mapStatetoProps, { getProperties })(Dashboard);
