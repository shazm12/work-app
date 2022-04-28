// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { collection, getDocs,addDoc } from "firebase/firestore"; 
// Your web app's Firebase configuration
const firebaseConfig = {
    //Your firebase API credentials
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const docs = getDocs(collection(db, "commments"));
export {app,db,docs,addDoc,collection};
