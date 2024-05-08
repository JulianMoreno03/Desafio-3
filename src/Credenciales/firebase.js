// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvYi-tQvHnpPgNJjdxKW3OrNYN8uwTTio",
  authDomain: "deafiodps.firebaseapp.com",
  databaseURL: "https://deafiodps-default-rtdb.firebaseio.com",
  projectId: "deafiodps",
  storageBucket: "deafiodps.appspot.com",
  messagingSenderId: "839181272553",
  appId: "1:839181272553:web:e6b5d47e9e4296e5f8f778",
  measurementId: "G-PKTS3Y7RV8"
};

// Inicializa Firebase App
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de Firestore
const db = getFirestore(app);

export default db;