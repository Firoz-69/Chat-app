import { Switch, BrowserRouter } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { SignIn } from './pages/SignIn';
import { PrivateRoute } from './Components/PrivateRoute';
import { Home } from './pages/Home';
import { PublicRoute } from './Components/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signIn">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
