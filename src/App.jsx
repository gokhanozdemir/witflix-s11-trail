import { useState } from 'react';
import { Switch, Route, Link, useHistory, useParams } from 'react-router-dom';
import './App.css';
import Profiles from './components/Profiles';
import LoginForm from './components/LoginForm';

/*   

  TODO: https://dummyjson.com/docs/auth adresindeki dökümantasyona göre login olduk.
  Login olduğunda local storage'a hook ile token yazıyor. 

  Bu mantığı bir Auth context oluşturup oraya aktarın. Örnek akış için: 
  https://v5.reactrouter.com/web/example/auth-workflow 
    
*/

function ProfileDetail() {
  return <div>Now showing profile {profileID}</div>;
}

function App() {
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
      </nav>
      <Switch>
        <Route path="/who-is-watching">
          <Profiles />
        </Route>
        <Route path="/profile/:profileID">
          <ProfileDetail />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
