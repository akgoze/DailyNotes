import AppEditor from "./Views/AppEditor";
import SignUp from "./Views/SignUp";
import { isUser } from "./helpers/Utils";

function App() {
  
  if(!isUser()) {
    return <SignUp />
  } else {
    return <AppEditor />
  }

}

export default App
