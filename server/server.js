// importing the express library
const express = require("express");
// initializing the express library
const app = express();
// declaring a port number
const PORT = 8000;
// naming the database
const DB = "jokeapi";

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connected to the database using mongoose
require("./config/mongoose.config")(DB);

// import routes
require("./routes/jokes.route")(app);

// start the server
app.listen(PORT, () => console.log(`Server on ${PORT}`));
