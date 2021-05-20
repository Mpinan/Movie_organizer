import * as React from "react";
import { mount } from "@cypress/react";
import MovieList from "./movieList";

describe("showMovie", () => {
  beforeEach(() => {
    mount(<MovieList />);
    cy.get("ul.list").children().first().click();
    cy.viewport(1400, 1380);
  });

  it("shows modal edit when click and closes it", () => {
    cy.get('[data-testid="movie-single-test"]').should("exist");
    cy.get('[data-testid="movie-single-test"]').should("contain", "Edit Movie");
    cy.get('[data-testid="movie-single-test"]').should(
      "contain",
      "Delete movie"
    );
    cy.get('[data-testid="movie-single-test"]').should("exist");
  });
});
