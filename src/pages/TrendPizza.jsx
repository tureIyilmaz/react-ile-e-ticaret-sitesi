import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Menu_2 from '../components/Menu_2';
import PageTitle from '../components/PageTitle';

function TrendPizza() {
  const [filter, setFilter] = useState('trend');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="pizza-container">
      <PageTitle title="Ürünlerimiz" text="Lezzet Modası: Trend Pizza Çeşitleri" />
      <Menu_2 onFilterChange={handleFilterChange} />
      <ProductList filter={filter} />
    </div>
  )
}

export default TrendPizza