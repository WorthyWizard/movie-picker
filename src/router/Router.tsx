import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./routes";

const Router = () => {
  const isUserAuth = true;

  return isUserAuth ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default Router;
