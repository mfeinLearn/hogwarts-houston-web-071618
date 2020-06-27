import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import hogsData from '../porkers_data';

class App extends Component {

    constructor() {
        super() // it inherits stuff from Component from its parent
        this.state = {
            hogs: hogsData
        }
    }

  render() {
    return (
      <div className="App">
          <Nav />
          <HogList hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;

// I am just going to put the hogs on state because most of the time that is how you are going to
//.. hold information like this is on state wheather it is through an asynchronous action or something else
//.. you will probably will hold data like this on state
