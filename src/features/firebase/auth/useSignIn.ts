import { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../init";

import { AuthCredentials, AuthStateFlags } from "./types";

type SignInHookReturnValue = [
  (credentials: AuthCredentials) => void,
  AuthStateFlags,
];

export const useSignIn = (): SignInHookReturnValue => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const signIn = useCallback(({ email, password }: AuthCredentials) => {
    isError && setIsError(false);
    isSuccess && setIsSuccess(false);
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);
      });
  }, []);

  return [signIn, { isError, isLoading, isSuccess }];
};
