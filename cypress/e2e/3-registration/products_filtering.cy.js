/// <reference types="cypress" />

describe("Products filtering", () => {
  beforeEach(function () {
    const url = "http://localhost";
    const portRouter = "3000";
    const portApi = "3001";
    const email = "testuser@test.com";
    const password = "Testpassword123";

    cy.visit(`${url}:${portRouter}/login`);

    cy.get("[data-cy='email']").type(email);
    cy.get("[data-cy='password']").type(password);
    ``;

    cy.get("[data-cy='submit']").click();
  });

  it("Should filter products by hardware category", () => {
    cy.get("[data-cy='categoryFilter']").select("1");

    cy.get("[data-cy='product']").its("length").should("be.eq", 2);

    cy.get("[data-cy='detailsLink']").first().click();

    cy.get("[data-cy='productCategory']").contains("Hardware");
  });

  it("Should filter products by software category", () => {
    cy.get("[data-cy='categoryFilter']").select("2");

    cy.get("[data-cy='product']").its("length").should("be.eq", 9);

    cy.get("[data-cy='detailsLink']").first().click();

    cy.get("[data-cy='productCategory']").contains("Software");
  });

  it("Should filter products by accessories category", () => {
    cy.get("[data-cy='categoryFilter']").select("3");

    cy.get("[data-cy='product']").its("length").should("be.eq", 1);

    cy.get("[data-cy='detailsLink']").click();

    cy.get("[data-cy='productCategory']").contains("Accessories");
  });
});
