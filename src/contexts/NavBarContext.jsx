import { createContext } from "react";
import SystemNavigationBar from "react-native-system-navigation-bar";

export const NavBarContext = createContext();

export function NavBarProvider({ children }) {
    SystemNavigationBar.setBarMode("dark", "navigation");

    return (
        <NavBarContext.Provider value={{ }}>
            {children}
        </NavBarContext.Provider>
    )
} 