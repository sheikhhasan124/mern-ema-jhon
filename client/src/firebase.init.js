// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1SIqO8xvK3scKtK--0WCyw07hRrTmnk",
  authDomain: "ema-jhon-simple-934d1.firebaseapp.com",
  projectId: "ema-jhon-simple-934d1",
  storageBucket: "ema-jhon-simple-934d1.appspot.com",
  messagingSenderId: "341034906738",
  appId: "1:341034906738:web:18b5d611646d7f9275beeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;