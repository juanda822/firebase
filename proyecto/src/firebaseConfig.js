
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4hhjrbQ9a90LE7ZOxmL1WkZwnWBzM0Wk",
  authDomain: "pokeapi-93f83.firebaseapp.com",
  projectId: "pokeapi-93f83",
  storageBucket: "pokeapi-93f83.firebasestorage.app",
  messagingSenderId: "176621997624",
  appId: "1:176621997624:web:bebca157dbd6b7da8ea0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario! 
export { auth, db };