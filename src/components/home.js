import React, { Component } from 'react';
import Sidebar from './sidebar';
import '../css/sidebar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import AddEmployee from './addEmployee';
import AllEmployees from './allEmployees';
import UpdateEmployee from './updateEmployee';
import RemoveEmployee from './removeEmployee';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedin: false }
    }
    render() {
        return (            
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route exact path="/dashboard" element={Dashboard} />
                    <Route path="/allemployees" element={<AllEmployees />} />
                    <Route path="/addemployee" element={<AddEmployee />} />
                    <Route path="/updateemployee" element={<UpdateEmployee />} />
                    <Route path="/removeemployee" element={<RemoveEmployee />} />                    
                </Routes>
            </BrowserRouter>         
        )
    }
}
