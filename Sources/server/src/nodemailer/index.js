const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const smtpTransport = nodemailer.createTransport({
  service: process.env.service,
  auth: {
    user: process.env.userGmail,
    pass: process.env.passGmail
  }
});

const handlebarsOptions = {
  viewEngine: 'handlebars',
  viewPath: path.resolve('./src/nodemailer/templates'),
  extName: '.html'
};

smtpTransport.use('compile', hbs(handlebarsOptions));

module.exports = smtpTransport;
