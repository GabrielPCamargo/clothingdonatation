export interface AuthContextType {
  user: UserType | null;
  signin: (userProps: IUser) => void;
  signout: () => void;
  isLoggedIn: () => boolean;
}

export interface UserType {
  name: string;
  email: string;
  token: string;
  type: string;
}

export interface IUser {
  email: string;
  password: string;
}
