import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import Axios from 'axios';
import { OTPEmail, registered, resetPasswordOTP, resetPassword } from '../';

const initialState = {
  user: '',
  isAuthenticated: false,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  var OTP = '';

  // User Registration

  const generateOTP = () => {
    const digits = '0123456789';
    const OTPLength = 4;

    for (let i = 1; i <= OTPLength; i++) {
      const index = Math.floor(Math.random() * digits.length);
      OTP = OTP + digits[index];
    }

    return OTP;
  };

  const sendEmailOTP = async (email) => {
    OTP = '';
    await generateOTP();

    // As email feature has not implemented, I am console logging the OTP
    console.log(OTP);
  };

  const sendPasswordOTP = async (email) => {
    OTP = '';
    await generateOTP();

    // As email feature has not implemented, I am console logging the OTP
    console.log(OTP);
  };

  const verifyOTP = async (code) => {
    return code === OTP;
  };

  const registerUser = async (user, email, password) => {
    console.log(user, email, password);
    const data = {
      user,
      email,
      password,
    };
    const response = await Axios.post('api/register', data);
  };

  const loginUser = async (email, password) => {
    const response = await Axios.post('api/auth/login');
  };

  const passwordReset = async (email) => {
    await Axios.post('api/passwordreset', email);
  };

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        sendEmailOTP,
        sendPasswordOTP,
        verifyOTP,
        registerUser,
        passwordReset,
        loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
