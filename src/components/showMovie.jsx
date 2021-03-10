import React, { useState, useEffect } from 'react';
import { Modal } from 'reactstrap';
import "../styles/showMovie.css"

function ShowMovie(props) {
	const [movie, setMovie] = useState([])
	const [hidden, setHidden] = useState(false)
	const { movieId } = props

	const getMovie = (id) => {
		if (!id) return
		fetch(`https://moviebe.herokuapp.com/movies/${id}`)
			.then(res => res.json())
			.then((data) => {
				setMovie(data)
			})
	}

	const deleteMovieConfirmation = () => {
		setHidden(!hidden)
	}


	const deleteMovie = () => {
		fetch(`https://moviebe.herokuapp.com/delete_film/${movieId}`, {
			method: "Delete"
		})
			.then(response => response.json())
			.then(refreshPage)
			.catch(error => {
				console.error("Errorcito:", error);
			});
	}

	const refreshPage = () => {
		window.location.reload(false);
	}

	useEffect(() => {
		getMovie(movieId)
	}, [movieId])

	return (
		<div className="movie-box">
			<img className="movie-show-background" src={movie.img_url} alt={movie.film_name} />
			<div className="movie-description">
				<img className="photo-single" src={movie.img_url} alt={movie.film_name} />
				<h1 className="movie-title">{movie.film_name}</h1>
				<div className="description">
					<p>
						{movie.summary}
					</p>
				</div>
			</div>
			<div className="movie-summary">
				<ul key={movieId} >
					<h4>Director</h4>
					<li>
						{movie.director}
					</li>
					<h4>Genre</h4>
					<li>
						{movie.genre}
					</li>
					<h4>Release year</h4>
					<li>
						{movie.release_year}
					</li>
					<h4>Rating</h4>
					<li>
						{movie.rating}
					</li>
					<h4>Duration</h4>
					<li>
						{movie.film_runtime}
					</li>
					<h4>Meta Score</h4>
					<li>
						{movie.meta_score}
					</li>
				</ul>
			</div>
			<div className="delete">
				{movieId ?
					<button
						className="btn delete-button"
						onClick={deleteMovieConfirmation}>
						Delete movie
					</button> : null
				}
			</div>
			<Modal className="modal-box" isOpen={hidden} toggle={deleteMovieConfirmation} >
				<label className="title-box">Are you sure?</label>
				<button className="btn confirm-delete-button" onClick={deleteMovie}>Delete movie </button>
				<button className="btn confirm-delete-button" onClick={deleteMovieConfirmation}>Cancel </button>
			</Modal>
		</div>
	)
}

export default ShowMovie