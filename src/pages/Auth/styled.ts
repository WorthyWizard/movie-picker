import { alpha, Paper, Stack, styled } from "@mui/material";

export const AuthWrapper = styled(Stack)(({ theme }) => ({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}));

export const AuthBlock = styled(Paper)(({ theme }) => ({
  width: 500,
  height: 500,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));
