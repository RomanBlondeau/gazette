const router = require('express').Router();
const crypto = require('crypto');
const smtpTransport = require('../../../nodemailer');

const User = require('../../../database/models/users')();

router.post('/', async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ message: 'Not found.' });
    } else {
      const token = crypto.randomBytes(20).toString('hex');

      user.updateAttributes({ reset_password: token });
      const result = await smtpTransport.sendMail({
        to: user.email,
        from: process.env.userGmail,
        template: 'forgot-password-email',
        subject: 'Reset password token from Gazette',
        context: {
          name: user.username,
          token
        }
      });
      if (result.rejected.length > 0) {
        next('Not a valid mail');
        return;
      }
      res.status(200).json({ message: `Success.` });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = { router, required: ['email'] };
