import React, { useState } from 'react';
import Axios from 'axios';

const GetUser = () => {
  const [userdata, setUserdata] = useState(null);
  const onClick = async () => {
    const user = await Axios.get('/api/user', { withCredentials: true });

    setUserdata(user.data);
  };

  const logOut = async () => {
    const res = await Axios.get('/api/logout');

    console.log(res.data);
  };

  return (
    <>
      <h2>Fetch User Details</h2>
      <button onClick={onClick}>Get Info</button>
      <button onClick={logOut}>Logout</button>
      {userdata ? <h3>Hello, {userdata.username}</h3> : null}
    </>
  );
};

export default GetUser;
