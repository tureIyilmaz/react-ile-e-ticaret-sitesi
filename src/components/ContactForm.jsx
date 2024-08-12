import React from 'react';
import { Container, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import '../assets/css/ContactForm.css';

function ContactForm() {
    const [topic, setTopic] = React.useState('');

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    return (
        <Container className="form-container">
            <div className="header">
                <Typography variant="h4" component="h2">Mesajınızı Gönderin</Typography>
                <hr />
            </div>

            <form noValidate autoComplete="off">
                <TextField
                    className="form-field"
                    fullWidth
                    margin="normal"
                    label="Ad-Soyad"
                    variant="outlined"
                    placeholder="Ad Giriniz"
                />

                <TextField
                    className="form-field"
                    fullWidth
                    margin="normal"
                    label="E-Mail"
                    type="email"
                    variant="outlined"
                    placeholder="Email Giriniz"
                />

                <TextField
                    className="form-field"
                    fullWidth
                    margin="normal"
                    label="Telefon"
                    type="tel"
                    variant="outlined"
                    placeholder="Telefon Giriniz"
                />

                <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel>Konu Seçiniz</InputLabel>
                    <Select
                        value={topic}
                        onChange={handleTopicChange}
                        label="Konu Seçiniz"
                    >
                        <MenuItem value="Edge">Edge</MenuItem>
                        <MenuItem value="Firefox">Firefox</MenuItem>
                        <MenuItem value="Chrome">Chrome</MenuItem>
                        <MenuItem value="Opera">Opera</MenuItem>
                        <MenuItem value="Safari">Safari</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    className="form-field"
                    fullWidth
                    margin="normal"
                    label="Mesajınızı Yazınız"
                    variant="outlined"
                    placeholder="Yazı yazınız..."
                    multiline
                    rows={10}
                />
                <div className="submit-button-container">
                    <Button
                        className='submit-button'
                        variant="contained"
                        type="submit"
                    >
                        GÖNDER
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default ContactForm;
