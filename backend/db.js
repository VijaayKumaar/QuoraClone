const mongoose = require("mongoose");

const url =
  
  "mongodb://vijay:vijay@ac-l76yfko-shard-00-00.3yxwuyy.mongodb.net:27017,ac-l76yfko-shard-00-01.3yxwuyy.mongodb.net:27017,ac-l76yfko-shard-00-02.3yxwuyy.mongodb.net:27017/?ssl=true&replicaSet=atlas-xlgbrd-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
