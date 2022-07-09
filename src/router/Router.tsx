import Spinner from "@/components/UI/Spinner/Spinner";
import { useAuthentication } from "@/features/firebase";
import { useRoutes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./routes";

const Router = () => {
  const { isAuthenticated, initializing } = useAuthentication();

  const routes =
    isAuthenticated && !initializing ? privateRoutes : publicRoutes;
  const element = useRoutes(routes);

  if (initializing) {
    return <Spinner />;
  }

  return element;
};

export default Router;
