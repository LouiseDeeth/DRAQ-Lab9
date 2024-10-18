import { useState } from "react";

//Added a read.js file
const Create = () => {

  //UseState is a built-in hook in React that allows you to add state variables to functional components
  const [title, setTitle] = useState(''); //set movie title
  const [year, setYear] = useState(''); //set movie year
  const [poster, setPoster] = useState(''); //set movie Poster

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, year, poster); //log info inputted to console
  }
  return (
    <div>
      <h3>Hello from create component!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Add Movie Poster URL: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        <div>
          <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
}
export default Create;