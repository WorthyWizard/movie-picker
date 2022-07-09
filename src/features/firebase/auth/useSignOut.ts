import { FirebaseError } from "firebase/app";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useCallback, useState } from "react";
import { auth } from "../init";
import { AuthStateFlags } from "./types";

type SignOutHookReturnValue = [() => void, AuthStateFlags];

const useSignOut = (): SignOutHookReturnValue => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const signOut = useCallback(() => {
    isError && setIsError(false);
    isSuccess && setIsSuccess(false);
    setIsLoading(true);

    firebaseSignOut(auth)
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((error: FirebaseError) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);
      });
  }, []);

  return [signOut, { isError, isLoading, isSuccess }];
};

export default useSignOut;
