import { useRoutes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./routes";

const Router = () => {
  const isAuthenticated = false;
  const routes = isAuthenticated ? privateRoutes : publicRoutes;
  const element = useRoutes(routes);
  return element;
};

export default Router;
