import React, { useState, useEffect } from 'react';
import "../styles/showMovie.css"

function ShowMovie(props) {
	const [movie, setMovie] = useState([])
	const { movieId } = props

	const getMovie = (id) => {
		fetch(`https://moviebe.herokuapp.com/movies/${id}`)
			.then(res => res.json())
			.then((data) => {
				setMovie(data)
			})
	}

	useEffect(() => {
		getMovie(movieId)
	}, [movieId])

	return (
		<div className="movie-box">
			<h1 className="movie-title">{movie.film_name}</h1>
			<div className="photo-summary">
				<img className="photo-single" src={movie.img_url} />
				<div className="summary">
					<p>
						{movie.summary}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ShowMovie