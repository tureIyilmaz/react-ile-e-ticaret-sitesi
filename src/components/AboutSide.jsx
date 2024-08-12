import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import '../assets/css/about/AboutSide.css';


function AboutSide(props) {
    return (
        <Container>

            <div class="about-side">
                <div class="row">

                    <div class="col about-side-img">
                        <img src={props.image} alt="" />
                    </div>

                    <div class="col about-side-text" style={{ marginTop: "5rem" }}>
                        <i><FaFileAlt /></i>
                        <h1 style={{ marginTop: "2rem" }}>{props.title}</h1>
                        <p > {props.text}</p>
                    </div>

                </div>
            </div>

        </Container>
    )
}

export default AboutSide