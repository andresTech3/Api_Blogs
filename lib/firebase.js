// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgNaqG9zwlvD4hA8TecaP7uCzRsDkEhig",
  authDomain: "andrestech-a6a49.firebaseapp.com",
  projectId: "andrestech-a6a49",
  storageBucket: "andrestech-a6a49.appspot.com",
  messagingSenderId: "424892343948",
  appId: "1:424892343948:web:b2041e22cb87754d243da9",
  measurementId: "G-DMSSEFPGY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


logEvent(analytics, 'notification_received');

export default app


