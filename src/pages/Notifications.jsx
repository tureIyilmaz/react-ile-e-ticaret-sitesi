import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function NotificationSettings() {
  const [state, setState] = useState({
    sms: false,
    email: false,
    phone: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', p: 5 }}>
      <div style={{ marginBottom: '3rem' }}>
        <Typography variant='h4'>İletişim tercihlerim</Typography>
        <Typography variant='p'>Bilgilendirme Metni kapsamında önemli kampanyalardan haberdar olmak için tercih ettiğiniz yöntemleri belirtebilirsiniz.</Typography>
      </div>
      <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', p: 5, width: '50%' }}>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.sms}
                  onChange={handleChange}
                  name="sms"
                  color='warning'
                />
              }
              label={<Typography sx={{ fontWeight: 'bold' }}>Anlık/Kısa Mesaj Kanalları</Typography>}
              sx={{ flexGrow: 1 }}
            />



            <FormControlLabel
              control={
                <Switch
                  checked={state.email}
                  onChange={handleChange}
                  name="email"
                  color='warning'
                />
              }
              label={<Typography sx={{ fontWeight: 'bold' }}>E-Posta</Typography>}
              sx={{ flexGrow: 1 }}
            />



            <FormControlLabel
              control={
                <Switch
                  checked={state.phone}
                  onChange={handleChange}
                  name="phone"
                  color='warning'
                />
              }
              label={<Typography sx={{ fontWeight: 'bold' }}>Telefon araması</Typography>}
              sx={{ flexGrow: 1 }}
            />


          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default NotificationSettings;
