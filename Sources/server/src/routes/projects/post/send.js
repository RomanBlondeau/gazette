const router = require('express').Router();
const smtpTransport = require('../../../nodemailer');

async function sendMail(to, subject, body) {
  await smtpTransport.sendMail({
    to,
    from: process.env.userGmail,
    html: body,
    subject
  });
}

router.post('/', async (req, res) => {
  const { to, subject, body } = req.body;

  if (!to || !subject || !body) {
    res.status(400).json({
      message: 'Invalid arguments. Recipient, subject and body required.'
    });
  } else {
    try {
      await sendMail(to, subject, body);
      res.status(200).json({ message: `Success.` });
    } catch (e) {
      res.status(400).json({ message: `Not a valid mail` });
    }
  }
});

module.exports = {
  router,
  required: ['to', 'subject', 'body']
};
