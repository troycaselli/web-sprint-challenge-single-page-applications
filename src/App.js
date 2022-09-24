import React, {useState, useEffect} from "react";
import {Link, Switch, Route, useHistory} from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import Home from './components/Home';
import Order from './components/Order';
import Confirmation from './components/Confirmation';
import formSchema from './validation/formSchema';
import './App.css';

// styling
const Header = styled.header`
  background: #1B1212;
  color: #F4F3F2;
  height: 70px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;
  width: 100%;
`;
const NavDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`;

const H3 = styled.h3`
  font-size: 1.3rem;
`;

const linkStyle = {
  textDecoration: 'none',
  color: '#F4F3F2',
  fontSize: '1rem',
  hover: {
    color: '#D31D1D'
  }
}

const Section = styled.section`
  min-height: 86vh;
`;

const Footer = styled.footer`
  background: #1B1212;
  height: 70px;
  margin-top: auto;
`;

// initial data
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

// App component
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
      <Header>
        <Nav>
          <H3>BLOOMTECH EATS</H3>
          <NavDiv>
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/pizza' style={linkStyle}>Order</Link>
          </NavDiv>
        </Nav>
      </Header>
      <Section>
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
      </Section>
      <Footer></Footer>
    </div>
  );
};
export default App;
