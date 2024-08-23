import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAXQwVb8cYUZ0KcIkHSl8QlApPXbihw7iA",
    authDomain: "seregelagebeya-a70ce.firebaseapp.com",
    projectId: "seregelagebeya-a70ce",
    storageBucket: "seregelagebeya-a70ce.appspot.com",
    messagingSenderId: "1053634951627",
    appId: "1:1053634951627:web:698241005aa21e730a9e4e",
    measurementId: "G-PGWX6TQ3GF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
