import { UserType } from './types';

export function setUserLocalStorage(user: UserType | null) {
  localStorage.setItem('U', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const response = localStorage.getItem('U');

  if (!response) {
    return null;
  }

  const user = JSON.parse(response);

  return user ?? null;
}
