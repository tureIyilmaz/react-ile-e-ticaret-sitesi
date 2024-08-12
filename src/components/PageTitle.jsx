import React from 'react'
import '../assets/css/PageTitle.css';

function PageTitle(props) {


    const { title, text } = props;

    return (
        <div className='title-div'>
            <h2>{title}</h2>
            <hr className='title-hr'></hr>
            <p>{text}</p>
        </div>
    )
}

export default PageTitle