import mockRoadGoatData from "../roadGoatStatsChart/mockRoadGoatData";
import KnownFor from "./knownFor.js";

describe("KnownFor", () => {
  it("has a title for Known for", () => {
    cy.mount(<KnownFor goatData={mockRoadGoatData} />);
    cy.get("#knownfor-title").should("exist");
    cy.get("#knownfor-title").should("have.text", "KNOWN FOR");
  });

  it("a div exists that will then contain our spans", () => {
    cy.mount(<KnownFor goatData={mockRoadGoatData} />);
    cy.get("#emoji-div").should("exist");
  });
  it("a div exists that include known for text", () => {
    cy.mount(<KnownFor goatData={mockRoadGoatData} />);
    cy.get("#emoji-div").should("exist");
    cy.get("#Charming").should("have.text", "Charming");
  });
});
