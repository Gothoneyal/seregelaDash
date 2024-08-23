import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './views/AdminDashboard/AdminDashboard';
import ProductForm from './views/ProductForm/ProductForm';
import ProductListContainer from './views/ProductList/ProductListContainer';
import './styles/global.css';
import Sidebar from './views/menu/Sidebar'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/add-product" element={<ProductForm />} />
            <Route path="/product-list" element={<ProductListContainer />} />
            <Route path="/update-product/:id" element={<ProductForm />} />
            <Route path="*" element={<AdminDashboard />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
