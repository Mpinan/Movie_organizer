import * as React from "react";
import { mount } from "@cypress/react";
import MovieList from "./movieList";

describe("deleteMovie", () => {
  beforeEach(() => {
    mount(<MovieList />);
    // mount(<DeleteMovie />)
    cy.viewport(1400, 1380);
  });

  it("shows a list of movies", () => {
    cy.get("ul.list")
      .children()
      .find("img")
      .filter("[src]")
      .filter(":visible")
      .should(($imgs) =>
        $imgs.map((i, /** @type {HTMLImageElement} */ img) =>
          expect(img.naturalWidth).to.be.greaterThan(0)
        )
      );
  });

  it("should show single movie box", () => {
    cy.get("ul.list").children().first().click();
  });

  it('shows modal when click and closes it', () => {
    cy.get('[data-testid="modal-box"]').should('not.exist')
    cy.get('[data-testid="open-modal-button"]').should('exist').click()
    cy.get('[data-testid="modal-box"]').should('be.visible')
    cy.get('[data-testid="modal-close"]').should('exist').click()
  })
});
