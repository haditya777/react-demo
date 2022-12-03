import React, { Component } from 'react';
import Home from './components/home';
import LoginPage from './components/loginPage';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedin: false }
  }

  componentDidMount() {
    const checkLog = localStorage.getItem('data') ? true : false;
    this.setState({ isLoggedin: checkLog },()=>{
      console.log(this.state.isLoggedin,'<<check')
    })
  }
  render() {
    const {isLoggedin} = this.state;
    console.log(isLoggedin,'isLoggedin')
    return <>{(isLoggedin)?<Home />:<LoginPage path='/login'/>}</>   
   
  }
}