import { useEffect } from "react";
import { Card } from "react-bootstrap";


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
                <Card.Header>{props.mymovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <Card.Img src={props.mymovie.Poster}></Card.Img>
                        <p>{props.mymovie.Year}</p>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}
export default MovieItem;