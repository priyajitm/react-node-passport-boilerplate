import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const loginuser = () => {
    console.log('login');
  };

  return (
    <div
      className="h-screen bg-fixed font-sans m-auto"
      style={{ backgroundImage: 'url(https://source.unsplash.com/nWiS2rgtVts/1920x1891)' }}
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-2/3 md:w-2/3 lg:w-2/4">
          <div className="bg-teal-700 min-w-full rounded-t-lg">
            <h1 className="p-5 text-2xl text-center text-white">Login to your account</h1>
          </div>

          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-b-lg shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <button className="bg-blue-700 hover:bg-blue-800 text-blue-100 font-bold py-2 px-6 rounded-full">
                Login with Facebook
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 focus:shadow-outline text-blue-100 font-bold py-2 px-6 rounded-full">
                Login with Google
              </button>
            </div>
            <div className="mb-4">
              <p className="text-center">-OR-</p>
            </div>
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">Username or Email</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">Password</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mb-4 text-center">
              <button
                className="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-20 rounded-full"
                onClick={loginuser}
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-center float-left">
                <Link
                  className="no-underline inline-block align-baseline font-bold text-xs md:text-sm text-blue-600"
                  to="/resetpassword"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center float-right">
                <p className="text-gray-800 text-sm">
                  Don't have an account?{' '}
                  <Link className="no-underline text-blue-600 font-bold" to="/register">
                    Create an Account
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
