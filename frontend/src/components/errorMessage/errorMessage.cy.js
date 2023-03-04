import ErrorMessage from "./errorMessage";

describe("ErrorMessage component", () => {
  it("should render an error message", () => {
    const message = "There are no flights to display!";
    cy.mount(<ErrorMessage error={message}/>);
    cy.get('.error-message').should('have.text', message)
  })
})