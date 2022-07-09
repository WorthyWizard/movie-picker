import { Button } from "@/components/UI";
import { useSignOut } from "@/features/firebase";
import { Stack } from "@mui/material";

const AccountPage = () => {
  const [signOut] = useSignOut();

  return (
    <Stack justifyContent="center" alignItems="center" flex={1}>
      <Button variant="contained" onClick={signOut}>
        Logout
      </Button>
    </Stack>
  );
};

export default AccountPage;
