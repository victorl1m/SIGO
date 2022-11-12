import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBddg0vbtzf7bnTeLwbSL4TaiMr144Sow",
    authDomain: "sigo-3e87b.firebaseapp.com",
    projectId: "sigo-3e87b",
    storageBucket: "sigo-3e87b.appspot.com",
    messagingSenderId: "493572224288",
    appId: "1:493572224288:web:2dd1626d85518d6bdd9345",
    measurementId: "G-G4P98NFLN5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);