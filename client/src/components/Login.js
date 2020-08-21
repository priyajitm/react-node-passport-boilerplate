import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    const createUser = await Axios.post('/api/login', data);

    console.log(createUser.data);
  };

  const onClick = async () => {
    await Axios.get('/auth/google');
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button>Submit</button>
      </form>
      <button onClick={onClick}>Login with Google</button>
    </>
  );
};

export default Login;
