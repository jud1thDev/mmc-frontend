// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDobXyNl2FmQpOJTcdu0cU6lIw6jZ4V4Dw",
  authDomain: "bookduck-3654b.firebaseapp.com",
  projectId: "bookduck-3654b",
  storageBucket: "bookduck-3654b.firebasestorage.app",
  messagingSenderId: "259472501168",
  appId: "1:259472501168:web:f0ce654387126e1f458e75",
  measurementId: "G-XNN57JYCHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export { messaging };
