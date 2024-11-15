const express = require('express');
const app = express();
const port = 4000;
//What CORS is, why it's important for communication between the frontend and backend when 
//running on different domains or ports, and how to enable CORS in a Node/Express application.
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//error handling to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//Serve static assets: Set up middleware to serve all static files (CSS, JS, etc.) from a public directory.
app.use(express.static('public'));

/*app.get('/', (req, res) => {
    res.send('Hello World');
});*/

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution for modeling 
//application data, allowing developers to enforce structure, handle data relationships, and perform CRUD operations (Create, 
//Read, Update, Delete) more easily. By defining models for each data type, Mongoose ensures data consistency and helps simplify database interactions.
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@clusterdatareplab7.f2idw.mongodb.net/MyFirstDB');

//a data model is a blueprint for defining the structure of data within a MongoDB collection. Models are created from schemas, which specify the fields, 
//data types, and constraints for each document in a collection, ensuring consistency in the way data is stored and accessed.

//Define schema and data model
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
  });
 
const movieModel = new mongoose.model('myMovies', movieSchema);

//Add a movies route that returns a list of movie objects in JSON format
app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({}); //The empty object {} as an argument means it fetches all documents in the movies collection.
    res.status(200).json( {movies} );
});

//method to retrieve a specific movie by its ID
app.get('/api/movie/:id', async (req, res) => {
    const movie = await movieModel.findById(req.params.id);
    res.send(movie);
  });

//method to add new movie records
app.post('/api/movies', async (req, res) =>{
    console.log("Movies: "+req.body.title);
    const { title, year, poster } = req.body;
    const newMovie = new movieModel({ title, year, poster });
    await newMovie.save();
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
/*
{
    "Title": "Avengers: Infinity War (server)",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
},
{
    "Title": "Captain America: Civil War (server)",
    "Year": "2016",
    "imdbID": "tt3498820",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
},
{
    "Title": "World War Z (server)",
    "Year": "2013",
    "imdbID": "tt0816711",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
}*/