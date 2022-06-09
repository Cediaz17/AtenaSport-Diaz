import {initializeApp} from "firebase/app";
import {addDoc, doc, getDoc, collection, getFirestore, query, update, where, getDocs, updateDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllItemsByCategoryId = async (categoryId) => {
    const itemsCollection = collection(db, 'items');
    const q = query(itemsCollection, where ('categoria', '==', categoryId));
    return await getDocs(q);
}

export const getAllItems = async () => {
    const itemsCollection = collection(db, 'items');
    return await getDocs(itemsCollection);
}
export const getItemById = async (itemId) => {
    const itemRef = doc(db, 'items', itemId);
    return await getDoc(itemRef);
}

export const createOrder = async (order) => {
    const orderCollection = collection(db, 'orders');
    return await addDoc(orderCollection, order)
}

export const updateItem = (itemId, change)=>{
    const itemRef = doc(db, 'items', itemId);
    updateDoc(itemRef, change);

}