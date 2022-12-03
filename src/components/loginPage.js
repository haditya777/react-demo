import React, { Component } from 'react';
// import axios from 'axios';
// import '../css/loginPage.css';


export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        axios.post('http://localhost:4000/api/emp/loginemployee', { id: this.state.id, password: this.state.password })
            .then(response => {
                if (response.data === 'Not Found') {
                    console.log('error')
                }
                else {
                    console.log(response);
                    let res = response.data[0];
                    let res_obj = res['0'];
                    localStorage.setItem('data', res_obj);
                }
            })
    }
    render() {
        return (
            <div className="login">
                <form id="login-form" className="login-form" autocomplete="off" role="main">
                    <h1 className="a11y-hidden">Login Form</h1>
                    <div>
                        <label className="label-email">
                            <input type="digit" className="text" onChange={this.handleChange} name="id" placeholder="Employeeid" tabindex="1" required />
                            <span className="required">Employee id</span>
                        </label>
                    </div>
                    <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabindex="3" />
                    <label className="label-show-password" for="show-password">
                        <span>Show Password</span>
                    </label>
                    <div>
                        <label className="label-password">
                            <input type="text" className="text" name="password" onChange={this.handleChange} placeholder="Password" tabindex="2" required />
                            <span className="required">Password</span>
                        </label>
                    </div>
                    <input type="submit" onClick={this.handleSubmit} value="Log In" />

                    <figure aria-hidden="true">
                        <div className="person-body"></div>
                        <div className="neck skin"></div>
                        <div className="head skin">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                        <div className="hair"></div>
                        <div className="ears"></div>
                        <div className="shirt-1"></div>
                        <div className="shirt-2"></div>
                    </figure>
                </form>
            </div>
        )
    }
}