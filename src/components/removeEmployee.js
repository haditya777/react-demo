import React, { Component } from 'react'

export default class RemoveEmployee extends Component {
  render() {
    return (
      <div className="content">
      <form id="login-form" className="login-form" autocomplete="off" role="main">
        <div className="container rounded bg-white mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                    <h6>Back to home</h6>
                  </div>
                  <h6 className="text-right">Edit Profile</h6>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6"><input type="text" name="emp_id" value={this.props.id} /></div>
                  <div className="col-md-6"><input type="text" name="name" value={this.props.id} /></div>
                  <div className="col-md-6"><input type="text" name="email" value={this.props.id} /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6"><input type="text" name="password" value={this.props.id} /></div>
                  <div className="col-md-6"><input type="text" name="post" value={this.props.id} /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6"><input type="text" name="address" value={this.props.id} /></div>
                  <div className="col-md-6"><input type="text" name="dob" value={this.props.id} /></div>
                </div>
                <input type="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    )
  }
}
