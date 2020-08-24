import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import { AppProvider } from './context/AppState';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/resetpassword" component={ForgotPassword} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
