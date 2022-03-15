//import the axios library
import axios from 'axios';

//import the useState hook
import { useEffect, useState } from 'react';

//in order to recreate the behaviour of an anchor tag with the added benefit/logic of React Router, we can use the Link component
import { Link } from 'react-router-dom';


function MovieCatalogue() {
    // initialize state to keep track of the movie data which will be returned from the API
    const [movies, setMovies] = useState([]);

    // initialize a useEffect to run the side effect of fetching data from the movie API
    useEffect(() => {
        // make an asynchronous request to the TMDB API using axios
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                //API key: 10e67ccc6616e86dc1223d6ceee44aa2
                api_key: '10e67ccc6616e86dc1223d6ceee44aa2',
                include_adult: false
            }
        }).then((response) => {
            // save the returned data within state
            setMovies(response.data.results);
        })
    }, []);

    return (
        <section>
            <h2>Here are your movies</h2>
            {/* map through state and return a movie for each movie present in the returned API data */}

            <ul className="catalogue">
                {
                    movies.map((movie) => {
                        return (
                            //we want to make the posters clickable and navigate to a unique URL to represent each specific movie
                            <Link to={`/${movie.id}`} key={movie.id}>
                                <li>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`A poster for the movie ${movie.title}`} />
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default MovieCatalogue;