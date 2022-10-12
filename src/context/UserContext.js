import React, {useState, useEffect, createContext} from "react";
import {auth} from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { PropaneSharp } from "@mui/icons-material";

export const UserContext = createContext({user: null})

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const { displayName, email }  = user;
                setUser({
                    displayName,
                    email
                })
            } else {
                setUser(null)
            }
        })
    },[])

    return(
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
