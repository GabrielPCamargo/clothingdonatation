import { useContext } from 'react';
import { AuthContext } from './index';

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
