/// <reference types="cypress" />

describe("All products view", function () {
  beforeEach(async function () {
    this.allFixtures = await cy.fixture("allFixtures");
  });

  it("Should display all products", function () {
    cy.visit("/");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="all_products"]').should("exist");
  });

  it("Search input should be visible on the page", function () {
    cy.visit("/");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="searchInput"]').should("be.visible");
  });

  it.only("Product card should have an image", function () {
    cy.visit(`/`);
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="products-card-image"]').should("exist");
  });
});
