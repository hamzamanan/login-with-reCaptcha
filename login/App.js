require("dotenv").config();
let config = {};
config.PORT = process.env.PORT || 4000;
config.DB_USER = process.env.DB_USER || "hamzamanan";
config.DB_NAME = process.env.DB_NAME || "login";
config.DB_PASSWORD = process.env.DB_PASSWORD || "root123";
config.MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@cluster0-shard-00-00.dqc9k.mongodb.net:27017,cluster0-shard-00-01.dqc9k.mongodb.net:27017,cluster0-shard-00-02.dqc9k.mongodb.net:27017/${config.DB_NAME}?ssl=true&replicaSet=atlas-cacuys-shard-0&authSource=admin&retryWrites=true&w=majority`;
module.exports = config;
