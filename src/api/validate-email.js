import * as yup from 'yup';

export default async function handler(req, res) {
  const { email } = req.body;

  const schema = yup.object().shape({
    email: yup.string().required().email()
  });

  try {
    const validate = await schema.validate({ email: email });

    res.status(200).json({ message: '✅ Funkadelic!' });
  } catch (error) {
    res.status(500).json({ message: "🥴 You try'na fake me out?" });
  }
}
