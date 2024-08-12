import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/about/AboutPartner.css'


import companyName1 from '../assets/img/about/company-name-1.jpg';
import companyName2 from '../assets/img/about/company-name-2.jpg';
import companyName3 from '../assets/img/about/company-name-3.jpg';
import companyName4 from '../assets/img/about/company-name-4.jpg';
import companyName5 from '../assets/img/about/company-name-5.jpg';
import companyName6 from '../assets/img/about/company-name-6.jpg';

function AboutPartner() {
    return (
        <Container>
            <div className="about-partner">
                <div className="about-partner-text">
                    <h1>ORTAKLAR</h1>
                </div>

                <div className="about-partner-img">
                    <div className="row">
                        <div className="col">
                            <img src={companyName1} alt="Company 1" />
                        </div>
                        <div className="col">
                            <img src={companyName2} alt="Company 2" />
                        </div>
                        <div className="col">
                            <img src={companyName3} alt="Company 3" />
                        </div>
                        <div className="col">
                            <img src={companyName4} alt="Company 4" />
                        </div>
                        <div className="col">
                            <img src={companyName5} alt="Company 5" />
                        </div>
                        <div className="col">
                            <img src={companyName6} alt="Company 6" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutPartner;
