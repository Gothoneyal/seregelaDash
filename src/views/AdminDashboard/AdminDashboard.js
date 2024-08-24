import React from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import '../../styles/adminDashboard.css';

const AdminDashboard = () => {
  const handleProductUpdate = (updatedProduct) => {
    // Implement your update logic here
    console.log('Update product:', updatedProduct);
  };

  const handleProductDelete = (id) => {
    // Implement your delete logic here
    console.log('Delete product with id:', id);
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-content">
        <ProductForm />
        <ProductList
          onProductUpdated={handleProductUpdate}
          onProductDeleted={handleProductDelete}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
