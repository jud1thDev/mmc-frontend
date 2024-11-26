import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

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
const messaging = getMessaging(app);

export { messaging };
