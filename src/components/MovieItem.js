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
                <Card.Body style={{textAlign: 'center'}}> {/*Centred the text within the card*/}
                    <Card.Title >{props.mymovie.title}</Card.Title>
                    <Card.Img src={props.mymovie.poster}></Card.Img>
                    <footer>{props.mymovie.year}</footer>
                </Card.Body>
            </Card>
        </div>
    );
}
export default MovieItem;