import { useState } from "react";
import { Stack, TextField } from "@mui/material";

import { slideUp } from "@/animations";
import { Button } from "@/components/UI";
import { useSignIn, useSignUp } from "@/features/firebase";
import { withAnimation } from "@/wrappers/withAnimation";

import { AuthBlock, AuthWrapper } from "./styled";

const Page = () => {
  const [signUp, { isLoading: signUpLoading }] = useSignUp();

  const [signIn, { isLoading: signInLoading }] = useSignIn();

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
    <AuthWrapper>
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
  );
};

export const AuthPage = withAnimation(Page, slideUp, {
  style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
