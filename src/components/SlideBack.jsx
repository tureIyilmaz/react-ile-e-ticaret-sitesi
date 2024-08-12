import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap';
import deliveryPhoto from '../assets/img/mainpage-slide-return/main-return-delivery.png';
import illustrationPhoto from '../assets/img/mainpage-slide-return/flat-feedback-concept-illustration.png';
import easyPhoto from '../assets/img/mainpage-slide-return/main-return-app.png';

import '../assets/css/SlideBack.css'

function SlideBack() {
    return (
        <Container className="slide-back">
            <Row className="slide-back-row">
                <Col md={3}>
                    <Image
                        src={easyPhoto}
                        alt="Easy Order"
                        className='slide-image'

                    />
                    <h3 className='title'>KOLAY SİPARİŞ</h3>
                    <p>Uygulama üzerinden kolay Sipariş</p>
                </Col>
                <Col md={3}>
                    <Image
                        src={deliveryPhoto}
                        alt="Fast Delivery"
                        className='slide-image'

                    />
                    <h3 className='title'>HIZLI TESLİMAT</h3>
                    <p>Hızlı ve güvenilir Teslimat</p>
                </Col>
                <Col md={3}>
                    <Image
                        src={illustrationPhoto}
                        alt="Best Quality"
                        className='slide-image'
                    />
                    <h3 className='title'>EN İYİ KALİTE</h3>
                    <p>Sizin için en kaliteli ve ucuz Pizzalar</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SlideBack