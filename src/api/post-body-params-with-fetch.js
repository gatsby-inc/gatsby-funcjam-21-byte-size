export default function handler(req, res) {
  const { data } = JSON.parse(req.body);

  console.log(data.emoji);

  res.status(200).json({ message: 'A ok!' });
}
