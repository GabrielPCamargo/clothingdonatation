import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType, IUser, UserType } from './types';
import { getUserLocalStorage, setUserLocalStorage } from './utils';
import { AxiosError } from 'axios';
import axios from '../../services/axios';
import { toast } from 'react-toastify';

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

  const signin = async (userProps: IUser) => {
    //login api
    try {
      console.log(userProps);
      const user = (
        await axios.post('/login', {
          email: userProps.email,
          password: userProps.password,
        })
      ).data as UserType;
      setUser(user);
      setUserLocalStorage(user);
      toast.success('Logado com sucesso!');
    } catch (err: any) {
      console.log(err.response.data);
      toast.error(err.response.data);
    }
  };

  const signout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  const value = { user, signin, signout, isLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
