import React from "react";
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Order from './components/Order';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <h3>BLOOMTECH EATS</h3>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order</Link>
          </div>
        </nav>
      </header>
      <section>
        <Switch>
          <Route path='/pizza/confirmation'>
            <Confirmation />
          </Route>
          <Route path='/pizza'>
            <Order />
          </Route>
          <Route path='/' component={Home}/>
        </Switch>
      </section>
    </div>
  );
};
export default App;
