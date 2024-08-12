import React from 'react'
import notFoundPageImage from '../assets/img/404.png';

function NotFoundPages() {
    return (
        <div>
            <img src={notFoundPageImage} alt="404 Error" style={{ width: "100%" }} />
        </div>
    )
}

export default NotFoundPages