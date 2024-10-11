import MovieItem from "./movieItem";

//Added a movies.js file
const Movies = (props)=>{
    return props.myMovies.map(
        (movie) => {
            return <MovieItem mymovie={movie} key={movie.imdbID}/>
        }
    );
}

export default Movies;