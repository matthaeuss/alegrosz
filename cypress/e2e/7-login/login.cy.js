/// <reference types="cypress" />

describe("Navbar check", function () {
  beforeEach(async function () {
    this.allFixtures = await cy.fixture("allFixtures");
  });

  it("Email Address field to type should be visible", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="email"]').should("exist");
  });

  it("Password field to type should be visible", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="password"]').should("exist");
  });

  it("Button login should be enabled", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="submit"]').should("exist");
  });

  it("Button login should be enabled", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="submit"]').should("not.be.disabled");
  });

  it("There should be an option to type sth in email field", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="email"]').type(this.allFixtures.user.email);
  });

  it("There should be an option to type sth in password field", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="password"]').type(this.allFixtures.user.password);
  });

  it("Remember thick should be enabled", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="remember"]').should("not.be.disabled");
  });

  it("Remember thick should be clickable", function () {
    cy.visit("/products/2");
    cy.get('[data-cy="remember"]')
      .click()
      .its("#value")
      .should("equal", undefined);
  });

  it("Button Login should redirect to all products view", function () {
    cy.visit("/");
    cy.login(this.allFixtures.user);
    cy.get("#btnLogin").click();
  });
});
