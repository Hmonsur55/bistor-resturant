
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const authContext = createContext(null)
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
     const createUser = (email, password) => {
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    };
    
      const signIn = (email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
     const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider);
     };
      const logOut = () => {
        return signOut(auth);
  };
  const updateProfileUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
    
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     console.log(currentUser);
     setUser(currentUser);
     setLoading(false);
   });
   return () => {
     return unsubscribe();
   };
 }, []);

    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      googleSignIn,
      logOut,
      updateProfileUser,
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;