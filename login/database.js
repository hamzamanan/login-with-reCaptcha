const mongoose = require("mongoose");
const config = require("./App");
const consola = require("consola");

const connectDatabase = () => {
  try {
    if (config.MONGODB_URI != undefined || "") {
      mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      mongoose.connection.on("connected", () => {
        consola.success("Mongodb connected");
      });
      mongoose.connection.on("error", (err) => {
        consola.fatal("can't connect to mongodb", err);
      });
      mongoose.connection.on("disconnected", () => {
        consola.error("mongodb disconnected");
      });
    } else {
      consola.error("No mongodb credentials given");
    }
  } catch (error) {
    throw error;
  }
};
module.exports = { connectDatabase };
