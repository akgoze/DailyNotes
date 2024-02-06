import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjOUXNnbPMQaZA2Xdqd97vUbkebwrLWqA",
  authDomain: "dailymind-me.firebaseapp.com",
  projectId: "dailymind-me",
  storageBucket: "dailymind-me.appspot.com",
  messagingSenderId: "437081357782",
  appId: "1:437081357782:web:553b57948d49db76047877",
  measurementId: "G-BG5JYWHKDZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app, analytics };
