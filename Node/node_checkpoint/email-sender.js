// email-sender.js
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', 
    pass: 'your-password' 
  }
});

const mailOptions = {
  from: 'your-email@gmail.com', 
  to: 'your-email@gmail.com', 
  subject: 'Test Email',    
  text: 'Hello, This is a test email from Node.js!' 
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
