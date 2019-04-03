import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import FriendsList from './components/FriendsList'

class App extends Component {
  constructor() {
    super();
    this.state= {
      friend:[]
    };
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friend: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  

  render() {
    return (
      <div className="App">
        <FriendsList friend={this.state.friend} />
      </div>
    );
  }
}


export default App;
