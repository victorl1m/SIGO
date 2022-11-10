import { Routes } from "./src/routes"
import { AuthProvider } from "./src/contexts/AuthContext" 

export default function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}