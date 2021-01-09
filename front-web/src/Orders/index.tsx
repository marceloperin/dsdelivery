
import { useEffect, useState } from 'react';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { fetchProducts } from '../api';
import ProductsList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);

    console.table(products);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;