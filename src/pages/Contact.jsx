import React from 'react'
import ContactCardsSection from '../components/ContactCardsSection'
import ContactForm from '../components/ContactForm'
import PageTitle from '../components/PageTitle'
import ContactInfo from '../components/ContactInfo'


function Contact() {
    return (
        <div>
            <PageTitle
                title="İletişim"
                text="Bize ulaşmak için aşağıdaki formu doldurabilir veya satış süreci ve sık sorulan sorulara bakabilirsiniz." />
            <ContactCardsSection />
            <ContactForm />
            <ContactInfo />
        </div>
    )
}

export default Contact