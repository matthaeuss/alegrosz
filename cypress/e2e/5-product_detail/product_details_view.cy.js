// <reference types="cypress" />

describe("Product details view", function () {
  beforeEach(async function () {
    this.allFixtures = await cy.fixture("allFixtures");
  });

  it("Product should have image", function () {
    cy.visit(`/products/2`);
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="product-details-image"]').should("exist");
  });

  it("Product should have description", function () {
    cy.visit(`/products/2`);
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="product-details-description"]').should("exist");
  });

  it("Products should have opinion", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="product-details-opinion"]').should("exist");
  });

  it("Product should have price", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="product-details-price"]').should("exist");
  });

  it("Opinions should exist", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="product-details-opinions"]').should("be.visible");
  });

  it("Add opinion button should contain text add opinion", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get('[data-cy="product-details-button"]').then(([item]) => {
      expect(item.innerText).to.contain("Add opinion");
    });
  });

  it("Should have slider", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get("[data-cy='product-details-slider']").should("be.visible");
  });

  it("Home button should be visible", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get("[data-cy='navbar_home']").should("be.visible");
  });

  it("Home button should be clickable and redirects to all home view", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get("[data-cy='navbar_home']").click();
  });

  it("Logout button should be visible", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get("[data-cy='logout']").should("be.visible");
  });

  it("Logout button should be clickable", function () {
    cy.visit("/products/2");
    cy.login(this.allFixtures.user);
    cy.get("[data-cy='logout']").click();
  });
});
