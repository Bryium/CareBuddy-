import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import jwtDecode from "jwt-decode";
import api from "../api/api";

interface AuthShape {
  token: string | null;
  role: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthShape>({} as AuthShape);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [role, setRole] = useState<string | null>(localStorage.getItem("role"));

  
  useEffect(() => {
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setRole(decoded.role);
      } catch {
        logout();
      }
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    const { data } = await api.post("/users/login/", { email, password });
    const access = data.access as string;
    const decoded: any = jwtDecode(access);
    localStorage.setItem("token", access);
    localStorage.setItem("role", decoded.role);
    setToken(access);
    setRole(decoded.role);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
