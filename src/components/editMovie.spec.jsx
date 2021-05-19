import * as React from 'react'
import { mount } from '@cypress/react'
import DeleteMovie from "./deleteMovie"
import MovieList from "./movieList"
import ShowMovie from "./showMovie"

describe('deleteMovie', () => {
  beforeEach(() => {
    mount(<ShowMovie/>)
    mount(<MovieList/>)
    mount(<DeleteMovie />)
  })

  it("shows a list of movies", () => {
    cy.get('data-testid="movie-list-test"')
  })

  xit('shows modal when click and closes it', () => {
    cy.get('[data-testid="modal-box"]').should('not.exist')
    cy.get('[data-testid="open-modal-button"]').should('exist').click()
    cy.get('[data-testid="modal-box"]').should('be.visible')
    cy.get('[data-testid="modal-close"]').should('exist').click()
  })

  xit('closes model when adding a new movie', () => {
    cy.get('[data-testid="open-modal-button"]').should('exist').click()
    cy.get('[data-testid="film-name"]').clear()
    cy.get('[data-testid="img-url"]').clear()
    cy.get('[data-testid="release-year"]').clear()
    cy.get('[data-testid="summary"]').clear()
    cy.get('[data-testid="director"]').clear()
    cy.get('[data-testid="genre"]').clear()
    cy.get('[data-testid="runtime"]').clear()
    cy.get('[data-testid="modal-box"]').should('be.visible')
    cy.get('[data-testid="modal-add-movie"]').should('exist').click()
  })
})