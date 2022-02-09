// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtRwoacCFuynD9C53lQPnVHZFIIh4Eg7g",
    authDomain: "filmstore-arias.firebaseapp.com",
    projectId: "filmstore-arias",
    storageBucket: "filmstore-arias.appspot.com",
    messagingSenderId: "951862115947",
    appId: "1:951862115947:web:c517f358a682914db2bb2e",
    measurementId: "G-YXR5DC8DGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const noItem = {
    id: '0',
    title: 'Id no existente',
    price: 0,
    urls: ["https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg"],
    stock: 0,
    description: 'No existe'
}

const mapItem = (doc) => {
    return { id: doc.id, ...doc.data() }
}

const mapCat = (doc) => {
    return {...doc.data()}
}

export const getItemsByCat = async (cat) => {
    if (cat) {
        const q = query(collection(db, "items"), where("category", "==", `${cat}`))
        const snapshot = await getDocs(q)
        return snapshot.docs.map(mapItem)
    } else {
        const snapshot = await getDocs(collection(db, "items"))
        return snapshot.docs.map(mapItem)
    }

};

export const getItem = async (id) => {
    const docRef = doc(db, "items", `${id}`)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.data()) {
         return mapItem(docSnapshot) } else { return noItem }
}


export const getCategories = async () => {
const cat = await getDocs(collection(db, "categories"))
return cat.docs.map(mapCat)}
// [{ name: 'pelicula', text: 'Pelicula' }, { name: 'camara', text: "Cámaras" }, { name: 'servicio', text: 'Servicios' }]



