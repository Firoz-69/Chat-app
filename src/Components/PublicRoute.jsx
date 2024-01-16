import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';

export const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (profile) {
    return <Redirect to="signIn" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};
