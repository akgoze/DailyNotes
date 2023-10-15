import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignUp: React.FC = () => {
  const provider = new GoogleAuthProvider();
  
  const handleSubmit = async () => {
    
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential:any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        const res = JSON.parse(JSON.stringify(result));
        console.log(res._tokenResponse
);
        
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        throw new Error(errorMessage);
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