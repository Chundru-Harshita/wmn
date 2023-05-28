import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDyltlhz4jGWpGYkZJGdSotLW0bPYbLdiA",
    authDomain: "wmnnn-65187.firebaseapp.com",
    projectId: "wmnnn-65187",
    storageBucket: "wmnnn-65187.appspot.com",
    messagingSenderId: "85780745391",
    appId: "1:85780745391:web:a776331b9bc5573d2f985a",
    measurementId: "G-XY0Y0VT1KN"
  };

  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);