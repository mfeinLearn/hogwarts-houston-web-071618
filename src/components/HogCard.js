import React, { Component } from 'react'

class HogCard extends Component {

    constructor(){
        super()
        this.state = {
            clicked:false
        }
        this.clickHandler = this.clickHandler.bind(this)// I put that in my constructor so as soon as the HogCard is made it reassigns what clickHandler is to the bind so it can work
    }
clickHandler() {
    console.log('clicked')
    const clicked = !this.state.clicked
    this.setState({ clicked: clicked })
}
render() {
    const {name, specialty, greased} = this.props.hog
    const medal = this.props.hog['highest medal achieved']
    const weightRatio = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    return (
        <div onClick={this.clickHandler}>
            <img alt={name}
            src={`./hog-imgs/${snakeCase(name)}.jpg`}/>
            <h2>{name}</h2>
            {this.state.clicked ? <div className="card-data">
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased ? 'Yes' : 'No'}</p>
                <p>Medal: {medal}</p>
                <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
            </div> : "click for more info!"}
        </div>
    )
    }
}
// any thing I put in javascript needs to be a expression that can evaluate need to use this -> {}
function snakeCase(str) {
    return str.toLowerCase().split(' ').join('_')
}

export default HogCard


///////////////////////////////////////////////////////////
// do this
// {this.state.clicked ? <div className="card-data">
//     <p>Specialty: {specialty}</p>
//     <p>Greased: {greased ? 'Yes' : 'No'}</p>
//     <p>Medal: {medal}</p>
//     <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
// </div> : null}

// or this

// true && then render
// false && not render

// {this.state.clicked && <div className="card-data">
//     <p>Specialty: {specialty}</p>
//     <p>Greased: {greased ? 'Yes' : 'No'}</p>
//     <p>Medal: {medal}</p>
//     <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
// </div>}

///////////////////////////////
//When jsx is taking more then one line use ()
// example:
// const hogData = (<div className="card-data">
//     <p>Specialty: {specialty}</p>
//     <p>Greased: {greased ? 'Yes' : 'No'}</p>
//     <p>Medal: {medal}</p>
//     <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
// </div>)
