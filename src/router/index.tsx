import { useRoutes } from "react-router-dom";

import { Spinner } from "@/components/UI/Spinner";
import { useAuthentication } from "@/features/firebase";

import { privateRoutes, publicRoutes } from "./routes";

export const Router = () => {
  const { isAuthenticated, initializing } = useAuthentication();

  const routes =
    isAuthenticated && !initializing ? privateRoutes : publicRoutes;
  const element = useRoutes(routes);

  if (initializing) {
    return <Spinner />;
  }

  return element;
};
