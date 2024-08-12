import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Menu_2 from '../components/Menu_2';
import PageTitle from '../components/PageTitle';

function Sauce() {
  const [filter, setFilter] = useState('sauce');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="pizza-container">
      <PageTitle title="Ürünlerimiz" text="Lezzetli Pizzalara Eşlik Eden Özel Soslar" />
      <Menu_2 onFilterChange={handleFilterChange} />
      <ProductList filter={filter} />
    </div>
  )
}

export default Sauce