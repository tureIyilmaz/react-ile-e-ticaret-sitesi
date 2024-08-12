import React from 'react'
import '../assets/css/ContactInfo.css';

function ContactInfo() {
    return (
        <div className='container info-container'>
            <div className="contact-map-baslik">
                <h2>İletişim Bilgileri</h2>
                <hr />
            </div>
            <div className="contact-map">
                <div className="row">
                    <iframe
                        className="col-sm-7"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.756570325122!2d28.837761099999998!3d41.030581399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4dfb4f279a5%3A0xd15ae3b22f90e91b!2sBa%C4%9Fc%C4%B1lar%20Belediyesi%20Engelliler%20Saray%C4%B1!5e0!3m2!1str!2str!4v1720042505888!5m2!1str!2str"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <br />
                    <div className="col-sm contact-map-text">
                        <div>
                            <p>Adres</p>
                            <h3>Barbaros Mahallesi Hoca Ahmet Yesevi Caddesi Bağcılar / İstanbul</h3>
                        </div>
                        <div>
                            <p>Email</p>
                            <h3>companyname@gmail.com</h3>
                        </div>
                        <div>
                            <p>Telefon</p>
                            <h3>+90 552 000 00 00</h3>
                        </div>
                        <div className="contact-map-icons">
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
