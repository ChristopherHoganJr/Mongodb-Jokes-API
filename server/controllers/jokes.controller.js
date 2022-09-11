// import the model
const Joke = require("../models/jokes.model");

// CRUD
// find all jokes
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allTheJokes) => {
      res.json(allTheJokes);
    })
    .catch((err) =>
      res.json({ message: "something went wrong", serverError: err })
    );
};

// find a joke
module.exports.oneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) =>
      res.json({
        message: "was not able to grab the single joke",
        serverError: err,
      })
    );
};

// create a joke
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newCreatedJoke) => res.json({ joke: newCreatedJoke }))
    .catch((err) =>
      res.json({ message: "the joke was not created", serverError: err })
    );
};

// update a joke
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) =>
      res.json({
        message: "was not able to update the joke",
        serverError: err,
      })
    );
};

// delete a joke
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) =>
      res.json({
        message: "unable to delete joke",
        serverError: err,
      })
    );
};
