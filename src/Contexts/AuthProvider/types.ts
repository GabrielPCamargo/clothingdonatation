export interface AuthContextType {
  user: UserType | null;
  signin: (userProps: UserType) => void;
  signout: () => void;
  isLoggedIn: () => boolean;
}

export interface UserType {
  name: string;
  token: string;
  type: string;
}
