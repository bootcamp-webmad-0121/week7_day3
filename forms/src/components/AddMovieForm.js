import { Component } from 'react'
import './AddMovieForm.css'

class AddMovieForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            rating: '',
            hasOscar: false
        }
    }


    // handleTitleChange(e) {
    //     this.setState({ title: e.target.value })
    // }

    // handleDirectorChange(e) {
    //     this.setState({ director: e.target.value })
    // }

    // handleRatingChange(e) {
    //     this.setState({ rating: e.target.value })
    // }

    // handleOscarChange(e) {
    //     this.setState({ hasOscar: e.target.checked })
    // }


    handleInputChange(e) {
        const { name, type } = e.target
        let inputValue = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({ [name]: inputValue })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addMovie(this.state)
    }

    render() {

        return (

            <section className="movie-form">

                <h2>Nueva película</h2>

                <form onSubmit={e => this.handleSubmit(e)}>

                    <label>
                        Título: <input type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <label>
                        Director: <input type="text" name="director" value={this.state.director} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <label>
                        Rating: <input type="text" name="rating" value={this.state.rating} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <label>
                        ¿Oscar?: <input type="checkbox" name="hasOscar" value={this.state.hasOscar} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <input type="submit" value="Crear película" />

                </form>

            </section>

        )
    }
}


export default AddMovieForm