import { mount } from '@cypress/react' // or @cypress/vue
import Navbar from '../../../src/components/navbar'

describe('Navbar', () => {
  it('renders the todo list', () => {
    mount(<Navbar />)
    cy.get('[data-testid=title]').should('exist')
  })

  it('contains the correct number of todos', () => {
    const movieName = "Transformers"

    mount(<Navbar movieName={movieName} />)

    cy.get('[data-testid=movieName]').should('contain', movieName)
  })
})