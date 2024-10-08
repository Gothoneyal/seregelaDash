import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/LeftHandMenu.css'

const Sdebar = () => {
    return (
        <div className="left-hand-menu">
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-product" activeClassName="active">Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product-list" activeClassName="active">Product List</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sdebar;
