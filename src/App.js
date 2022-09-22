import React, {useState} from "react";
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Order from './components/Order';
import Confirmation from './components/Confirmation';

const initialFormData = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  driedTomatos: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  gummyBears: false,
  pineapple: false,
  extraCheese: false,
  comments: ''
}

const initialErrorData = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: '',
  sausage: '',
  canadianBacon: '',
  spicyItalianSausage: '',
  grilledChicken: '',
  onions: '',
  greenPepper: '',
  driedTomatos: '',
  blackOlives: '',
  roastedGarlic: '',
  artichokeHearts: '',
  gummyBears: '',
  pineapple: '',
  extraCheese: '',
  comments: ''
}

const App = () => {
  const [personalizedPizza, setPersonalizedPizza] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialErrorData);

  const onChange = event => {
    const {name, value, checked, type} = event.target;
    console.log(checked);
    const valueToUse = type === 'checkbox' ? checked : value;
    setPersonalizedPizza({...personalizedPizza, [name]: valueToUse});
  }
  console.log(personalizedPizza);
  
  const onSubmit = evt => {
    evt.preventDefault();
  }

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
            <Order
              values={personalizedPizza}
              change={onChange}
              submit={onSubmit}/>
          </Route>
          <Route path='/' component={Home}/>
        </Switch>
      </section>
    </div>
  );
};
export default App;
