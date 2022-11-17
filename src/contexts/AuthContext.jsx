import { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    // auth state
    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUser(user);
        })

        console.log(user);
    },[user])
    
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
} 