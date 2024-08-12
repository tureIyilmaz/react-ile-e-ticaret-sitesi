import React from 'react'
import AboutSide from '../components/AboutSide'
import CompanyPana from '../assets/img/about/Company-pana.png';
import Company from '../assets/img/about/kurumsal.jpg';
import PageTitle from '../components/PageTitle'
import AboutStatistics from '../components/AboutStatistics';
import AboutPartner from '../components/AboutPartner';


function Corporate() {
    return (

        <div>
            <PageTitle
                title="Hakkımızda"
                text="Bizim hakkımızda daha fazla bilgi edinebilirsiniz." />
            <AboutSide image={CompanyPana} title="Yenilik ve Kaliteyle Global Marka Olma Yolunda" text="Pizza sektöründe inovasyon ve mükemmeliyeti birleştirerek, ulusal ve uluslararası alanda tanınan bir marka olmayı hedefliyoruz. Sektördeki en iyi uygulamaları ve teknolojileri kullanarak, müşteri deneyimini sürekli olarak iyileştirmek ve sektördeki öncülerden biri olmak amacındayız." />
            <AboutStatistics />
            <AboutSide image={Company} title="Geleceğin Pizza Deneyimini Şekillendiriyoruz" text="Gıda sektöründe mükemmeliyeti hedefleyen bir lider olarak, müşterilerimize kaliteli ve yenilikçi pizzalar sunarak sektördeki standartları belirlemeyi amaçlıyoruz. Sürdürülebilirlik ve müşteri memnuniyeti odaklı yaklaşımımızla, her gün daha iyi bir hizmet sunma yolunda ilerliyoruz." />
            <AboutPartner />
        </div>
    )
}

export default Corporate