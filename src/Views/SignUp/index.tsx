import React from "react";
import { db } from "./../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { selectedKeys } from "./../../helpers/Utils";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { User } from "../../models";

const SignUp: React.FC = () => {
  const provider = new GoogleAuthProvider();
  

  const handleSubmit = async () => {
    
    const auth = getAuth();

    await signInWithPopup(auth, provider)
    .then((data:Record<string, any>) => {
      
        const user:User = {
          ...selectedKeys(data.user, ['uid', 'email', 'photoURL']),
          ...selectedKeys(data._tokenResponse, ['firstName', 'lastName']), 
          createdAt: new Date(data.user.metadata.creationTime),
          lastLoginAt: new Date(data.user.metadata.lastSignInTime),
        }

        setDoc(doc(db, "users", data.user.uid), user).then(() => {
            // Document successfully written!
        }).catch((error) => {
            throw new Error(error.message);
        })
        
      })
      .catch(error => {
        throw new Error(error.message);
      });
  };


  return (
    <div className="container">
      <h1>Kayıt Ol</h1>
        <button onClick={handleSubmit}>Kayıt Ol</button>
    </div>
  );
};

export default SignUp;