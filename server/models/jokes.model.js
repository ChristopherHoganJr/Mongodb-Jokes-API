// import mongoose to build model
const mongoose = require("mongoose");

// the schema - rules the entries must follow
const JokeSchema = new mongoose.Schema(
  {
    setup: String,
    punchline: String,
  },
  { timestamps: true }
);

// the model - what we use to make queries
const Joke = mongoose.model("joke", JokeSchema);

// export the model
module.exports = Joke;
