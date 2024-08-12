import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <hr></hr>
                <Row>
                    <Col md={4}>
                        <h3>Menü</h3>
                        <ul className="footer-links">
                            <li><Link to='/'>Anasayfa</Link></li>
                            <li><Link to='/menu'>Menü</Link></li>
                            <li><Link to='/corporate'>Kurumsal</Link></li>
                            <li><Link to='/contact'>İletişim</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h3>Destek</h3>
                        <ul className="footer-links">
                            <li><a href="#">Destek Merkezi</a></li>
                            <li><Link to='/contact/questions'>FAQ</Link></li>
                            <li><a href="#">Teslimat Süreci</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h3>İletişim</h3>
                        <ul className="footer-links">
                            <li><a href="tel:+902120000000">+90 212 000 00 00</a></li>
                            <li><a href="tel:+905000000000">+90 500 000 00 00</a></li>
                            <li><a href="mailto:companyname@gmail.com">companyname@gmail.com</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Col md={6}>
                        <Form className="newsletter-form">
                            <h3>Bültenimize abone olun</h3>
                            <p>Yeniliklerden ve indirimlerden haberdar olmak için üye olun.</p>
                            <Form.Group>
                                <Form.Control id="newsletter1" type="email" placeholder="E-posta adresi" />
                                <Button className="btn subscribe-btn" type="button">Abone Ol</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <hr />
                <Row className='icons' style={{ padding: '10px' }}>
                    <Col className="social-icons">
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaYoutube /></a>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaTwitter /></a>
                    </Col>
                    <Col style={{ textAlign: 'end' }}>
                        Copyright © 2024 All rights reserved
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
