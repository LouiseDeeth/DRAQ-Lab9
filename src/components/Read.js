import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";  

//Added a read.js file
function Read() {
  const [movies, setMovies] = useState([]); //UseState is a built-in hook in React that allows you to add state variables to functional components

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  //Some components need to stay connected to the network, some browser API, or a third-party library, 
  //while they are displayed on the page. These systems aren’t controlled by React, so they are called external.
  //To connect your component to some external system, call useEffect at the top level of your component:
  useEffect(() => {
    //Axios is a Promise-based HTTP client used to make requests to a server. It allows you to send 
    //asynchronous HTTP requests (such as GET or POST requests) to REST endpoints and handle responses.
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872') //this line runs async
      //a response comes back
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Hello from the Read component</h3>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;