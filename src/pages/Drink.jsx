import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Menu_2 from '../components/Menu_2';
import PageTitle from '../components/PageTitle';


function Drink() {
    const [filter, setFilter] = useState('drink');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    return (
        <div className="pizza-container">
            <PageTitle title="Ürünlerimiz" text="Lezzetli İçecekler, Keyifli Bir Pizza Deneyimi" />
            <Menu_2 onFilterChange={handleFilterChange} />
            <ProductList filter={filter} />
        </div>
    )
}

export default Drink