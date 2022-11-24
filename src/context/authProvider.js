import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, deleteUser } from "firebase/auth";
import { auth } from "../utils/firebase";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        })
        
        const d = signInWithPopup(auth, provider).then(result => {
            const user = result.user
            if (user.email.split('@')[1] !== 'ssn.edu.in' && user.email.split('@')[1] !== 'ece.ssn.edu.in') {
                deleteUser(auth.currentUser).then(()=> {
                    console.log('User deleted');
                }).catch(err => console.log(err))
                return
            }
            return user
        })
        return d
    }

    return(
        <AuthContext.Provider value={{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}


