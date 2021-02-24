import { Component } from 'react'
import MovieCard from './MovieCard'
import AddMovieForm from './AddMovieForm'

import { fullMovies as theMovies } from './../fakeApi'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: theMovies
        }
    }

    addMovie(newMovie) {

        newMovie._id = new Date().getTime()

        const movies = [...this.state.movies]
        movies.push(newMovie)
        this.setState({ movies })
    }

    deleteMovie(movieId) {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id !== movieId)
        })
    }

    render() {

        return (
            <section>

                <h2>Películas dinámicas</h2>

                {this.state.movies?.map(elm => <MovieCard {...elm} removeMovie={() => this.deleteMovie(elm._id)} key={elm._id} />)}

                <AddMovieForm addMovie={movie => this.addMovie(movie)} />

                <hr />

            </section>
        )
    }
}


export default MoviesList