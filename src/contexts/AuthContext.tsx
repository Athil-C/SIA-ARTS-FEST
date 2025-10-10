import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  username: string;
  role: 'admin' | 'media';
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    // Simple authentication for demo
    if (username === 'admin' && password === 'admin123') {
      setUser({ username: 'admin', role: 'admin' });
      return true;
    }
    if (username === 'media' && password === 'media123') {
      setUser({ username: 'media', role: 'media' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
