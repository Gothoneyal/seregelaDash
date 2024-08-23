import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../models/productModel';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
  };

  const handleProductUpdated = (product) => {
    navigate(`/update-product/${product.id}`, { state: { product } });
  };

  const handleProductDeleted = async (productId) => {
    await deleteProduct(productId);
    fetchProducts(); // Refresh the product list after deletion
  };

  return (
    <ProductList
      products={products}
      onProductUpdated={handleProductUpdated}
      onProductDeleted={handleProductDeleted}
    />
  );
};

export default ProductListContainer;
