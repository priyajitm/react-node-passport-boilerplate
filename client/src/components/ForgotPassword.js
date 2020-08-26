import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppState';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [emailWindow, setEmailWindow] = useState('');
  const [OTPWindow, setOTPWindow] = useState('hidden');
  const [passwordWindow, setPasswordWindow] = useState('hidden');

  const { passwordReset, sendPasswordOTP, verifyOTP } = useContext(AppContext);

  const sendOTP = () => {
    if (email !== '') {
      sendPasswordOTP(email);
      setEmailWindow('hidden');
      setOTPWindow(null);
    } else {
      setError('Please enter your email');
    }
  };

  const checkOTP = async () => {
    if (OTP !== '') {
      const response = await verifyOTP(OTP);

      if (!response) {
        setError('Invalid OTP');
      } else {
        setOTPWindow('hidden');
        setPasswordWindow(null);
      }
    } else {
      setError('Enter OTP');
    }
  };

  const savePassword = () => {
    if (password != '' && password === confirmPassword) {
      console.log(password);
    } else if (password === '' || confirmPassword === '') {
      setError('Add new password');
    } else {
      setError('Password do not match');
    }
  };

  return (
    <div
      className="h-screen bg-fixed font-sans m-auto"
      style={{ backgroundImage: 'url(https://source.unsplash.com/nWiS2rgtVts/1920x1891)' }}
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        {/* Email Window */}
        <div className={'w-2/3 md:w-2/3 lg:w-2/4' + ' ' + emailWindow}>
          <div className="bg-teal-700 min-w-full rounded-t-lg">
            <h1 className="p-5 text-2xl text-center text-white">Reset Your Password</h1>
          </div>

          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-b-lg shadow-md">
            <div className="mb-2">
              <p className="text-red-600 min-h-custom">{error}</p>
            </div>
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">Email</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="mb-4 text-center">
              <button
                className="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-10 rounded-full"
                onClick={sendOTP}
              >
                Send OTP
              </button>
            </div>
            <div className="items-center mt-4">
              <div className="text-center">
                <Link
                  className="no-underline inline-block align-baseline font-bold text-xs md:text-sm text-blue-600"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* OTPWindow */}
        <div className={'w-2/3 md:w-2/3 lg:w-2/4' + ' ' + OTPWindow}>
          <div className="bg-teal-700 min-w-full rounded-t-lg">
            <h1 className="p-5 text-2xl text-center text-white">Reset Your Password</h1>
          </div>

          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-b-lg shadow-md">
            <div className="mb-2">
              <p className="text-red-600 min-h-custom">{error}</p>
            </div>
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">OTP</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="OTP"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
              ></input>
            </div>

            <div className="mb-4 text-center">
              <button
                className="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-10 rounded-full"
                onClick={checkOTP}
              >
                Verify OTP
              </button>
            </div>
            <div className="items-center mt-4">
              <div className="text-center">
                <Link
                  className="no-underline inline-block align-baseline font-bold text-xs md:text-sm text-blue-600"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Password Window */}
        <div className={'w-2/3 md:w-2/3 lg:w-2/4' + ' ' + passwordWindow}>
          <div className="bg-teal-700 min-w-full rounded-t-lg">
            <h1 className="p-5 text-2xl text-center text-white">Reset Your Password</h1>
          </div>

          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-b-lg shadow-md">
            <div className="mb-2">
              <p className="text-red-600 min-h-custom">{error}</p>
            </div>
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">New Password</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">Confirm Password</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>

            <div className="mb-4 text-center">
              <button
                className="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-10 rounded-full"
                onClick={savePassword}
              >
                Set Password
              </button>
            </div>
            <div className="items-center mt-4">
              <div className="text-center">
                <Link
                  className="no-underline inline-block align-baseline font-bold text-xs md:text-sm text-blue-600"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
