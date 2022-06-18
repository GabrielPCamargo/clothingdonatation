export interface AuthContextType {
  user: IUser | null;
  signIn: (userProps: IUserLogin) => Promise<void>;
  logOut: () => void;
  isLoggedIn: () => boolean;
}

export interface IUser {
  name: string;
  email: string;
  token: string;
  type: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
