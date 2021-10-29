import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../Context/AuthProvider";
import { useHistory, useLocation } from "react-router";
import initializeAuthentaction from "../Firebase/firebase.init";
initializeAuthentaction();
const GoogleLogin = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLoginUser(user);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div onClick={handleGoogleLogin} className="btn btn-primary">
      <button>Sign In With Google</button>
    </div>
  );
};

export default GoogleLogin;
