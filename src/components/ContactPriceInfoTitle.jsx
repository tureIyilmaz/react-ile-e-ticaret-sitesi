import React from 'react'
import '../assets/css/ContactPriceInfo.css'
import { Container } from 'react-bootstrap'

function ContactPriceInfoTitle(props) {

    const { title, textTitle1, textTitle2, textTitle3, text1, text2, text3  } = props;


    return (
        <Container>

            <section class="price-info">
                <div class="section-header">
                    <h2>{title}</h2>
                </div>
                <ul class="section-content">
                    <li><strong>{textTitle1}:</strong> {text1}</li>
                    <li><strong>{textTitle2}:</strong> {text2}</li>
                    <li><strong>{textTitle3}:</strong> {text3}</li>
                </ul>
            </section>

        </Container>
    )
}

export default ContactPriceInfoTitle