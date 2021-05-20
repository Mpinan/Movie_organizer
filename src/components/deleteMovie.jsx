import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import '../styles/deleteMovie.css';


function DeleteMovie(props) {
  const { movieId } = props
  const [hidden, setHidden] = useState(false)


  const deleteMovieConfirmation = () => {
    setHidden(!hidden)
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



  return (

    <div className="delete">
      {movieId ?
        <button
          data-testid="open-delete-modal-button"
          className="btn delete-button"
          onClick={deleteMovieConfirmation}>
          Delete movie
    </button> : null
      }
      <Modal data-testid="delete-modal-box" className="modal-box" isOpen={hidden} toggle={deleteMovieConfirmation} >
        <label className="title-box">Are you sure?</label>
        <button data-testid="modal-delete" className="btn confirm-delete-button" onClick={deleteMovie}>Delete movie </button>
        <button data-testid="modal-close" className="btn confirm-delete-button" onClick={deleteMovieConfirmation}>Cancel </button>
      </Modal>
    </div>

  )

}


export default DeleteMovie