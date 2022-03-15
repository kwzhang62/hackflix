// import axios so that we can make some async requests
import axios from "axios";

import { useEffect, useState } from "react";

//we want to use the movie id which is currently in the URL (at which this component renders) within our axios call ///in order to grab information from a URL (when using Router) we can use the useParams Hook
import { useParams } from 'react-router-dom';

function MovieInfo() {
    //call the useParams Hook and extract the movieId property from within the params object it returns
    const { movieId: movie_id } = useParams();

    // use axios to make a request to the movie id endpoint
    const [details, setDetails] = useState({});

    // define a side effect which will fetch data about the movie after the component has first rendered
    useEffect(() => {
        // use axios to make a request to the movie id endpoint
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: '10e67ccc6616e86dc1223d6ceee44aa2'
            }
        }).then((response) => {
            setDetails(response.data);
        })
    }, [])

    
    return (
        <section className="poster">
            <div className="description">
                {/* render the movie tagline, summary, and title */}
                <h3>{details.tagline}</h3>

                <h2>{details.title}</h2>

                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
                {/* render the movie poster */}
                <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={`a movie poster for ${details.original_title}`} />
            </div>
        </section>
    )
}

export default MovieInfo;