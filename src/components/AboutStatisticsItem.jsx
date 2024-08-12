import React from 'react'

function AboutStatisticsItem(props) {
    return (

        <div class="col">
            <h1> {props.number}</h1>
            <p>{props.text}</p>
        </div>

    )
}

export default AboutStatisticsItem