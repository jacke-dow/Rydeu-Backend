const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

const url =
  "mongodb+srv://tushar:1793248650@cluster0.rspit.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
