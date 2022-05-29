import {initializeApp} from "firebase/app";
import {addDoc, doc, getDoc, collection, getFirestore, query, update, where, getDocs, updateDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAq-hs0kKLA_wWGraYe8oxOcQEaLqokW9g",
    authDomain: "ateneasport2022.firebaseapp.com",
    projectId: "ateneasport2022",
    storageBucket: "ateneasport2022.appspot.com",
    messagingSenderId: "606692297213",
    appId: "1:606692297213:web:51ed310ba199784427b194"
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