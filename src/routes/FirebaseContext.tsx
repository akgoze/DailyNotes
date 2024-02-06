import { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const FirebaseContext = createContext(null);

export default FirebaseContext;