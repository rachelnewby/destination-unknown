import App from "./App";

describe("App", () => {
  it("After the user has finished adding the input on the first form, the second form renders", () => {
    cy.mount(<App />);
    cy.get(".form__row:nth-child(1) .form-control").click();
    cy.get(".form__row:nth-child(1) .form-control").type("FCO");
    cy.get(".form__row:nth-child(3) .form-control").type("MAD");
    cy.get(".form__row:nth-child(5) .form-control").type("2023-08-01");
    cy.get(".form__row:nth-child(7) .form-control").click();
    cy.get(".form__row:nth-child(7) .form-control").type("2023-08-08");
    cy.get(".form__row:nth-child(9) .form-control").click();
    cy.get(".form__row:nth-child(9) .form-control").type("1");
    cy.get(".content:nth-child(1) > #First Flight Form button").click();
    cy.get(".content:nth-child(1) form").submit();
    cy.get(
      ".content:nth-child(2) > #First Flight Form .form__row:nth-child(1) .form-control"
    ).click();
    cy.get(
      ".content:nth-child(2) > #First Flight Form .form__row:nth-child(3) .form-control"
    ).click();
    cy.get(
      ".content:nth-child(2) > #First Flight Form .form__row:nth-child(5) .form-control"
    ).click();
    cy.get(
      ".content:nth-child(2) > #First Flight Form .form__row:nth-child(7) .form-control"
    ).click();
    cy.get(
      ".content:nth-child(2) > #First Flight Form .form__row:nth-child(9) .form-control"
    ).click();
    cy.get(".content:nth-child(2) > #First Flight Form button").click();
    cy.get(".content:nth-child(2) form").submit();
  });
});
