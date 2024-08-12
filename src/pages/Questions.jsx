import React from 'react';
import PageTitle from '../components/PageTitle';
import Accordions from '../components/Accordions';

function Questions() {
    return (
        <>
            <PageTitle title="Sık Sorulan Sorular" text="Merak ettiğiniz sorulara aşağıdan ulaşabilirsiniz." />
            <Accordions />
        </>
    );
}

export default Questions;