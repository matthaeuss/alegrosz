// <reference types="cypress" />

describe("Product details view", function () {
  beforeEach(async function () {
    this.allFixtures = await cy.fixture("allFixtures");
    cy.visit(
      `${this.allFixtures.configuration.url}:${this.allFixtures.configuration.portRouter}/products/2`
    );

    await cy.get("[data-cy='email']").type(this.allFixtures.user.email);
    await cy.get("[data-cy='password']").type(this.allFixtures.user.password);

    await cy.get("[data-cy='submit']").click();
  });

  it.only("Product should have image", function () {
    cy.get('[data-cy="product-details-image"]').should("be.visible");
  });
});
