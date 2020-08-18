import React, { useState } from 'react';
import Axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    const createUser = await Axios.post('/api/register', data);

    console.log(createUser.data);
  };

  return (
    <>
      <h2>Register User</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Register;
