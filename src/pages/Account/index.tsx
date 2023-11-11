import { Stack } from "@mui/material";

import { slideLeft } from "@/animations";
import { Button } from "@/components/UI";
import { useSignOut } from "@/features/firebase";
import { withAnimation } from "@/wrappers/withAnimation";

const Page = () => {
  const [signOut] = useSignOut();

  return (
    <Stack justifyContent="center" alignItems="center" flex={1}>
      <Button variant="contained" onClick={signOut}>
        Logout
      </Button>
    </Stack>
  );
};

export const AccountPage = withAnimation(Page, slideLeft, {
  style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
