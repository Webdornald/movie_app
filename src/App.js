import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false});
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return <section class="container">
            {isLoading ? (
                <div class="loader">
                    <span class="loader__text">Loading...</span>
                </div>
            ) : (
                <div class="movies">
                    {movies.map(movie => (
                        <Movie key={movie.id}
                               poster={movie.medium_cover_image}
                               summary={movie.summary}
                               year={movie.year}
                               id={movie.id}
                               title={movie.title}
                        />
                    ))}
                </div>
            )};
        </section>
    }
}

export default App;