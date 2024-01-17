import { Switch, BrowserRouter } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { SignIn } from './pages/SignIn';
import { PrivateRoute } from './Components/PrivateRoute';
import { Home } from './pages/Home';
import { PublicRoute } from './Components/PublicRoute';
import { ProfileProvider } from './Context/Profile-Con-Provider';

function App() {
  return (
    <BrowserRouter>
      <ProfileProvider>
        <Switch>
          <PublicRoute path="/signIn">
            <SignIn />
          </PublicRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
