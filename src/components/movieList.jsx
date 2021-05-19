import React, { useState, useEffect } from 'react';
import ShowMovie from "./showMovie"
import Navbar from "./navbar"
import "../styles/moviesList.css"

function MovieList() {
	const [movies, setMovies] = useState([])
	const [movieName, setMovieName] = useState("")
	const [movieId, setMovieId] = useState(null)
	const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

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


	const handleLetter = (letter) => {
		let moviesArr = [...movies]

		let sortedMovies = moviesArr.sort((a, b) => {
			if ( a.film_name > letter ){
				return -1;
			}
			if ( b.film_name < letter ){
				return 1;
			}
			return 0;
		})
		setMovies(sortedMovies)
	}


	const handleResponsiveHeight = () => {
		if (!movieId) {
			return "100%"
		}
	}

	return (
		<div className="whole-box">
			<Navbar
				movieName={movieName}
				setMovieName={setMovieName}
			/>
			<div className="abc-box">
				{abc.map((letter, index) => {
					return (
						<div key={index} className="abc-bar-whole">
							<ul className="abc-bar">
								<li onClick={e => {
									e.preventDefault();
									handleLetter(letter)
								}}>
									<h1>{letter}</h1>
								</li>
							</ul>
						</div>
					)
				})}
			</div>
			<div data-testid="movie-box-test" className="movies-box">
				<div className="movies-list">
					{handleFilterMovies().map((movie, index) => {
						return (
							<ul className="list" key={index} >
								<li onClick={e => {
									e.preventDefault();
									getId(movie.id)
								}}>
									<img data-testid="movie-single-test" className="photo-list" src={movie.img_url} alt={movie.film_name} />
								</li>
							</ul>
						)
					})}
				</div>
				<div className="movies-list-responsive" style={{ "height": handleResponsiveHeight() }}>
					{handleFilterMovies().map((movie, index) => {
						return (
							<ul key={index} >
								<li onClick={e => {
									e.preventDefault();
									getId(movie.id)
								}}>
									<div className="list-container">
										<div className="photo-responsive">
											<img className="photo-list-responsive" src={movie.img_url} alt={movie.film_name} />
										</div>
										<div className="title-description">
											<h3 className="movie-title-responsive">{movie.film_name}</h3>
											<div className="movie-paragraph">
												<p>
													{movie.summary}
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						)
					})}
				</div>
				{movieId ?
					<div className="single-movie">
						<ShowMovie
							movieId={movieId}
						/>
					</div>
					: null}
			</div>
		</div>
	)
}

export default MovieList