import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/ContactCard.css'
function ContactCard(props) {

    const { icon: Icon, title, text, buttonText, link } = props;

    return (
        <Col sm={3} >
            <Card className="text-center">
                <Card.Body>
                    {Icon && <Icon size={50} />}
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="dark" href="#">
                        <Link to={link} className='contact-link' >{buttonText} </Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ContactCard;
