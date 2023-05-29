
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const authContext = createContext(null)
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
     const createUser = (email, password) => {
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    };
    
      const signIn = (email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    
      const logOut = () => {
        return signOut(auth);
    };
    
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

    
    const auth =getAuth(app)
    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;