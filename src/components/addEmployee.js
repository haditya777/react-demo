import axios from 'axios'
import React, { Component } from 'react'

export default class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      post: '',
      address: '',
      dob: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAdd = async () => {
    const { email, password, name, post, address, dob } = this.state;
    const json_obj = {
      name: name,
      email: email,
      password: password,
      post: post,
      address: address,
      dob: dob
    }
    let emptyInput = false;

    for (let key in json_obj) {
      if (json_obj[key].length === 0) {
        emptyInput = true;
      }
    }

    if (!emptyInput) {
      await axios.post('http://localhost:4000/api/emp/newemployee', json_obj)
        .then(response => {
          if (response.data === 'Not Found') {
            console.log('error');
          }
          else {
            console.log(response);
            window.location.reload(false);
          }
        })
    }
  }

  render() {
    return (
      <div className="content">
        <form id="add-form" className="add-form" autocomplete="off" role="main">
          <div className="container rounded bg-white mt-5">
            <div className="row">
              <div className="col-md-8">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                      <h3>Add Profile</h3>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6"><input type="text" onChange={this.handleChange} name="name" placeholder="name" tabindex="2" required /></div>
                    <div className="col-md-6"><input type="text" onChange={this.handleChange} name="email" placeholder="email" tabindex="2" required /></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6"><input type="text" onChange={this.handleChange} name="password" placeholder="Password" tabindex="2" required /></div>
                    <div className="col-md-6"><select name="post" onChange={this.handleChange} defaultValue='Intern' id="post">
                      <option value="Manager">Manager</option>
                      <option value="Director">Director</option>
                      <option value="HR">HR</option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Sr Software Engineer">Sr Software Engineer</option>
                      <option value="Intern">Intern</option>
                      <option value="Tester">Tester</option>
                    </select></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6"><input type="text" onChange={this.handleChange} name="address" placeholder="address" tabindex="2" required /></div>
                    <div className="col-md-6"><input type="text" onChange={this.handleChange} name="dob" placeholder="dob" tabindex="2" required /></div>
                  </div>
                  <input type="submit" onClick={this.handleAdd} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
