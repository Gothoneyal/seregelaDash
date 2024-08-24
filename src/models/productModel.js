import { db, storage } from '../services/firebaseService';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const addProduct = async (product, imageFile) => {
  try {
    // Upload image to Firebase Storage
    const storageRef = ref(storage, `products/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(storageRef);

    // Add product to Firestore with image URL
    const productRef = await addDoc(collection(db, 'products'), {
      ...product,
      imageUrl,
    });

    return productRef.id;
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

export const getProducts = async () => {
  const products = [];
  const snapshot = await db.collection('products').get();
  snapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const updateProduct = async (id, updatedData) => {
  await db.collection('products').doc(id).update(updatedData);
};

export const deleteProduct = async (id) => {
  await db.collection('products').doc(id).delete();
};
