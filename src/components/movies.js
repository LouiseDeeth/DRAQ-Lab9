import MovieItem from "./movieItem";

//Added a movies.js file
const Movies = (props)=>{
    return props.myMovies.map(
        (movie) => {
            return <MovieItem mymovie={movie} key={movie._id}/>
        }
    );
}

export default Movies;