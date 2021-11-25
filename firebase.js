// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { collection, getDocs,addDoc } from "firebase/firestore"; 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMRjfhFiRg_Fqw_LHLXqlBaPUfrkDa19g",
    authDomain: "fir-auth-445fc.firebaseapp.com",
    projectId: "fir-auth-445fc",
    storageBucket: "fir-auth-445fc.appspot.com",
    messagingSenderId: "1055896784620",
    appId: "1:1055896784620:web:3331246573a4d236759fc9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const docs = getDocs(collection(db, "commments"));
export {app,db,docs,addDoc,collection};
