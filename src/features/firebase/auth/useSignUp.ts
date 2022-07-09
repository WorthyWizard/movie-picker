import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import { auth } from "../init";
import { AuthCredentials, AuthStateFlags } from "./types";

type SignUpHookReturnValue = [
  (credentials: AuthCredentials) => void,
  AuthStateFlags
];

const useSignUp = (): SignUpHookReturnValue => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const signOut = useCallback(({ email, password }: AuthCredentials) => {
    isError && setIsError(false);
    isSuccess && setIsSuccess(false);
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
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

  return [signOut, { isError, isLoading, isSuccess }];
};

export default useSignUp;
