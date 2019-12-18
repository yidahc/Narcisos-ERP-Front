import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state= {
      message: ''
    }
  }

  render(){  
  return (
    <div>
        <p>Home</p>
    </div>
  )};
}

export default Home;
