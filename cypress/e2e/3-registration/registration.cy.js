/// <reference types="cypress" />

describe("Describe Products visibility", () => {
  it("Should see products", async () => {
    await fetch("http://localhost:3000/users/1", {
      method: "DELETE",
    }).catch(() => {});

    cy.visit("http://localhost:3000/register");

    cy.get("[data-cy='email']").type("lel@lel.com");
    cy.get("[data-cy='password']").type("kekekekek");
    cy.get("[data-cy='repeatPassword']").type("lelelelele");

    cy.get("[data-cy='submit']").click();

    cy.url().should("include", "http://localhost:3000/login");

    cy.get("[data-cy='email']").type("lel@lel.com");
    cy.get("[data-cy='password']").type("kekekekek");

    cy.get("[data-cy='submit']").click();

    cy.get("[data-cy='product']").its("length").should("be.gt", 0);
  });
});
