import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useUser } from './hooks/useUser';
import Header from './components/Header';
import Loader from './components/Loader';
import Home from './pages/Home';
import AddRepo from './pages/AddRepo';
import Login from './pages/Login';

const App = props => {
  const user = useUser();
  if (!user.loaded) return <Loader />;
  return (
    <div>
      <Router>
        {user.isLoggedIn && <Header user={user} />}
        <Switch>
          <Route exact path='/' children={<Home user={user} />} />
          <Route exact path='/addRepo' children={<AddRepo user={user} />} />
          <Route exact path='/login' children={<Login />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
