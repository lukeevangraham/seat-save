// import axios from "axios";

// export default function handler(req, res) {


//   let config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: "https://api.sparkpost.com/api/v1/transmissions",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: process.env.SPARKPOST_API_KEY,
//     },
//     data: data,
//   };

//   axios
//     .request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//       res.status(200).json({ status: 200 });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// // NODEMAILER CODE

// // const nodemailer = require("nodemailer");
// // let transporter = nodemailer.createTransport({
// //   host: "mail.gandi.net",
// //   port: "465",
// //   secure: "true",
// //   auth: {
// //     user: process.env.EMAIL,
// //     pass: process.env.EMAIL_PASS
// //   }
// // })

// // // GMAIL CONFIG
// // // const transporter = nodemailer.createTransport({
// // //   service: "gmail",
// // //   auth: {
// // //     user: process.env.EMAIL,
// // //     pass: process.env.EMAIL_PASS,
// // //   },
// // // });

// // // verify connection configuration
// // transporter.verify(function(error, success) {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log("Server is ready to take our messages");
// //   }
// // });

// // module.exports = transporter;
