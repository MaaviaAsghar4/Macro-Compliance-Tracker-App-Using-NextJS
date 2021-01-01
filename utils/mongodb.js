import { MongoClient } from "mongodb";
import dotenv from "dotenv";
const { MONGO_DB_URI, MONGO_DB } = process.env;

dotenv.config();

if (!MONGO_DB_URI) {
  throw new Error("No Mongo Connection URI defined");
}

if (!MONGO_DB) {
  throw new Error("No Mongo Connection URI defined");
}

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGO_DB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(MONGO_DB),
      };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};
