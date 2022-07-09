import { User } from "firebase/auth";

export interface AuthCredentials {
  email: string;
  password: string;
}

export type AuthUser = User | null;

export interface AuthStateFlags {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export interface AuthState extends AuthStateFlags {
  user: AuthUser;
}
