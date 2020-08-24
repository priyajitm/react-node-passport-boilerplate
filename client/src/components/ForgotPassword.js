import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <div
      className="h-screen bg-fixed font-sans m-auto"
      style={{ backgroundImage: 'url(https://source.unsplash.com/nWiS2rgtVts/1920x1891)' }}
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-2/3 md:w-2/3 lg:w-2/4">
          <div className="bg-teal-700 min-w-full rounded-t-lg">
            <h1 className="p-5 text-2xl text-center text-white">Reset Your Password</h1>
          </div>

          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-b-lg shadow-md">
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">Username or Email</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Username"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
              ></input>
            </div>

            <div className="mb-4 text-center">
              <button className="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-10 rounded-full">
                Reset Password
              </button>
            </div>
            <div className="items-center mt-4">
              <div className="text-center">
                <a
                  className="no-underline inline-block align-baseline font-bold text-xs md:text-sm text-blue-600"
                  href="#"
                >
                  <Link to="/login">Login</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
