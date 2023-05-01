import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBjOUXNnbPMQaZA2Xdqd97vUbkebwrLWqA",
  authDomain: "dailymind-me.firebaseapp.com",
  projectId: "dailymind-me",
  storageBucket: "dailymind-me.appspot.com",
  messagingSenderId: "437081357782",
  appId: "1:437081357782:web:553b57948d49db76047877",
  measurementId: "G-BG5JYWHKDZ",
});

export const db = getFirestore(firebaseApp);

export const todosRef = collection(db, "notes");
