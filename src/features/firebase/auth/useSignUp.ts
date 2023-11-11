import { useCallback, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../init";

import { AuthCredentials, AuthStateFlags } from "./types";

type SignUpHookReturnValue = [
  (credentials: AuthCredentials) => void,
  AuthStateFlags,
];

export const useSignUp = (): SignUpHookReturnValue => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const signUp = useCallback(({ email, password }: AuthCredentials) => {
    isError && setIsError(false);
    isSuccess && setIsSuccess(false);
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
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

  return [signUp, { isError, isLoading, isSuccess }];
};
