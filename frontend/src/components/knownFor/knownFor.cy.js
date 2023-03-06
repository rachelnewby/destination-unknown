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

  it("it should have the url link", () => {
    cy.mount(<KnownFor goatData={mockRoadGoatData} />);
    cy.get("#emoji-div").should("exist");
    cy.get(".emoji-image").each(($el) => {
      // Get the src attribute of each image
      const src = $el.attr("src");
      // Assert that the src attribute is not empty
      expect(src).to.not.be.empty;
      // Assert that the src attribute is a valid URL
      expect(src).to.match(/^http(s)?:\/\/\S+/);
    });
  });
});
