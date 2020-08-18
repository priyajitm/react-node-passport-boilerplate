import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import GetUser from './components/GetUser';

function App() {
  return (
    <div>
      <Register />
      <Login />
      <GetUser />
    </div>
  );
}

export default App;
