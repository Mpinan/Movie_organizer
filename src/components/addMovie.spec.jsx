import * as React from 'react'
import { mount } from '@cypress/react'
import AddMovie from './addMovie'

describe('addMovie', () => {
  beforeEach(() => {
    mount(<AddMovie />)
  })

  it('shows modal when click and closes it', () => {
    cy.get('[data-testid="modal-box"]').should('not.exist')
    cy.get('[data-testid="open-modal-button"]').should('exist').click()
    cy.get('[data-testid="modal-box"]').should('be.visible')
    cy.get('[data-testid="modal-close"]').should('exist').click()
  })

  it('closes model when adding a new movie', () => {
    let movie = {
      film_name: "movieTest",
      img_url: "https://upload.wikimedia.org/wikipedia/en/5/55/Test_%282014_film%29_poster.jpg",
      release_year: 2021,
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus, inventore perferendis cumque illo ut dolor explicabo! Veritatis optio magni suscipit hic, assumenda quaerat deleniti enim aspernatur, recusandae culpa fuga?",
      director: "testDirector",
      genre:"testGenre",
      film_runtime:100,
    }
    cy.get('[data-testid="open-modal-button"]').should('exist').click()
    cy.get('[data-testid="film-name"]').type(movie.film_name)
    cy.get('[data-testid="img-url"]').type(movie.img_url)
    cy.get('[data-testid="release-year"]').type(movie.release_year)
    cy.get('[data-testid="summary"]').type(movie.summary)
    cy.get('[data-testid="director"]').type(movie.director)
    cy.get('[data-testid="genre"]').type(movie.genre)
    cy.get('[data-testid="runtime"]').type(movie.film_runtime)
    cy.get('[data-testid="modal-box"]').should('be.visible')
  })
})