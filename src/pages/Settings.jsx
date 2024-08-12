import React from 'react';
import { Tabs, Tab, Box, Typography, Divider } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Settings() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentTab = location.pathname.split('/').pop();

    const handleChange = (event, newValue) => {
        navigate(newValue);
    };

    return (
        <Box sx={{ display: 'flex', height: '83vh' }}>
            <Box
                sx={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 2,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Ayarlar
                    <Divider sx={{ width: '55%', margin: 'auto', mb: 2 }} />
                </Typography>
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    orientation="vertical"
                    aria-label="Settings Tabs"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Profil Bilgileri" value="info" />
                    <Tab label="Güvenlik" value="security" />
                    <Tab label="Bildirimler" value="notifications" />
                    <Tab label="Müşteri Hizmetleri" value="customer-service" />
                </Tabs>
            </Box>

            <Box sx={{ width: '75%', padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default Settings;
