// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();

// app.post('/send-email', (req, res) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-password'
//     }
//   });

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'mariedwie@gmail.com',
//     subject: 'New Message from Vue.js Application',
//     text: req.body.message
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent');
//     }
//   });
// });

// app.listen(3000, () => console.log('Server started'));
