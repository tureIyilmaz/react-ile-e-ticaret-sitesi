import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Menu_2 from '../components/Menu_2';
import PageTitle from '../components/PageTitle';

function PlentyPizza() {
  const [filter, setFilter] = useState('ingredientsCount');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <div className="pizza-container">
      <PageTitle title="Ürünlerimiz" text="Malzemesi Bol, Lezzeti Tam" />
      <Menu_2 onFilterChange={handleFilterChange} />
      <ProductList filter={filter} />
    </div>
  )
}

export default PlentyPizza