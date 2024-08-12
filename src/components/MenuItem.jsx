import React from 'react'
import { Col } from 'react-bootstrap';


function MenuItem({ image, name, link }) {
    return (
        <Col lg={2} className='col'>
            <a href={link}>
                <img src={image} alt={name} /><br />
                <h1>{name}</h1>
            </a>
        </Col>
    )
}

export default MenuItem