import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Sidebar extends Component {
  handleLogout=()=>{
    localStorage.removeItem('data')    
      this.props.navigate('/')
   
  }
  render() {
    return (
      <div className="sidebar">
        <Link className="active" to="/dashboard">Dashboard</Link>
        <Link to="/allemployees">All Employees</Link>
        <Link to="/addemployee">Add Employee</Link>
        <Link to="/updateemployee">Update Employee</Link>
        <Link to="/removeemployee">Remove Employee</Link>        
        <button onClick={this.handleLogout}>LogOut</button>
      </div>
    )
  }
}
