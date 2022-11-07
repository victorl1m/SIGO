import { Routes } from "./src/routes"
import { AuthProvider } from "./src/config/AuthContext" 

export default function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}