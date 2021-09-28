const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { email, message } = req.body;

  const msg = {
    to: email,
    from: process.env.SENDGRID_AUTHORIZED_EMAIL,
    subject: `Message from | ${email}`,
    html: `
    <h2>${email} says: 👇</h2>
    <strong>"${message}"</strong>
    `
  };

  try {
    await sgMail.send(msg);

    res.status(200).json({ message: '🕺 Message Sent!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: '🤯 What A Nightmare!' });
  }
}
