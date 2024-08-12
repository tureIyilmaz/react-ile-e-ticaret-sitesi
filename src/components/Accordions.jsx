import React from 'react';
import AccordionData from '../assets/data/FAQ';
import AccordionItem from './Accordion';
import { Container } from '@mui/material';

function Accordions() {
    return (
        <Container>
            {AccordionData.map((item) => (
                <AccordionItem key={item.id} title={item.title} text={item.text} />
            ))}
        </Container>
    );
}

export default Accordions;
