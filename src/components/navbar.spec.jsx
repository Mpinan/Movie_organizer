import * as React from 'react'
import { mount } from '@cypress/react'
import Navbar from './navbar'

describe('Navbar', () => {
  it('renders the todo list', () => {
    mount(<Navbar />)
    cy.get('[data-testid=title]').should('exist')
  })

  it('contains input box', () => {
    const movieName = "Transformers"

    mount(<Navbar movieName={movieName} />)

    cy.get('[data-testid=movie-name]').should('value', movieName)
  })
})