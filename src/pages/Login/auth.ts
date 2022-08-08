import { createContext, useContext } from 'react';
import {} from 'typescript';

export const AuthContext = createContext('token');

export function useAuth() {
  return useContext(AuthContext);
}