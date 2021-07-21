import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';
import * as endpoints from './routesEndpoints';

const Router = () => {
  const isUserAuth = true;

  return isUserAuth ?
    (
      <Switch>
        { privateRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact={true} />) }
        <Redirect to={endpoints.HOME_PAGE} />
      </Switch>
    )
    :
    (
      <Switch>
        { publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact={true} />) }
        <Redirect to={endpoints.REGISTRATION_PAGE} />
      </Switch>
    );
};

export default Router;