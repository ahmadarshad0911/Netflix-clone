import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyCxZ06O8rPjZXnH-HP65nTgh5xUUkvVQH8",
  authDomain: "netflix-clone-3c8f1.firebaseapp.com",
  projectId: "netflix-clone-3c8f1",
  storageBucket: "netflix-clone-3c8f1.firebasestorage.app",
  messagingSenderId: "198123934697",
  appId: "1:198123934697:web:f744fe22deb9affcfe3178",
  measurementId: "G-GPXRRXVQB2"
};


const app = initializeApp(firebaseConfig);

//export const firebaseAuth = getAuth(app);
const firebaseAuth = getAuth(app);
export default firebaseAuth;