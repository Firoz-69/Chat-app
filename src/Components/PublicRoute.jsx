import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../Context/Profile-Con-Provider';
import { Container, Loader } from 'rsuite';

export const PublicRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }
  if (!profile && !isLoading) {
    return <Redirect to="/signIn" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};
