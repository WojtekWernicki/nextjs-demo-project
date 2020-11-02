import { MongoClient } from 'mongodb';
import nc from 'next-connect';

/* eslint-disable max-len */

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.zk5qr.mongodb.net?retryWrites=true&w=majority`;

/* eslint-enable */

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('demo');
  return next();
}

const middleware = nc();

middleware.use(database);

export default middleware;
