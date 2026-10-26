import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct(){
    const [name,setName] = useState<string>('');
    const [price,setPrice] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        setLoading(true);

        axios.post('http://127.0.0.1:8000/api/products', {name:name, price:price})
        .then(response=>{
            alert('Product added successfully!');
            navigate('/');
        })
        .catch(error =>{
            console.error('Adding Failed:', error.response?.data);
            alert('Failed to add product. Please try again.');
            setLoading(false);
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div>
                    <label>Product Price:</label>
                    <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Adding...' : 'Add Product'}
                </button>

                <button type="button" onClick={()=>navigate('/')}>Cancel</button>
            </form>
        </div>
    );

}
