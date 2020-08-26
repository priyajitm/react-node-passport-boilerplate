const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export const OTPEmail = (OTP, email) => {
//   const msg = {
//     to: `${email}`,
//     from: 'no-reply@collabrains.dev',
//     subject: 'OTP for account activation',
//     text: `${OTP} is your account activation OTP. This OTP will expire in 24 hours.`,
//     html: `<strong>${OTP} is your account activation OTP. This OTP will expire in 24 hours.</strong>`,
//   };

//   sgMail.send(msg);
// };

// export const registered = (email) => {
//   const loginURL = 'http://localhost:3000/login';
//   const msg = {
//     to: `${email}`,
//     from: 'no-reply@collabrains.dev',
//     subject: 'You account has been created',
//     text: `You can login to your account now at ${loginURL}`,
//     html: `<strong>You can login to your account now at ${loginURL}.</strong>`,
//   };

//   sgMail.send(msg);
// };

// export const resetPasswordOTP = (email, OTP) => {
//   const loginURL = 'http://localhost:3000/login';
//   const msg = {
//     to: `${email}`,
//     from: 'no-reply@collabrains.dev',
//     subject: 'OTP for password reset',
//     text: `${OTP} is your password reset OTP. This OTP will expire in 24 hours.`,
//     html: `<strong>${OTP} is your password reset OTP. This OTP will expire in 24 hours..</strong>`,
//   };

//   sgMail.send(msg);
// };

const resetPassword = (email) => {
  const loginURL = 'http://localhost:3000/login';
  const msg = {
    to: `${email}`,
    from: 'priyajit.mukherjee1@gmail.com',
    subject: 'You account has been created',
    text: `Your password has been reset. You can login to your account now at ${loginURL} with your new password.`,
    html: `<strong>Your password has been reset. You can login to your account now at ${loginURL} with your new password.</strong>`,
  };

  sgMail.send(msg);
};

resetPassword('priyajit@hotmail.com');
