import Gallery from "./gallery";
import mockRoadGoatData from "../roadGoatStatsChart/mockRoadGoatData";

describe("Gallery", () => {
  it("Displays an image carousel where the user can click left or right to display new images", () => {
    cy.mount(<Gallery goatData={mockRoadGoatData} />);
    cy.get("#image-gallery").should("exist");
    cy.get("#image-gallery > :nth-child(2) > :nth-child(1)").should("exist");
    cy.get(":nth-child(2) > :nth-child(3)").should("exist");
  });
});
