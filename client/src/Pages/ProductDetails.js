import React from 'react'
import axios from "axios";
import { useState } from 'react';

function ProductDetails() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0.0);

    const handleSubmit = (e) => {
        //e.preventDefault();
        axios.post("http://localhost:3001/prod", {
            name: name,
            category: category,
            stock: stock,
            price: price
        }).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <div className="form-header">
                    <h1>Add New Product</h1>
                    <p>Fill in the details to add a product to your inventory</p>
                </div>

                <form onSubmit={handleSubmit} className="product-form">
                    <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <input 
                            type="text"
                            className="form-input"
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Enter product name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <input 
                            type="text"
                            className="form-input"
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            placeholder="Enter category"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Stock Quantity</label>
                            <input 
                                type="number"
                                className="form-input"
                                value={stock} 
                                onChange={(e) => setStock(e.target.value)} 
                                placeholder="0"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Price ($)</label>
                            <input 
                                type="number"
                                step="0.01"
                                className="form-input"
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)} 
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type='submit' className="btn-submit">
                            Add Product
                        </button>
                        <button type="button" className="btn-cancel">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDetails;