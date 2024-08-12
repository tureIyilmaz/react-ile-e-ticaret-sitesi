import React, { useState } from 'react';
import '../assets/css/RegisterForm.css';
import RegisterImg from '../assets/img/register/register-img.png';
import { Container, TextField, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowPasswordAgain = () => setShowPasswordAgain(!showPasswordAgain);

    return (
        <Container>
            <main>
                <div className='register-form'>
                    <div className="row">
                        <div className="col-sm-4">
                            <TextField
                                fullWidth
                                className='register-form-textfield'
                                id="ad"
                                label="Ad"
                                placeholder="Lütfen adınızı giriniz"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                className='register-form-textfield'
                                id="soyad"
                                label="Soyad"
                                placeholder="Lütfen soyadınızı giriniz"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                className='register-form-textfield'
                                id="email"
                                label="E-mail"
                                placeholder="Lütfen emailinizi giriniz"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                className='register-form-textfield'
                                id="tel"
                                label="Telefon"
                                placeholder="Lütfen telefon numaranızı giriniz"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                className='register-form-textfield'
                                id="password"
                                label="Şifre"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Lütfen şifrenizi giriniz"
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={(e) => e.preventDefault()}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                className='register-form-textfield'
                                id="password-again"
                                label="Şifre Tekrar"
                                type={showPasswordAgain ? 'text' : 'password'}
                                placeholder="Lütfen şifrenizi giriniz"
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordAgain}
                                                onMouseDown={(e) => e.preventDefault()}
                                            >
                                                {showPasswordAgain ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <button type="submit" className="col-sm register-button">Kayıt Ol</button>

                            <h4 className="login-button">Zaten hesabınız var mı <Link to='/login'>Giriş Yap</Link></h4>

                            <hr />

                            <div className="social-button" style={{ textAlign: 'end' }}>
                                <a href="#"><button style={{ marginBottom: '0.5rem' }}><FaGoogle /> Google ile Kayıt Ol</button></a>
                                <a href="#"><button style={{ marginBottom: '0.5rem' }} ><FaFacebookF /> Facebook ile Kayıt Ol</button></a>
                                <a href="#"><button style={{ marginBottom: '0.5rem' }} ><FaTwitter /> Twitter ile Kayıt Ol</button></a>
                            </div>
                        </div>

                        <div className="col register-img">
                            <img src={RegisterImg} alt="Register" />
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
}

export default RegisterForm;
