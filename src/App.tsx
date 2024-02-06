import AppEditor from "./Views/AppEditor";
import SignUp from "./Views/SignUp";

import { app } from "./firebase";

import FirebaseContext from './routes/FirebaseContext';

function App() {
  <FirebaseContext.Provider value={app}>
  <AppEditor />
  </FirebaseContext.Provider>
}

export default App
