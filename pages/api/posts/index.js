import nc from 'next-connect';
import cors from 'cors';

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
  const posts = await req.db.collection('posts').aggregate([
    { $sort: { created_at: -1, _id: -1 } }
  ]).toArray();
  res.status(200).json(posts);
});

export default handler;
