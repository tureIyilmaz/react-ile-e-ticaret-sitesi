import React from 'react'
import { TextField, Box, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import '../assets/css/settingCss/SettingsInfoProfile.css';

function SettingsInfoProfile() {
    return (
        <Box sx={{display:'flex' }}>

            <div>
                <div className="settings-profile">
                    <h1>Profil Bilgileri</h1>
                    <p>Sitemizdeki deneyiminizi en iyi seviyede tutabilmemiz için gereken bilgilerinizi buradan düzenleyebilirsiniz.</p>
                </div>
                <Box
                    component="form"
                    sx={{
                        marginBottom: '2rem',
                        width: '70%',
                        display: 'flex',
                        justifyContent: 'start',
                        '& > :not(style)': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Ad" variant="outlined" />
                    <TextField id="outlined-basic" label="Soyad" variant="outlined" />
                </Box>

                <div className="gender-box">
                    <FormControl>
                        <FormLabel sx={{ marginBottom: '0.6rem' }} id="demo-row-radio-buttons-group-label">Cinsiyet</FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Kadın" />
                            <FormControlLabel value="male" control={<Radio />} label="Erkek" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="settings-profile-firstButton">
                    <a href=""><input type="button" value="Güncelle" /></a>
                </div>

            </div>
            <div className="iletisim-box">
                <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', p: 5, width: '70%', backgroundColor: 'whitesmoke', }}>

                    <h4>İletişim Bilgileri</h4>
                    <p>Bu bilgileri değiştirmek için sizden doğrulama isteyeceğiz.</p>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="E-Posta" variant="outlined" placeholder='eposta@gmail.com' />
                    <hr />
                    <TextField sx={{ width: '100%', marginTop: '1rem' }} id="outlined-basic" label="Cep Telefonu" variant="outlined" placeholder='+90 552 500 00 00' />

                    <div className="settings-profile-secondButton">
                        <a href=""><input type="button" value="Güncelle" /></a>
                    </div>
                </Box>
            </div>

        </Box>

    )
}

export default SettingsInfoProfile