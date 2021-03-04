import React, { useState, useEffect } from 'react';
import ShowMovie from "./showMovie"
import Navbar from "./navbar"
import "../styles/moviesList.css"

function MovieList() {
	const [movies, setMovies] = useState([])
	const [movieName, setMovieName] = useState("")
	const [movieId, setMovieId] = useState(null)

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
	}, [movieName])

	const handleFilterMovies = () => {
		let filteredFilms = []
		filteredFilms = filteringOptions()
		return filteredFilms
	}

	const filteringOptions = () => {
		return (
			movieName !== "" ?
				movies.filter(movie =>
					String(movie.release_year).includes(movieName)
					|| movie.film_name.toLowerCase().includes(movieName.toLowerCase())
					|| movie.director.toLowerCase().includes(movieName.toLowerCase())
					|| movie.genre.toLowerCase().includes(movieName.toLowerCase())
				) : movies
		)
	}



	return (
		<div className="whole-box">
			<div>
				<Navbar
					movieName={movieName}
					setMovieName={setMovieName}
				/>
			</div>
			<div className="movies-box">
				<div className="movies-list">
					{handleFilterMovies().map((movie, index) => {
						return (
							<ul key={index} >
								<li onClick={e => {
									e.preventDefault();
									getId(movie.id)
								}}>
									<img className="photo-list" src={movie.img_url} alt={movie.film_name} />
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
		</div>
	)
}

export default MovieList