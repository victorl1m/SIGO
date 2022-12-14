import { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    // auth state
    useEffect(() => {
        auth().onUserChanged(user => {
            setUser(user);
        })
    },[user])

    // change whenever there is a new customer
    const [update, setUpdate] = useState(false);
    
    return (
        <AuthContext.Provider value={{ user, update, setUpdate }}>
            {children}
        </AuthContext.Provider>
    )
} 