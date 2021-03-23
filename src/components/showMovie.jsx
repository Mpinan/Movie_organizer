import React, { useState, useEffect } from 'react';
import "../styles/showMovie.css";
import EditMovie from './editMovie';
import DeleteMovie from "./deleteMovie";


function ShowMovie(props) {
	const [movie, setMovie] = useState([])
	const { movieId } = props



	const getMovie = (id) => {
		if (!id) return
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
			<img className="movie-show-background" src={movie.img_url} alt={movie.film_name} />
			<div className="single-movie-container">
				<div className="movie-description">
					<div className="first-half-container">
						<div className="photo-single-container">
							<img className="photo-single" src={movie.img_url} alt={movie.film_name} />
						</div>
						<div className="photo-single-body">
							<h1 className="movie-title">{movie.film_name}</h1>
							<div className="description">
								<p>
									{movie.summary}
								</p>
							</div>

							<div className="movie-summary">
								<div className="column-left">
									<ul>
										<h4>Director</h4>
										<li>
											{movie.director}
										</li>
										<h4>Genre</h4>
										<li>
											{movie.genre}
										</li>
									</ul>
								</div>
								<div className="column-right">
									<ul key={movieId} >
										<h4>Release year</h4>
										<li>
											{movie.release_year}
										</li>
										{/* <h4>Rating</h4>
										<li>
											{movie.rating}
										</li> */}
										<h4>Duration</h4>
										<li>
											{movie.film_runtime}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="button-group">
					<EditMovie
						movie={movie}
						movieId={movieId} />
					<DeleteMovie
						movieId={movieId} />
				</div>
			</div>
		</div>
	)
}

export default ShowMovie