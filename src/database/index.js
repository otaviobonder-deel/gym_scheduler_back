const mongoose = require("mongoose");

const connection = {
  production: {
    url: `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_IP}/academianine`,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  },
  development: {
    url: `mongodb://localhost:32768/academianine`,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  },
};

mongoose.connect(
  connection[process.env.ENVIRONMENT].url,
  connection[process.env.ENVIRONMENT].options
);

module.exports = mongoose;
