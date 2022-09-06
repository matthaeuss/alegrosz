/// <reference types="cypress" />

describe("Describe products visibility", () => {
  it("Should see products", async () => {
    const url = "http://localhost";
    const portRouter = "3000";
    const portApi = "3001";
    const email = "testuser@test.com";
    const password = "Testpassword123";

    await fetch(`${url}:${portApi}/users/1`, {
      method: "DELETE",
    }).catch(() => {});

    cy.visit(`${url}:${portRouter}/register`);

    cy.get("[data-cy='email']").type(email);
    cy.get("[data-cy='password']").type(password);
    cy.get("[data-cy='repeatPassword']").type(password);

    cy.get("[data-cy='submit']").click();

    cy.url().should("include", `${url}:${portRouter}/login`);

    cy.get("[data-cy='email']").type(email);
    cy.get("[data-cy='password']").type(password);

    cy.get("[data-cy='submit']").click();

    cy.get("[data-cy='product']").its("length").should("be.eq", 6);
  });
});
