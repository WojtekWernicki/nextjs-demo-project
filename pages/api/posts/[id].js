import nc from 'next-connect';
import cors from 'cors';
import { ObjectID } from 'mongodb';

import dbMiddleware from '../../../middleware/database';

const handler = nc();
handler.use(dbMiddleware);
handler.use(cors({
  origin: true,
  methods: ['GET'],
  preflightContinue: true,
  optionsSuccessStatus: 204
}));

handler.get(async (req, res) => {
  const { query: { id } } = req;

  const post = await req.db.collection('posts').findOne({ _id: ObjectID(id) });
  res.status(200).json(post);
});

export default handler;
