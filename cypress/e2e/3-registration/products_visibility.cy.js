/// <reference types="cypress" />

describe("Describe products visibility", function () {
  beforeEach(async function () {
    this.allFixtures = await cy.fixture("allFixtures");
  });

  it("Should see products", function () {
    cy.task("removeUser", { id: "1" });

    cy.visit("/register");
    cy.register(this.allFixtures.user);
    cy.task("refreshToken", this.allFixtures.user);

    cy.url().should("include", "/login");
    cy.login(this.allFixtures.user);

    cy.get("[data-cy='product']").its("length").should("be.eq", 12);
  });
});
