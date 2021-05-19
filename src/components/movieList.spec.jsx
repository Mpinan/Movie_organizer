import * as React from 'react'
import { mount } from '@cypress/react'
import MovieList from "./movieList"


describe('deleteMovie', () => {
  beforeEach(() => {
    mount(<MovieList/>)
    cy.viewport(1400, 1380)
  });

  it("shows a list of movies", () => {
    cy.get('ul.list').children()
    .find("img")
    .filter('[src]')
    .filter(':visible')
    .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
  })

  it.only("should show single movie box", () => {
    cy.get('ul.list').children().first().click()
  })

  });