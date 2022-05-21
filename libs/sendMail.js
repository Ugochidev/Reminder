const nodemailer = require("nodemailer");
require("dotenv").config();
const Response = require("../libs/response");
const Error = require("../libs/error");
const { EMAIL_USER, EMAIL_PASS, EMAIL_SERVER } = process.env;

exports.sendMail = async (msg, subject, receiver) => {
  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: '"Library Management"',
      subject: subject,
      html: msg,
      to: receiver,
    });
    console.log(info);
    return `Message sent', ${nodemailer.getTestMessageUrl(info)}`;
  } catch (err) {
    console.log(err);
    throw Error(err.message, 500);
  }
};
