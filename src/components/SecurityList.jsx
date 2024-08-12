import React from 'react'
import { Container, Typography, TextField, Button, InputAdornment, IconButton, Box, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';


function SecurityList() {
  return (
    <Container>
      <div className="iletisim-box">
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', p: 5, width: '70%', backgroundColor: 'whitesmoke', }}>

          <h4>Şifre Değişikliği</h4>
          <p style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>Şifreniz en az bir harf veya rakam içermeli. Ayrıca şifreniz en az 8 karakterden oluşmalı </p>
          <TextField sx={{ width: '100%', marginBottom: '2rem' }} id="outlined-basic" label="Mevcut Şifre" variant="outlined" />
          <hr />
          <TextField sx={{ width: '100%', marginTop: '2rem' }} id="outlined-basic" label="Yeni Şifre" variant="outlined" />

          <div className="settings-profile-secondButton">
            <a href=""><input type="button" value="Güncelle" /></a>
          </div>
        </Box>
      </div>

    </Container>
  )
}

export default SecurityList