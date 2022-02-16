// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASURE,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const noItem = {
  id: '0',
  title: 'Id no existente',
  price: 0,
  urls: [
    'https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg',
  ],
  stock: 0,
  description: 'No existe',
};

const mapItem = (doc) => {
  return { id: doc.id, ...doc.data() };
};

const mapCat = (doc) => {
  return { ...doc.data() };
};

export const getItemsByCat = async (cat) => {
  if (cat) {
    const q = query(collection(db, 'items'), where('category', '==', `${cat}`));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(mapItem);
  } else {
    const snapshot = await getDocs(collection(db, 'items'));
    return snapshot.docs.map(mapItem);
  }
};

export const getItem = async (id) => {
  const docRef = doc(db, 'items', `${id}`);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.data()) {
    return mapItem(docSnapshot);
  } else {
    return noItem;
  }
};

export const getCategories = async () => {
  const cat = await getDocs(collection(db, 'categories'));
  return cat.docs.map(mapCat);
};
