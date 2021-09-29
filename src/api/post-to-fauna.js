import faunadb from 'faunadb';

export default async function handler(req, res) {
  const { userReaction } = req.body;

  const q = faunadb.query;

  const client = new faunadb.Client({ secret: process.env.FAUNA_KEY });

  try {
    await client.query(
      q.Create(q.Collection('reactions'), {
        data: { reaction: userReaction }
      })
    );

    res.status(200).json({ message: '🥳 Reaction submited!' });
  } catch (error) {
    res.status(500).json({ message: '🤯 What A Nightmare!' });
  }
}
