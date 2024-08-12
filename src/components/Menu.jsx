import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuItem from './MenuItem';
import menus from '../assets/data/MenuData';

import '../assets/css/Menu.css';

function Menu() {

    return (
        <Container className="menu">
            <div className="menu-baslik">
                <h1>KATEGORİ</h1>
                <hr />
            </div>
            <Row className='menu-row'>
                {menus.map(menu => (
                    <MenuItem
                        key={menu.id}
                        image={menu.image}
                        name={menu.name}
                        link={menu.link}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default Menu;
