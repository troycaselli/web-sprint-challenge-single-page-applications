import React, {useState, useEffect} from "react";
import {Link, Switch, Route, useHistory} from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import Home from './components/Home';
import Order from './components/Order';
import Confirmation from './components/Confirmation';
import formSchema from './validation/formSchema';

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

let pizzaOrdered = {};

const App = () => {
  const [personalizedPizza, setPersonalizedPizza] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialErrorData);
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  const validate = (name, valueToUse) => {
    yup.reach(formSchema, name)
      .validate(valueToUse)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
  }

  const onChange = event => {
    const {name, value, checked, type} = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    setPersonalizedPizza({...personalizedPizza, [name]: valueToUse});
    validate(name, valueToUse);
  }
  
  const onSubmit = evt => {
    evt.preventDefault();
    axios.post('https://reqres.in/api/orders', personalizedPizza)
      .then(res => {
        console.log(res.data);
        pizzaOrdered = res.data;
        setPersonalizedPizza(initialFormData);
        history.push('/pizza/confirmation');
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    formSchema
      .isValid(personalizedPizza)
      .then(valid => setDisabled(!valid))
  }, [personalizedPizza]);

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
            <Confirmation order={pizzaOrdered}/>
          </Route>
          <Route path='/pizza'>
            <Order
              values={personalizedPizza}
              change={onChange}
              submit={onSubmit}
              errors={formErrors}
              disabled={disabled}/>
          </Route>
          <Route path='/' component={Home}/>
        </Switch>
      </section>
    </div>
  );
};
export default App;
