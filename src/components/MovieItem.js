import { useEffect } from "react";
import { Card } from "react-bootstrap";
//Link is a component from React Router that lets you navigate to a new route without refreshing the page. It is used to create in-app navigation.
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

//Added a movieItem.js file
const MovieItem = (props) => {
    useEffect(
        () => {
            console.log("Movie Item:", props.mymovie);
        }, [props.myMovie]);// Only run this effect when the mymovie prop changes

    //Delete button for each movie
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
            .then((res) => {
                props.Reload(); // Refresh the movie list after deletion
            })
            .catch((error) => {
                console.log("Error deleting movie:", error);
            });
    };

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{textAlign: 'center'}}> {/*Centred the text within the card*/}
                    <Card.Title >{props.myMovie.title}</Card.Title>
                    <Card.Img src={props.myMovie.poster}></Card.Img>
                    <footer>{props.myMovie.year}</footer>
                </Card.Body>
                <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );//to={"/edit/" + props.myMovie._id}: This to attribute defines the path the Link component should navigate to when clicked.
}

export default MovieItem;