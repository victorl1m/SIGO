import { AuthProvider } from './src/contexts/AuthContext';
import { NavBarProvider } from './src/contexts/NavBarContext';
import {Routes} from './src/routes';

export default function App() {
  return (
    <NavBarProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavBarProvider>
  );
}
