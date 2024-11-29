import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";  

//Added a read.js file
function Read() {
  const [movies, setMovies] = useState([]); //UseState is a built-in hook in React that allows you to add state variables to functional components

  //method to handle data reloading
  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies') //this line runs async
        .then((response) => {
          console.log(response.data);
          setMovies(response.data.movies);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
  };

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  //Some components need to stay connected to the network, some browser API, or a third-party library, 
  //while they are displayed on the page. These systems aren’t controlled by React, so they are called external.
  //To connect your component to some external system, call useEffect at the top level of your component:
  useEffect(() => {
    //reload after delete
    Reload();
  }, []);

  return (
    <div>
      <h3>Movie List</h3>
      <Movies myMovies={movies} ReloadData={Reload}/>
    </div>
  );
}

export default Read;