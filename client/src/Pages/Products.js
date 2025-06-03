import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Products() {
    const [listOfProducts, setListOfProducts] = useState([]);

    const refreshTasks = () => {
        axios.get("http://localhost:3001/prod").then((response) => {
            setListOfProducts(response.data);
        });
    };

    useEffect(() => {
        refreshTasks();
    }, []);

   const deleteProduct = (id) => {
        axios.delete(`http://localhost:3001/prod/delByID/${id}`).then((response) => {
            console.log(response);
        });
        refreshTasks();
   };



    return (
        <div className="products-container">
            <div className="products-header">
                <h1>Product Inventory</h1>
                <p>Manage and view all your products</p>
            </div>
            
            <div className="products-grid">
                {listOfProducts.map((value, key) => {
                    return (
                        <div key={key} className="product-card">
                            <div className="product-header">
                                <h3 className="product-name">{value.name}</h3>
                                <span className="product-category">{value.category}</span>
                            </div>
                            
                            <div className="product-details">
                                <div className="detail-row">
                                    <span className="detail-label">Stock:</span>
                                    <span className="detail-value stock">{value.stock} units</span>
                                </div>
                                
                                <div className="detail-row">
                                    <span className="detail-label">Price:</span>
                                    <span className="detail-value price">${value.price}</span>
                                </div>
                            </div>
                            
                            <div className="product-actions">
                                <button className="btn-edit">Edit</button>
                                <button className="btn-delete" onClick={() => deleteProduct(value.id)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {listOfProducts.length === 0 && (
                <div className="empty-state">
                    <div className="empty-icon">📦</div>
                    <h3>No products found</h3>
                    <p>Start by adding your first product to the inventory</p>
                </div>
            )}
        </div>
    )
}

export default Products;