import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType, IUser, IUserLogin } from './types';
import { getUserLocalStorage, setUserLocalStorage } from './utils';
import axios from '../../services/axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

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
      return true;
    }

    return false;
  };

  const signIn = async (userProps: IUserLogin) => {
    //login api
    try {
      const user = (
        await axios.post('/login', {
          email: userProps.email,
          password: userProps.password,
        })
      ).data as IUser;

      setUser(user);
      setUserLocalStorage(user);
      toast.success('Logado com sucesso!');
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

  const logOut = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  const value = { user, signIn, logOut, isLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
