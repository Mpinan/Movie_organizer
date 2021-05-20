import * as React from 'react'
import { mount } from '@cypress/react'
import MovieList from "./movieList";

describe("DeleteMovie", () => {
  beforeEach(() => {
    mount(<MovieList />);
    cy.wait(1000).get("ul.list").children().last().click();
    cy.viewport(1400, 1380);
  });

  it("shows modal delete when click and closes it", () => {
    cy.get('[data-testid="open-delete-modal-button"]').should("exist");
    cy.get('[data-testid="open-delete-modal-button"]').click();
    cy.get('[data-testid="delete-modal-box"]').should("exist");
    cy.get('[data-testid="delete-modal-box"]')
      .should("contain", "Delete movie")
      .click();
    cy.get('[data-testid="delete-modal-box"]').should("not.exist");
  });
});