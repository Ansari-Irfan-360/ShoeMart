const mongoose = require("mongoose");

const connectDatabase = async (url) => {
  await mongoose
    .connect(url)
    .then((data) => {
      console.log(`Mongodb connected with server`);
    });
};

module.exports = connectDatabase;
