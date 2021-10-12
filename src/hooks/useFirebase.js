import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";
initAuth()

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const googleSignIN = () => {
   return signInWithPopup(auth, googleProvider)
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    googleSignIN,
    logOut,
  };
};
export default useFirebase;
