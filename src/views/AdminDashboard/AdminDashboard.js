import { useEffect, useState } from 'react';
import { getProducts } from '../../models/productModel';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import '../../styles/adminDashboard.css'

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-content">
        <ProductForm onProductAdded={(newProduct) => setProducts([...products, newProduct])} />
        <ProductList
          products={products}
          onProductUpdated={(updatedProduct) => setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p))}
          onProductDeleted={(id) => setProducts(products.filter(p => p.id !== id))}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
