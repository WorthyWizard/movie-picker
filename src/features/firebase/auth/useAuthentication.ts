import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../init";

import { AuthUser } from "./types";

interface AuthenticationHookReturnValue {
  user: AuthUser;
  isAuthenticated: boolean;
  initializing: boolean;
}

export const useAuthentication = (): AuthenticationHookReturnValue => {
  const [user, setUser] = useState<AuthUser>(null);
  const [initializing, setInitializing] = useState<boolean>(true);

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      initializing && setInitializing(false);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return { user, isAuthenticated, initializing };
};
