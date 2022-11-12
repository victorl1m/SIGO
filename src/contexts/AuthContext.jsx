import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user);
                setIsLogged(true);
            } else {
                console.log("no users");
            }
        })
    },[]);

    return (
        <AuthContext.Provider value={{ isLogged }}>
            { children }
        </AuthContext.Provider>
    )
}