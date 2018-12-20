const router = require('express').Router();
const smtpTransport = require('../../../nodemailer');
const { emailGenerator } = require('../../../emailGenerator/emailGenerator');

async function sendMail(to, subject, htmlBody) {
  await smtpTransport.sendMail({
    to,
    from: process.env.userGmail,
    html: htmlBody,
    subject
  });
}

router.post('/', async (req, res) => {
  const { to, subject, body } = req.body;

  try {
    const htmlBody = emailGenerator(body);
    await sendMail(to, subject, htmlBody);
    res.status(200).json({ message: `Success` });
  } catch (e) {
    console.error('[Error trying to send mail]: ', e);
    res.status(400).json({ message: `please check email adresses and try again.` });
  }
});

module.exports = {
  router,
  required: ['to', 'subject', 'body']
};
