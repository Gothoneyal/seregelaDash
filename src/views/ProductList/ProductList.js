import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseService';
import '../../styles/productList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error('Error fetching products: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleUpdate = async (product) => {
    const updatedName = prompt('Enter new name:', product.name);
    if (updatedName) {
      try {
        const productRef = doc(db, 'products', product.id);
        await updateDoc(productRef, { name: updatedName });
        setProducts(products.map(p => p.id === product.id ? { ...p, name: updatedName } : p));
        alert('Product updated successfully.');
      } catch (error) {
        console.error('Error updating product: ', error);
      }
    }
  };

  const handleDelete = async (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      try {
        const productRef = doc(db, 'products', id);
        await deleteDoc(productRef);
        setProducts(products.filter(p => p.id !== id));
        alert('Product deleted successfully.');
      } catch (error) {
        console.error('Error deleting product: ', error);
      }
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list-horizontal">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Subcategory: {product.subcategory}</p>
          <button onClick={() => handleUpdate(product)}>Update</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
