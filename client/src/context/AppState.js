import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import Axios from 'axios';

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

  const sendOTP = async (email) => {
    await generateOTP();
    console.log(OTP);
  };

  const verifyOTP = async (code) => {
    return code === OTP;
  };

  const registerUser = (user, email, password) => {
    console.log(user, email, password);
  };

  return (
    <AppContext.Provider
      value={{ user: state.user, isAuthenticated: state.isAuthenticated, sendOTP, verifyOTP, registerUser }}
    >
      {children}
    </AppContext.Provider>
  );
};
