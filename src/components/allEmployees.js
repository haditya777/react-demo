import axios from 'axios';
import React, { Component } from 'react';
import SingleEmployee from './singleEmployee';

export default class AllEmployees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmployees: []      
    }
  }

  componentDidMount = async () => {
    await axios.get('http://localhost:4000/api/emp/getall')
        .then(response => {
            console.log(response);
            const res = response.data[0];
            console.log(res);
            this.setState({
                allEmployees: res
            })
        })
}

  handleDelete = (emp_id) => {
    axios.post('http://localhost:4000/api/emp/removeemployee', {id:emp_id})
      .then(response => {
        let res = response.data;        
        console.log(res);
        alert(res.message);
      })
  }

  handleSearch =  async (e) => {    
    console.log(e.target.value);

   await axios.post('http://localhost:4000/api/emp/searchemployee', {item:e.target.value})
      .then(response => {
        const res = response.data[0];
        this.setState({
          allEmployees:res
        })        
      })
  }

  render() {
    return (
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" onChange={this.handleSearch} id="search" placeholder="What are you looking for?" />

              <i class="fa fa-search"></i>

            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <table class="table table-image styled-table">
                <thead>
                  <tr>
                    <th>Empl-Id</th>
                    <th scope="col">name</th>
                    <th scope="col">Email</th>
                    <th scope="col">post</th>
                    <th scope="col">address</th>
                    <th scope="col">dob</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <SingleEmployee allEmployees={this.state.allEmployees} search={(search_keyword=>this.handleSearch(search_keyword))} delete={(emp_id) => this.handleDelete(emp_id)} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
