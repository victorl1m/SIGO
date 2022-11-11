import { Routes } from "./src/routes";
import { AuthProvider } from "./src/contexts/AuthContext";
import { FontProvider } from "./src/contexts/FontContext";

export default function App() {
    return (
        <AuthProvider>
            <FontProvider>
                <Routes />
            </FontProvider>
        </AuthProvider>
    )
}