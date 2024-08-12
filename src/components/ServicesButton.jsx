import React from 'react';
import { Box, Typography } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

function ServicesButton({ icon: Icon, text: text }) {
    const handleClick = () => {
    };

    return (
        <ButtonBase onClick={handleClick} sx={{ width: '100%' }}>
            <Box
                sx={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '0.5rem',
                    p: 3,
                    backgroundColor: '#fb4a36',
                    color: 'white',
                    margin: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '200px',
                }}
            >
                {Icon && <Icon sx={{ fontSize: 40 }} />}
                <Typography variant='body1' marginBottom='1rem'>{text}</Typography>
            </Box>
        </ButtonBase>
    );
}

export default ServicesButton;
