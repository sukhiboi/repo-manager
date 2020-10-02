import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useUser } from './hooks/useUser';
import Home from './pages/Home';
import AddRepo from './pages/AddRepo';
import Loader from './components/Loader';

const App = props => {
  const user = useUser();
  if (!user.loaded) return <Loader />;
  return (
    <Router>
      <Switch>
        <Route exact path='/' children={<Home user={user} />} />
        <Route exact path='/addRepo' children={<AddRepo user={user} />} />
      </Switch>
    </Router>
  );
};

export default App;
