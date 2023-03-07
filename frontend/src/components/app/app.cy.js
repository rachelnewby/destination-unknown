import App from "./App";

describe("App", () => {
  it("User input form loads on screen", () => {
    cy.mount(<App />);
    cy.get("form").should("exist");
  });

  it("User can toggle between one and two input forms", () => {
    cy.mount(<App />);
    cy.get(".react-toggle-track").click();
    cy.get(":nth-child(3) > form").should("exist");
  });
});
