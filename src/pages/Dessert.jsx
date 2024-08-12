import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Menu_2 from '../components/Menu_2';
import PageTitle from '../components/PageTitle';

function Dessert() {
  const [filter, setFilter] = useState('desert');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <div className="pizza-container">
      <PageTitle title="Ürünlerimiz" text="Tatlılarımızla Pizza Keyfinizi Taçlandırın" />
      <Menu_2 onFilterChange={handleFilterChange} />
      <ProductList filter={filter} />
    </div>
  )
}

export default Dessert