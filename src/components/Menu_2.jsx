import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Menu_2.css';

function Menu_2() {
    const navigate = useNavigate();

    const handleButtonClick = (category) => {
        navigate(`/menu/${category}`);
    };

    return (
        <div className="products-category">
            <button className="all-pizzas" onClick={() => handleButtonClick('pizza')}>TÜM PİZZALAR</button>
            <button className="discounted-pizzas" onClick={() => handleButtonClick('discount')}>İNDİRİMLİ PİZZALAR</button>
            <button className="trend-pizzas" onClick={() => handleButtonClick('trend')}>TREND PİZZALAR</button>
            <button className="plenty-material-pizzas" onClick={() => handleButtonClick('ingredientsCount')}>BOL MALZEME PİZZALAR</button>
            <button className="sauces" onClick={() => handleButtonClick('sauce')}>SOSLAR</button>
            <button className="desserts" onClick={() => handleButtonClick('dessert')}>TATLILAR</button>
            <button className="drinks" onClick={() => handleButtonClick('drink')}>İÇECEKLER</button>
        </div>
    );
}

export default Menu_2;
