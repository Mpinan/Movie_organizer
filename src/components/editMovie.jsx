import React, { useState } from 'react';
import { Modal, ModalFooter } from 'reactstrap';
import '../styles/editMovie.css';

const helpers = require("./helpers");

function EditMovie(props) {
  const { movie, movieId } = props
  console.log(movie)
  const [hidden, setHidden] = useState(false)

  const [movieToUpdate, setMovieToUpdate] = useState({
    film_name: "",
    img_url: "",
    release_year: 0,
    summary: "",
    director: "",
    genre: "",
    film_runtime: 0
  })

  const openForm = () => {
    setHidden(!hidden)
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    setMovieToUpdate(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  

  const edit_movie = (movie) => {
    console.log(movieId)
    fetch(`https://moviebe.herokuapp.com/edit_film/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json())
      .then(refreshPage)
      .catch(error => {
        console.error("Errorcito:", error);
      })
      .catch(err => console.log(err));
  }

  const handleUpdateMovie = () => {
    const errors = helpers.validate(movieToUpdate)
    if (errors) return "There is some error";
    edit_movie(movieToUpdate)
  }


  return (
    <div className="update">
      <button className="btn update-button" onClick={openForm}>
          Edit Movie
      </button>

      <Modal isOpen={hidden} toggle={openForm}>
        <label className="title-box" >Film name</label>
        <input
          type="text"
          placeholder="Enter film name"
          value={movieToUpdate.film_name}
          name="film_name"
          onChange={handleChange}
          required />
        <label className="title-box">Image URL</label>
        <input
          type="text"
          placeholder="Enter Image"
          value={movieToUpdate.img_url}
          name="img_url"
          onChange={handleChange}
          required />
        <label className="title-box">Release Year</label>
        <input
          type="text"
          placeholder="Enter release year"
          value={movieToUpdate.release_year}
          name="release_year"
          onChange={handleChange}
          required />
        <label className="title-box">Summary</label>
        <textarea
          type="textarea"
          placeholder="Enter Summary"
          value={movieToUpdate.summary}
          name="summary"
          onChange={handleChange}
          required />
        <label className="title-box">Director</label>
        <input
          type="text"
          placeholder="Enter Director"
          value={movieToUpdate.director}
          name="director"
          onChange={handleChange}
          required />
        <label className="title-box">Genre</label>
        <input
          type="text"
          placeholder="Enter Genre"
          value={movieToUpdate.genre}
          name="genre"
          onChange={handleChange}
          required />
        <label className="title-box">Film runtime</label>
        <input
          type="text"
          placeholder="Enter film duration in min"
          value={movieToUpdate.film_runtime}
          name="film_runtime"
          onChange={handleChange}
          required />
        <ModalFooter className="button-box">
          <button className="btn modal-button" type="submit" onClick={handleUpdateMovie}>Update Movie</button>
          <button className="btn modal-button" type="button" onClick={openForm}>Close</button>
        </ModalFooter>
      </Modal>
    </div >
  )

}


export default EditMovie