import React from 'react'
import HogCard from './HogCard'

function HogList (props) {
    // const hogs = props.hogs
    const { hogs } = props
    const cards = hogs.map(hog => <HogCard key={hog.name} hog={hog}/>)
    console.log(hogs)
    return (<div>{cards}</div>)
}

export default HogList

// functional or presentational components do not have render
//.. this is a function not a class we are not writing seperate methods in it

// The second you need a render and state or need to render or need to do something asyncrouniously
//.. this needs to be a class but if you are not doing those things having it as a function is
//..  best practice


/////////////

// keys in arrays: Aince hogs is an array any time you are passing in an array to jsx instead of a single
//.. element you need to give it a key - the key allows it to uniquly identify each card. If you do an
//.. update it knows which one to update and which one to not based on changes


// importing React from 'react' is the only way that react knows that this '<' is not a less then
//.. but a component and know what this is '<div>{cards}</div>' <- jsx
