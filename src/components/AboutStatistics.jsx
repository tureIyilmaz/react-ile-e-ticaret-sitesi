import React from 'react'
import '../assets/css/about/AboutStatistics.css'
import { Container } from 'react-bootstrap'
import AboutStatisticsItem from './AboutStatisticsItem'

function aboutStatistics() {
    return (
        <Container>

            <div class="about-statistics">
                <div class="row">
                    <AboutStatisticsItem number={4} text="Şube Sayısı"/>
                    <AboutStatisticsItem number="300+" text="Üzerinde Çalışan Sayısı"/>
                    <AboutStatisticsItem number="100.000+" text="Üzerinde Kullanıcı Sayısı"/>
                    <AboutStatisticsItem number="%93" text="Müşteri Memnuniyeti"/>

                </div>
            </div>

        </Container>
    )
}

export default aboutStatistics


