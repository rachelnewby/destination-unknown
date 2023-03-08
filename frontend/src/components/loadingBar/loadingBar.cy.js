import LoadingBar from "./loadingBar";

describe("LoadingBar", () => {
  it("displays the loading bar", () => {
    cy.mount(<LoadingBar />);
    cy.get(".loadingBar").should("exist");
  });
});
