import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  textTransform: "none",
  fontSize: "1.1rem",
}));
