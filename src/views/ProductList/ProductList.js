import React from 'react';
import '../../styles/productList.css'

const ProductList = ({ products, onProductUpdated, onProductDeleted }) => {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Subcategory: {product.subcategory}</p>
          <button onClick={() => onProductUpdated(product)}>Update</button>
          <button onClick={() => onProductDeleted(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
