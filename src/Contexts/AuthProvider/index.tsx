import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any;
  signin: (userProps: { name: string }) => void;
  test: (userProps: { name: string }) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (userProps: { name: string }) => {
    setUser(userProps);
  };

  const test = (userProps: { name: string }) => {
    setUser(userProps);
  };

  const signout = () => {
    setUser(null);
  };

  const value = { user, signin, signout, test };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
