
import React, { useState } from 'react';
import '../assets/css/Login.css';
import { TextField, Link, Typography } from '@mui/material';

function Login() {


    return (
        <div className="login-container">

            <div className="login-second">
                <img className='login-second-img' src="src\assets\img\logo.png" alt="" />
                <h2>Hoşgeldin</h2>
                <p>Oturum açmak için lütfen bilgilerinizi giriniz</p>

                <form className="login-form">

                    <TextField
                        fullWidth
                        className='login-form-textfield'
                        id="login-name"
                        label="E-Mail"
                        placeholder="E-Mail adresinizi giriniz"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        className='login-form-textfield'
                        id="login-password"
                        label="Şifre"
                        placeholder="Şifrenizi giriniz"
                        margin="normal"
                    />

                    <div className="login-form-return">
                        <label>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>

                        <Link href="#" className="login-forgot-password">Şifremi unuttum?</Link>
                    </div>

                    <button type="submit" className="login-button">Giriş Yap</button>

                    <Typography >Henüz hesabınız yok mu? <Link className="login-return-register" href='#'>Kayıt Ol</Link></Typography>
                </form>
            </div>
        </div>
    );
}

export default Login;
