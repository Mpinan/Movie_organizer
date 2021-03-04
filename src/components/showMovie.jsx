import React, { useState, useEffect } from 'react';
import "../styles/showMovie.css"

function ShowMovie(props) {
	const [movie, setMovie] = useState([])
	const { movieId } = props

	const getMovie = (id) => {
		if(!id) return 
		fetch(`https://moviebe.herokuapp.com/movies/${id}`)
			.then(res => res.json())
			.then((data) => {
				setMovie(data)
			})
	}


	const deleteMovie = () => {
		console.log(movieId)
		// fetch(`https://moviebe.herokuapp.com/delete_film/${id}`, {
		// 	method: "Delete"
		// })
		// 	.then(response => response.json())
		// 	.catch(error => {
		// 		console.error("Errorcito:", error);
		// 	});
	}



	useEffect(() => {
		getMovie(movieId)
	}, [movieId])

	return (
		<div className="movie-box">
			<h1 className="movie-title">{movie.film_name}</h1>
			<div className="photo-summary">
				<img className="photo-single" src={movie.img_url} alt={movie.film_name} />
				<div className="summary">
					<p>
						{movie.summary}
					</p>
				</div>
			</div>
			<button onClick={deleteMovie}>Delete movie</button>
		</div>
	)
}

export default ShowMovie