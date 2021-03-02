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
		<div>
			<ul>
				<li>
					<div className="movie-photo">
						<img className="photo-single" src={movie.img_url} />
					</div>
				</li>
			</ul>
		</div>
	)
}

export default ShowMovie