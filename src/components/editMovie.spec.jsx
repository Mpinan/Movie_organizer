import * as React from 'react'
import { mount } from "@cypress/react";
import MovieList from "./movieList";

describe("editMovie", () => {
  beforeEach(() => {
    mount(<MovieList />);
    cy.wait(1000).get("ul.list").children().last().click();
    cy.viewport(1400, 1380);
  });

  it("shows modal edit when click and closes it", () => {
    cy.get('[data-testid="open-edit-modal-button"]').should("exist");
    cy.get('[data-testid="open-edit-modal-button"]').click();
    cy.get('[data-testid="edit-modal-box"]').should("exist");
    cy.get('[data-testid="edit-modal-box"]')
      .should("contain", "Close")
      .click();
    cy.get('[data-testid="edit-modal-box"]').should("not.exist");
  });
});