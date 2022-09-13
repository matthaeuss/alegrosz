/// <reference types="cypress" />

describe("Products search", () => {
  beforeEach(() => {
    const url = "http://localhost";
    const portRouter = "3000";
    const email = "testuser@test.com";
    const password = "Testpassword123";

    cy.visit(`${url}:${portRouter}`);

    cy.get("[data-cy='email']").type(email);
    cy.get("[data-cy='password']").type(password);

    cy.get("[data-cy='submit']").click();

    cy.get('[data-cy="searchInput"]').as("searchInput");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("AMD");

    cy.get("[data-cy='product']").get(".card__hdl").contains("AMD Ryzen 9700");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("GTX");

    cy.get("[data-cy='product']").get(".card__hdl").contains("GTX 1060 9700");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("intel");

    cy.get("[data-cy='product']").get(".card__hdl").contains("Intel core i3");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("intel");

    cy.get("[data-cy='product']").get(".card__hdl").contains("Intel core i5");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("intel");

    cy.get("[data-cy='product']").get(".card__hdl").contains("Intel core i7");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("intel");

    cy.get("[data-cy='product']").get(".card__hdl").contains("Intel core i9");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("intel");

    cy.get("[data-cy='product']").get(".card__hdl").contains("Intel core i11");
  });

  it("Finds exact products", () => {
    cy.get("@searchInput").type("sony");

    cy.get("[data-cy='product']").get(".card__hdl").contains("Sony WH-1000XM4");
  });

  it("Does not find products", () => {
    cy.get("@searchInput").type("Windows");

    cy.get("[data-cy='product']")
      .get(".card__hdl")
      .then((headers) => {
        [...headers].forEach((header) => {
          expect(header.innerText).to.not.contains("AMD");
        });
      });
  });

  it("Does not find products", () => {
    cy.get("@searchInput").type("AMD");

    cy.get("[data-cy='product']")
      .get(".card__hdl")
      .then((headers) => {
        [...headers].forEach((header) => {
          expect(header.innerText).to.not.contains("Windows");
        });
      });
  });

  it("Does not find products", () => {
    cy.get("@searchInput").type("AMD");

    cy.get("[data-cy='product']")
      .get(".card__hdl")
      .then((headers) => {
        [...headers].forEach((header) => {
          expect(header.innerText).to.not.contains("Intel");
        });
      });
  });

  it("Does not find products", () => {
    cy.get("@searchInput").type("Intel");

    cy.get("[data-cy='product']")
      .get(".card__hdl")
      .then((headers) => {
        [...headers].forEach((header) => {
          expect(header.innerText).to.not.contains("Windows");
        });
      });
  });

  it("Does not find products", () => {
    cy.get("@searchInput").type("Windows");

    cy.get("[data-cy='product']")
      .get(".card__hdl")
      .then((headers) => {
        [...headers].forEach((header) => {
          expect(header.innerText).to.not.contains("Intel");
        });
      });
  });

  it("Does not find products", () => {
    cy.get("@searchInput").type("Sony");

    cy.get("[data-cy='product']")
      .get(".card__hdl")
      .then((headers) => {
        [...headers].forEach((header) => {
          expect(header.innerText).to.not.contains("Windows");
        });
      });
  });

  it("Autocomplete should be visible", () => {
    cy.get("@searchInput").type("Windows");

    cy.get("[data-cy='autocomplete']").should("exist");
  });

  it("Autocomplete should be visible", () => {
    cy.get("@searchInput").type("Sony");

    cy.get("[data-cy='autocomplete']").should("exist");
  });

  it("Autocomplete should be visible", () => {
    cy.get("@searchInput").type("AMD");

    cy.get("[data-cy='autocomplete']").should("exist");
  });

  it("Autocomplete should be visible", () => {
    cy.get("@searchInput").type("GTX");

    cy.get("[data-cy='autocomplete']").should("exist");
  });

  it("Autocomplete should not be visible", () => {
    cy.get("[data-cy='autocomplete']").should("not.exist");
  });

  it("Autocomplete results should contain phrase from input", function () {
    cy.get("@searchInput").type("Windows");

    cy.get("[data-cy=autocomplete-item] .autocomplete__highlight").then(
      (items) => {
        [...items].forEach((item) => {
          expect(item.innerText).to.contains("Windows");
        });
      }
    );
  });
  it("Autocomplete should be in-case sensitive", function () {
    cy.get("@searchInput").type("WiN");

    cy.get('[data-cy="autocomplete-item"] .autocomplete__highlight').then(
      (items) => {
        [...items].forEach((item) => {
          expect(item.innerText).to.contain("WiN");
        });
      }
    );
  });

  it("Click on the tooltip completes the search input", function () {
    cy.get("@searchInput").type("Win");

    cy.get('[data-cy="autocomplete-item"]').first().click();

    cy.get("@searchInput").should("have.value", "Windows XP");
  });

  it("Click on the tooltip completes the search input", function () {
    cy.get("@searchInput").type("intel");

    cy.get('[data-cy="autocomplete-item"]').first().click();

    cy.get("@searchInput").should("have.value", "Intel core i3");
  });

  it("Click on the tooltip completes the search input", function () {
    cy.get("@searchInput").type("AMD");

    cy.get('[data-cy="autocomplete-item"]').first().click();

    cy.get("@searchInput").should("have.value", "AMD Ryzen 9700");
  });

  it("Click on the tooltip completes the search input", function () {
    cy.get("@searchInput").type("AMD");

    cy.get('[data-cy="autocomplete-item"]').first().click();

    cy.get("@searchInput").should("have.value", "AMD Ryzen 9700");
  });

  it("Click on the tooltip completes the search input", function () {
    cy.get("@searchInput").type("Sony");

    cy.get('[data-cy="autocomplete-item"]').first().click();

    cy.get("@searchInput").should("have.value", "Sony WH-1000XM4");
  });

  it.only("Click on the tooltip completes the search input", function () {
    cy.get("@searchInput").type("GTX");

    cy.get('[data-cy="autocomplete-item"]').first().click();

    cy.get("@searchInput").should("have.value", "GTX 1060 9700");
  });

  it("Input phrase that too long should not return any seach results", function () {
    cy.get("@searchInput").type("Windows 10 Ala");

    cy.get('[data-cy="product]').should("not.exist");
  });
});
