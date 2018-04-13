import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    // this.handleCountClick = this.handleCountClick.bind(this);
  }

 handleCountClick = (event) => {
    // console.log(event.target.id);
    if(event.target.id === "add"){
      this.setState({
        count: this.state.count + 1
      })
    } else if (event.target.id === "subtract" && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        count: 0
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Counter: {this.state.count}</h1>
        <button id="add" onClick = {this.handleCountClick}>+</button>
        <button id="subtract" onClick = {this.handleCountClick} >-</button>
        <button id="reset" onClick = {this.handleCountClick}>Reset</button>
      </div>
    );
  }
}

export default App;
