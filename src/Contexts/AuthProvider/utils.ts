import { IUser } from './types';

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('U', JSON.stringify(user));
}

export function getUserLocalStorage(): IUser | null {
  const response = localStorage.getItem('U');

  if (!response) {
    return null;
  }

  const user = JSON.parse(response);

  return user ?? null;
}
