import React, { useState, useEffect } from 'react';
import ShowMovie from "./showMovie"
import "../styles/moviesList.css"

function MovieList() {
	const [movies, setMovies] = useState([])
	const [movieId, setMovieId] = useState(1)

	const getMovies = () => {
		fetch("https://moviebe.herokuapp.com/movies")
			.then(res => res.json())
			.then((data) => {
				setMovies(data.movies)
			})
	}

	const getId = (id) => {
		setMovieId(id)
	}


	useEffect(() => {
		getMovies()
	}, [])


	return (
		<div className="movies-box">
			<div className="movies-list">
				{movies.map((movie, index) => {
					return (
						<ul key={index} >
							<li onClick={e => {
								e.preventDefault();
								getId(movie.id)
							}}>
								<img className="photo-list" src={movie.img_url} />
							</li>
						</ul>
					)
				})}
			</div>
			<div className="single-movie">
				<ShowMovie 
					movieId={movieId}
				/>
			</div>
		</div>
	)
}

export default MovieList