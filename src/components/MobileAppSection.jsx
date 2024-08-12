import { Container, Box, Typography, Button, Grid } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import React from 'react'
import image from '../assets/img/pizza carousel.webp';
function MobileAppSection() {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <img src={image} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h4">
                            Mobil uygulamamızı ücretsiz indirebilirsiniz
                        </Typography>
                        <Box sx={{ my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    sx={{
                                        backgroundColor: '#fb4a36',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: 24,
                                        height: 24,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 1
                                    }}
                                >
                                    1
                                </Typography>
                                <Typography variant="h6">Uygulamamızı ücretsiz indirebilirsiniz</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    sx={{
                                        backgroundColor: '#fb4a36',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: 24,
                                        height: 24,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 1
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography variant="h6">Minimum sepet tutarı olmadan sipariş verebilirsiniz.</Typography>
                            </Box>
                        </Box>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <Button
                                    variant="contained"
                                    startIcon={<AppleIcon />}
                                    sx={{ backgroundColor: '#131313', color: 'white' }}
                                >
                                    Download on the Apple Store
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button
                                    variant="contained"
                                    startIcon={<AndroidIcon />}
                                    sx={{ backgroundColor: '#131313', color: 'white' }}
                                >
                                    Download on the Google Play
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MobileAppSection