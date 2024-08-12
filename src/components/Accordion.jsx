import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../assets/css/Accordions.css';

function AccordionItem({ title, text }) {

    return (
        <Accordion className='accordion'>
            <AccordionSummary className='accordion-summary'
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionItem


