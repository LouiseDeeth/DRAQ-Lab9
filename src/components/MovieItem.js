import { useEffect } from "react";
import { Card } from "react-bootstrap";
//Link is a component from React Router that lets you navigate to a new route without refreshing the page. It is used to create in-app navigation.
import { Link } from 'react-router-dom';

//Added a movieItem.js file
const MovieItem = (props) => {

    useEffect(
        () => {
            console.log("Movie Item:", props.mymovie);
        }, [props.mymovie]// Only run this effect when the mymovie prop changes
    );
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{textAlign: 'center'}}> {/*Centred the text within the card*/}
                    <Card.Title >{props.mymovie.title}</Card.Title>
                    <Card.Img src={props.mymovie.poster}></Card.Img>
                    <footer>{props.mymovie.year}</footer>
                </Card.Body>
                <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link>
            </Card>
        </div>
    );//to={"/edit/" + props.mymovie._id}: This to attribute defines the path the Link component should navigate to when clicked.
}
export default MovieItem;