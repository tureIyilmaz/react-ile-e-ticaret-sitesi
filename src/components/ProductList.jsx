import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlices';
import '../assets/css/ProductList.css';
import Product from './Product';
import { useLocation } from 'react-router-dom';

import margaritaImage from '../assets/img/products/margarita.jpg';
import sucukbolImage from '../assets/img/products/sucukbol.jpg';
import etibolImage from '../assets/img/products/etibol.jpg';
import karisikImage from '../assets/img/products/karisik.jpg';
import partiImage from '../assets/img/products/parti.jpg';
import akdenizImage from '../assets/img/products/akdeniz.jpg';
import kavurmaliImage from '../assets/img/products/kavurmali.jpg';
import tonBalikliImage from '../assets/img/products/ton_balikli.jpg';
import piknikImage from '../assets/img/products/piknik.jpg';
import pepperonniImage from '../assets/img/products/pepperoni.jpg';
import sarimsakSosluSucukbolImage from '../assets/img/products/sarimsak_soslu_sucukbol.jpg';
import italyanImage from '../assets/img/products/italyan.jpg';
import aciTavukbolImage from '../assets/img/products/aci_tavukbol.jpg';
import superSezarImage from '../assets/img/products/super_sezar.jpg';
import karisikbolImage from '../assets/img/products/karisikbol.jpg';

import ketcapImage from '../assets/img/products/ketçap.jpg';
import mayonezImage from '../assets/img/products/mayonez.jpg';
import aciSosImage from '../assets/img/products/aci_sos.jpg';

import suImage from '../assets/img/products/su.jpg';
import ayranImage from '../assets/img/products/ayran.jpg';
import pepsiImage from '../assets/img/products/pepsi_1lt.jpg';
import pepsiZeroImage from '../assets/img/products/pepsi_zero_1lt.jpg';
import liptonSeftaliImage from '../assets/img/products/lipton_seftali_1lt.jpg';
import liptonLimonImage from '../assets/img/products/lipton_limon_1lt.jpg';
import sodaImage from '../assets/img/products/soda.jpg';
import yedigunImage from '../assets/img/products/yedigun_1lt.jpg';

import sufleImage from '../assets/img/products/sufle.jpg';
import dondurmaImage from '../assets/img/products/dondurma.jpg';

const imageMap = {
    "margarita.jpg": margaritaImage,
    "sucukbol.jpg": sucukbolImage,
    "etibol.jpg": etibolImage,
    "karisik.jpg": karisikImage,
    "parti.jpg": partiImage,
    "akdeniz.jpg": akdenizImage,
    "kavurmali.jpg": kavurmaliImage,
    "ton_balikli.jpg": tonBalikliImage,
    "piknik.jpg": piknikImage,
    "pepperoni.jpg": pepperonniImage,
    "sarimsak_soslu_sucukbol.jpg": sarimsakSosluSucukbolImage,
    "italyan.jpg": italyanImage,
    "aci_tavukbol.jpg": aciTavukbolImage,
    "super_sezar.jpg": superSezarImage,
    "karisikbol.jpg": karisikbolImage,
    "ketçap.jpg": ketcapImage,
    "mayonez.jpg": mayonezImage,
    "aci_sos.jpg": aciSosImage,
    "sufle.jpg": sufleImage,
    "dondurma.jpg": dondurmaImage,
    "su.jpg": suImage,
    "ayran.jpg": ayranImage,
    "pepsi_1lt.jpg": pepsiImage,
    "pepsi_zero_1lt.jpg": pepsiZeroImage,
    "lipton_seftali_1lt.jpg": liptonSeftaliImage,
    "lipton_limon_1lt.jpg": liptonLimonImage,
    "soda.jpg": sodaImage,
    "yedigun_1lt.jpg": yedigunImage,
};

function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    const location = useLocation();
    const category = location.pathname.split('/').pop(); // URL'den kategori al

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = products.filter((product) => {
        switch (category) {
            case 'pizza':
                return product.category == 'Pizza';
            case 'discount':
                return product.discount;
            case 'trend':
                return product.trend;
            case 'ingredientsCount':
                return product.ingredientsCount > 5;
            case 'sauce':
                return product.category == 'Sauces';
            case 'dessert':
                return product.category == 'Desserts';
            case 'drink':
                return product.category == 'Drinks';
            default:
                return false;
        }
    });

    return (
        <div className="product-grid">
            {filteredProducts.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    image={imageMap[product.image]}
                />
            ))}
        </div>
    );
}

export default ProductList;
