import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const NotificationGroup = ({ checked, onChange, name, label }) => {
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    onChange={onChange}
                    name={name}
                    color="warning"
                />
            }
            label={<Typography sx={{ fontWeight: 'bold' }}>{label}</Typography>}
            sx={{ flexGrow: 1, alignItems: 'start', margin: '8px 0' }}
        />
    );
};

export default NotificationGroup;
