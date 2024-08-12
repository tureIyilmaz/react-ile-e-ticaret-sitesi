import React from 'react'
import ContactCard from './ContactCard'
import { Row } from 'react-bootstrap';
import { FaCamera, FaQuestion } from 'react-icons/fa';
import { MdSell } from "react-icons/md";

function ContactCardsSection() {
    return (
        <Row style={{ justifyContent: "center", marginTop: "4rem", marginBottom: "4rem" }}>
            <ContactCard
                icon={MdSell}
                title="Misyonumuz"
                text="Hedeflerimiz, satış araştırması ve stratejimiz, performans izleme ve deperlendirme hakkında bilgi edinebilirsiniz."
                buttonText="Daha Fazla Bilgi"
                link="visions"
            />
            <ContactCard
                icon={FaCamera}
                title="Basın & Medya"
                text="Basın ve medya ilişkileri konusunda veya haber bültenlerimiz hakkında bilgi almak için iletişime geçin."
                buttonText="İletişime Geç"
                link="media"
            />
            <ContactCard
                icon={FaQuestion}
                title="Diğer Sorular"
                text="Herhangi bir sorunuz mu var? Destek ekibimiz size yardımcı olmak için buradadır. Sorularınızı bize iletin."
                buttonText="Sorunuzu Bize İletin"
                link="questions"
            />
        </Row>
    )
}

export default ContactCardsSection