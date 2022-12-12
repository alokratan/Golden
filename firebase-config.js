// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAheQgyYLt3_yfrHqN-zcuLRdpXv1xcg8k",
  authDomain: "goldeneyeapi.firebaseapp.com",
  projectId: "goldeneyeapi",
  storageBucket: "goldeneyeapi.appspot.com",
  messagingSenderId: "160982244675",
  appId: "1:160982244675:web:e223cd999bc975d99f23f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);
