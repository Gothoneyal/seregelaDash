import { useState } from 'react';
import { addProduct } from '../../models/productModel';
import '../../styles/ProductForm.css';

const ProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !category || !subcategory || !imageFile) {
      alert('Please fill in all fields');
      return;
    }

    const product = { name, price, category, subcategory };

    await addProduct(product, imageFile);

    onProductAdded(product);
    setName('');
    setPrice('');
    setCategory('');
    setSubcategory('');
    setImageFile(null);
  };

  return (
    <div className='total'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price">Product Price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="subcategory">Subcategory</label>
          <input
            id="subcategory"
            type="text"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="imageFile">Product Image</label>
          <input
            id="imageFile"
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
