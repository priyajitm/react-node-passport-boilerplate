import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppState';

const Register = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verify, setVerify] = useState(false);
  const [OTP, setOTP] = useState('');
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const { sendEmailOTP, verifyOTP, registerUser } = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  const verifyAccount = () => {
    if (!user || !email || !password || !confirmPassword) {
      setError('Fill all the fields');
    } else if (password !== confirmPassword) {
      setError('Password do not match');
    } else {
      setVerify(!verify);
      sendEmailOTP(email);
    }
  };

  const resendOTP = () => {
    sendEmailOTP(email);
  };

  const registeruser = async () => {
    const checkOTP = await verifyOTP(OTP);
    if (checkOTP) {
      const res = await registerUser(user, email, password);
      if (res === 'success') {
        setRedirect(true);
      }
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <>
      {redirect ? (
        <Redirect to="/login" />
      ) : (
        <div
          className="h-screen bg-fixed font-sans m-auto"
          style={{ backgroundImage: 'url(https://source.unsplash.com/nWiS2rgtVts/1920x1891)' }}
        >
          <div className="container mx-auto h-full flex justify-center items-center">
            {verify ? (
              <div className="w-2/3 md:w-2/3 lg:w-2/4">
                <div className="bg-teal-700 min-w-full rounded-t-lg">
                  <h1 className="p-5 text-2xl text-center text-white">Verify your Account</h1>
                </div>

                <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-b-lg shadow-md">
                  <div className="mb-2">
                    <p className="text-red-600 min-h-custom">{error}</p>
                  </div>
                  <div className="mb-4">
                    <label className="font-bold text-grey-darker block mb-2">Enter OTP sent on your Email</label>
                    <input
                      type="text"
                      className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Your OTP"
                      value={OTP}
                      onChange={(e) => setOTP(e.target.value)}
                    ></input>
                  </div>

                  <div className="mb-4 text-center">
                    <button
                      className="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-20 rounded-full"
                      onClick={registeruser}
                    >
                      Verify Email
                    </button>
                  </div>
                  <div className=" mt-4">
                    <div className="text-center">
                      <p className="text-gray-800 text-sm">
                        OTP not received?{' '}
                        <a className="no-underline text-blue-600 font-bold" onClick={resendOTP}>
                          Send Again
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <div className="text-center">
                      <p className="text-gray-800 text-sm">
                        Wrong Email?{' '}
                        <a className="no-underline text-blue-600 font-bold" onClick={verifyAccount}>
                          Change Email
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-2/3 md:w-2/3 lg:w-2/4">
                <div className="bg-teal-700 min-w-full rounded-t-lg">
                  <h1 className="p-5 text-2xl text-center text-white">Register your account</h1>
                </div>

                <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-b-lg shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <button className="bg-blue-700 hover:bg-blue-800 text-blue-100 font-bold py-2 px-6 rounded-full">
                      Signup using Facebook
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-800 focus:shadow-outline text-blue-100 font-bold py-2 px-6 rounded-full">
                      Signup using Google
                    </button>
                  </div>
                  <div className="mb-4">
                    <p className="text-center">-OR-</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-red-600 min-h-custom">{error}</p>
                  </div>
                  <div className="mb-4">
                    <label className="font-bold text-grey-darker block mb-2">Username</label>
                    <input
                      type="text"
                      className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Your Username"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                    ></input>
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
                      className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-20 rounded-full"
                      onClick={verifyAccount}
                    >
                      SignUp
                    </button>
                  </div>
                  <div className=" mt-4">
                    <div className="text-center">
                      <p className="text-gray-800 text-sm">
                        Already have an account?{' '}
                        <Link className="no-underline text-blue-600 font-bold" to="/login">
                          Login
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
