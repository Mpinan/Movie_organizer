import React, { useState } from 'react';
import { Modal, ModalFooter } from 'reactstrap';
import '../styles/navbar.css';
import "../styles/addMovieModal.css"
const helpers = require("./helpers");

function AddMovie() {

  const [hidden, setHidden] = useState(false)
  const [movieToAdd, setMovieToAdd] = useState({
    film_name: "",
    img_url: "",
    release_year: 0,
    summary: "",
    director: "",
    genre: "",
    film_runtime: 0
  })


  const addNewMovie = (movie) => {
    fetch("https://moviebe.herokuapp.com/submit_film", {
      method: "POST",
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


  const refreshPage = () => {
    window.location.reload(false);
  }


  const openForm = () => {
    setHidden(!hidden)
  }

  const handleAddNewMovie = () => {
    const errors = helpers.validate(movieToAdd)
    if (errors) return "There is some error";
    addNewMovie(movieToAdd)
  }
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    setMovieToAdd(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="add-movie-form">
      <button data-testid="open-modal-button" className="btn add-button" onClick={openForm}>
          Add Movie
      </button>

      <Modal data-testid="modal-box" isOpen={hidden} toggle={openForm}>
        <label className="title-box" >Film name</label>
        <input
        data-testid="film-name"
          type="text"
          placeholder="Enter film name"
          value={movieToAdd.film_name}
          name="film_name"
          onChange={handleChange}
          required />
        <label className="title-box">Image URL</label>
        <input
        data-testid="img-url"
          type="text"
          placeholder="Enter img url"
          value={movieToAdd.img_url}
          name="img_url"
          onChange={handleChange}
          required />
        <label className="title-box">Release Year</label>
        <input
        data-testid="release-year"
          type="text"
          placeholder="Enter release year"
          value={movieToAdd.release_year}
          name="release_year"
          onChange={handleChange}
          required />
        <label className="title-box">Summary</label>
        <textarea
        data-testid="summary"
          type="textarea"
          placeholder="Enter Summary"
          value={movieToAdd.summary}
          name="summary"
          onChange={handleChange}
          required />
        <label className="title-box">Director</label>
        <input
        data-testid="director"
          type="text"
          placeholder="Enter Director"
          value={movieToAdd.director}
          name="director"
          onChange={handleChange}
          required />
        <label className="title-box">Genre</label>
        <input
        data-testid="genre"
          type="text"
          placeholder="Enter Genre"
          value={movieToAdd.genre}
          name="genre"
          onChange={handleChange}
          required />
        <label className="title-box">Film runtime</label>
        <input
        data-testid="runtime"
          type="text"
          placeholder="Enter film duration in min"
          value={movieToAdd.film_runtime}
          name="film_runtime"
          onChange={handleChange}
          required />
        <ModalFooter>
          <button data-testid="modal-add-movie"className="btn modal-button" type="submit" onClick={handleAddNewMovie}>Add Movie</button>
          <button data-testid="modal-close"className="btn modal-button" type="button" onClick={openForm}>Close</button>
        </ModalFooter>
      </Modal>
    </div >
  )
}

export default AddMovie