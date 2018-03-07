import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Confirmation from './Confirmation';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/confirmations" component={Confirmation} />
          <Route path="/create_account" component={CreateAccount} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
