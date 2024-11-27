import { Switch, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Profiles from './components/Profiles';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './contexts/AuthContext';

/*   

  TODO: https://dummyjson.com/docs/auth adresindeki dökümantasyona göre login olduk.
  Login olduğunda local storage'a hook ile token yazıyor. 

  Bu mantığı bir Auth context oluşturup oraya aktarın. Örnek akış için: 
  https://v5.reactrouter.com/web/example/auth-workflow 
    
*/

function ProfileDetail() {
  const { profileID } = useParams();
  return <div>Now showing profile {profileID}</div>;
}

function App() {
  const { signout, isUserLoggedIn } = useAuth();
  const handleLogout = () => {
    signout();
  }

  return (
    <div>
      {/* TODO: NAV test için şimdilik burada, genecekte silinecek */}
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/who-is-watching">Profiles</Link>
          </li>
        </ul>
        {isUserLoggedIn()
          ?
          <button onClick={handleLogout}>Sign Out</button>
          :
          <button >Sign In</button>}
      </nav>
      <Switch>
        <PrivateRoute path="/who-is-watching">
          <Profiles /> {/* children propu ile otomatik taşınır */}
        </PrivateRoute>

        <PrivateRoute path="/profile/:profileID">
          <ProfileDetail />
        </PrivateRoute>

        <Route path="/login">
          <LoginForm />
        </Route>

        <PrivateRoute path="/">
          <h1>Movies Home</h1>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
