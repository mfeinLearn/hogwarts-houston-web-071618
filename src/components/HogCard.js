import React from 'react'

function HogCard({ hog }) {
    const {name, specialty, greased} = hog
    const medal = hog['highest medal achieved']
    const weightRatio = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    return (
        <div>
            <img alt={hog.name}
            src={`./hog-imgs/${snakeCase(name)}.jpg`}/>
            <h2>{hog.name}</h2>
            <div className="card-data">
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased ? 'Yes' : 'No'}</p>
                <p>Medal: {medal}</p>
                <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
            </div>
        </div>
    )
}

function snakeCase(str) {
    return str.toLowerCase().split(' ').join('_')
}

export default HogCard
