export interface AuthContextType {
  user: IUser | null;
  loading: boolean;
  signIn: (userProps: IUserLogin, callback: VoidFunction) => Promise<void>;
  logOut: (callback: VoidFunction) => void;
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
