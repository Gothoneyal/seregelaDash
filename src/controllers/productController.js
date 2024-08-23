import { getProducts, addProduct, updateProduct, deleteProduct } from '../models/productModel';

export const fetchProducts = async () => {
  return await getProducts();
};

export const createProduct = async (product, imageFile) => {
  await addProduct(product, imageFile);
};

export const editProduct = async (id, updatedData) => {
  await updateProduct(id, updatedData);
};

export const removeProduct = async (id) => {
  await deleteProduct(id);
};
