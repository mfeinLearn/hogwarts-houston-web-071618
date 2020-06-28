import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Filter from './Filter'
import hogsData from '../porkers_data';

class App extends Component {

    constructor() {
        super() // it inherits stuff from Component from its parent
        this.state = {
            hogs: hogsData,
            sort: 'all'
        }
        this.selectHandler = this.selectHandler.bind(this)// i bind the context of selectHandler to app
    }

    selectHandler(evt) {
        let newHogs = [...this.state.hogs]//creating a new array from this array(this.state.hogs)
        console.log(evt.target.value)
        const sortBy = evt.target.value
        if (sortBy === 'weight') {

            newHogs.sort(sortByWeight)
        } else if (sortBy === 'name') {
            //sort sorts in place so we dont have to reasign new hogs
            newHogs.sort((curr, next) => curr.name < next.name ? -1 : 1)
        } else {
            newHogs = hogsData
        }
        this.setState({hogs: newHogs})
    }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter selectHandler = {this.selectHandler}/>
          <HogList hogs={this.state.hogs} />
      </div>
    )
  }
}

function sortByWeight(currHog, nextHog) {
    const currWeightRatio = currHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const nextWeightRatio = nextHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

    return currWeightRatio - nextWeightRatio
}//sort sorts in place

export default App;

// I am just going to put the hogs on state because most of the time that is how you are going to
//.. hold information like this is on state wheather it is through an asynchronous action or something else
//.. you will probably will hold data like this on state


///////////
// spread operator:
//const newHogs = [...this.state.hogs, obj, num] - all of your hogs, obj then num
// this spreads out hogs each
// of its elements and you
// are putting it in a new array
// and you are populating this array
// with your hogs. you can add more things
// to the end

//////////////
// Anything that comes after a return statment does not exist in the eyes of javascript

//event handler no need return


//////////////
// .map .filter does not happen in place that returns a new function
