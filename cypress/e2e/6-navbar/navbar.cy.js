/// <reference types="cypress" />

describe("Navbar check", function () {
  beforeEach(async function () {
    this.allFixtures = await cy.fixture("allFixtures");
  });

  it("Home link should be visible", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="navbar_home"]').should("exist");
  });

  it("Logout link should be visible", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="logout"]').should("exist");
  });

  it("Login link should be visible", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="submit"]').should("exist");
  });

  it("Button login should be enabled", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="submit"]').should("not.be.disabled");
  });

  it("Button Home should be enabled", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="submit"]').should("not.be.disabled");
  });

  it("Button Home should be enabled", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="logout"]').should("not.be.disabled");
  });
});
