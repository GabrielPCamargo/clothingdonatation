import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType, UserType } from './types';
import { getUserLocalStorage, setUserLocalStorage } from './utils';

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const userLS = getUserLocalStorage();

    if (userLS) {
      setUser(userLS);
    }
  }, []);

  const isLoggedIn = () => {
    if (user) return true;

    const userLS = getUserLocalStorage();

    if (userLS) {
      setUser(userLS);
      console.log('true');
      return true;
    }

    return false;
  };

  const signin = (userProps: UserType) => {
    //login api
    console.log('signin');
    setUser(userProps);
    setUserLocalStorage(userProps);
  };

  const signout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  const value = { user, signin, signout, isLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
