import { slideUp } from "@/animations";
import { Button } from "@/components/UI";
import { useSignIn, useSignUp } from "@/features/firebase";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Motion } from "react-motion";
import { AuthBlock, AuthWrapper } from "./styled";

const AuthPage = () => {
  const [
    signUp,
    {
      isLoading: signUpLoading,
      isError: signUpError,
      isSuccess: signUpSuccess,
    },
  ] = useSignUp();

  const [
    signIn,
    {
      isLoading: signInLoading,
      isError: signInError,
      isSuccess: signInSuccess,
    },
  ] = useSignIn();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUpHandler = () => {
    signUp({
      password,
      email,
    });
  };

  const signInHandler = () => {
    signIn({
      password,
      email,
    });
  };

  return (
    <Motion defaultStyle={slideUp.from} style={slideUp.to}>
      {(style) => (
        <AuthWrapper style={slideUp.getStyle(style)}>
          <AuthBlock>
            <TextField
              label="Email"
              sx={{ width: "100%", marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              sx={{ width: "100%" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Stack direction="row" justifyContent="center" gap={2} mt="auto">
              <Button
                variant="contained"
                onClick={signInHandler}
                disabled={signInLoading}
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                onClick={signUpHandler}
                disabled={signUpLoading}
              >
                Sign up
              </Button>
            </Stack>
          </AuthBlock>
        </AuthWrapper>
      )}
    </Motion>
  );
};

export default AuthPage;
