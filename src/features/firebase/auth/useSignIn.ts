import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import { auth } from "../init";
import { AuthCredentials, AuthStateFlags } from "./types";

type SignInHookReturnValue = [
  (credentials: AuthCredentials) => void,
  AuthStateFlags
];

const useSignIn = (): SignInHookReturnValue => {
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
      .catch((error: FirebaseError) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);
      });
  }, []);

  return [signIn, { isError, isLoading, isSuccess }];
};

export default useSignIn;
