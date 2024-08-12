import React from 'react';
import { Outlet, useParams } from 'react-router-dom';


function Products() {
    const { category } = useParams();

    return (
        <Outlet context={{ category }} />
    );
}

export default Products;
