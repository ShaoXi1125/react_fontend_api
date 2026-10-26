import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id:number;
    name:string;
    price:number;
    updated_at:string;
}

export default function Products(){
    const [products,setProducts] = useState<Product[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        // Request to Laravel API to get products
        axios.get('http://127.0.0.1:8000/api/products')
        .then(response=>{
            setProducts(response.data.data);
            setLoading(false);
            console.log('Products fetched:', response.data);
        })
        .catch(error=>{
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    },[]);

    if(loading){
        return <div>Loading...</div>;
    }

    return(
        <div>
            <h1>Products Lists: </h1>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        {product.name} - ${product.price} - Updated at: {product.updated_at}
                    </li>
                ))}
            </ul>
        </div>
    );
}
