import React from "react";
import { db } from "./../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { selectedKeys } from "./../../helpers/Utils";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { User } from "../../models";
import "./signUp.scss";

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
    <div className="login-container flex flex-col mt-24 mx-auto text-center">
      <img src="./src/assets/images/logo-dailymind.svg" alt="Dailymind logo" />
      <p className="text-base opacity-60 mb-12 ">turning note-taking into an enjoyable daily habit</p>
        <button className="px-5 py-3 bg-white rounded-lg" onClick={handleSubmit}>Continue with Google</button>
    </div>
  );
};

export default SignUp;