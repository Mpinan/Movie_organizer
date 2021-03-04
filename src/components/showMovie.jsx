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
			<h1 className="movie-title">{movie.film_name}</h1>
			<div className="photo-summary">
				<img className="photo-single" src={movie.img_url} alt={movie.film_name} />
				<div className="summary">
					<p>
						{movie.summary}
					</p>
				</div>
			</div>
			{movieId ? <button onClick={deleteMovie}>Delete movie</button> : null}
		</div>
	)
}

export default ShowMovie